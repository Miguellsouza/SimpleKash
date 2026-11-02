const { BrowserWindow } = require('electron');
const { app } = require('electron');
const path = require('path')
const { ipcMain } = require('electron')
const fs = require('fs/promises');

app.whenReady().then(async() => {
        const janela = new BrowserWindow({
            width: 1366,
            height: 768,

            webPreferences:{
                preload:path.join(__dirname, 'preload.js'),
                contextIsolation:true,
                nodeIntegration:false
            }
        });

        const pastaDados = path.join(app.getPath('userData'), 'dados')
        await fs.mkdir(pastaDados, {recursive:true})
        const caminhoArquivo = path.join(pastaDados, 'transacoes.json')

        try {
            await fs.access(caminhoArquivo)
        } catch (erro) {
            if(erro.code === 'ENOENT'){
                await fs.writeFile(caminhoArquivo, JSON.stringify({
                        usuario: {
                            nome: '',
                            descricao: '',
                            foto: null
                        },transacoes: []}), 'utf8')
            }else{
                throw erro
            }
        }

        
        console.log(caminhoArquivo)

        ipcMain.handle('transacoes:carregar',
            async () =>{
                const conteudo = await fs.readFile(caminhoArquivo, 'utf8')
                return JSON.parse(conteudo)
            }
        )

        ipcMain.handle('transacoes:salvar',
            async (evento, dados) =>{
                const conteudo = JSON.stringify(dados)
                return  await fs.writeFile(caminhoArquivo, conteudo)
            }
        )

        janela.loadFile('index.html');
    }
);