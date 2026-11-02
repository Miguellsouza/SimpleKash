const { contextBridge } = require('electron')
const { ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'simplekash',
    {
        teste: 'ponte funcionando',
        carregarDados: () =>{
            return ipcRenderer.invoke('transacoes:carregar')
        },
        salvarDados: async (dados) =>{
            return ipcRenderer.invoke('transacoes:salvar', dados)
            
        }
    }
)