<div align="center">

# SimpleKash

**Um aplicativo desktop simples para gerenciar suas finanças pessoais.**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Electron](https://img.shields.io/badge/Electron-47848F?logo=electron&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Licença](https://img.shields.io/badge/licença-ISC-blue)

[🇺🇸 English](README.md) · 🇧🇷 Português

</div>

> [!WARNING]
> **O SimpleKash está em desenvolvimento ativo.** Algumas funcionalidades estão incompletas, a interface pode mudar e é esperado que existam bugs. Ainda não é recomendado para uso em produção.

## Sumário

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Modelo de dados](#modelo-de-dados)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor](#autor)

## Sobre

O SimpleKash é um gerenciador financeiro pessoal para desktop, desenvolvido com **JavaScript** e **Electron**. Com ele você registra seus ganhos e despesas, consulta o histórico de transações e mantém seus dados armazenados localmente no seu computador, sem precisar de conta ou servidor.

Atualmente a interface está em português do Brasil e utiliza o Real brasileiro (R$).

<!-- Adicione capturas de tela aqui, por exemplo:
![Visão geral do SimpleKash](docs/screenshot.png)
-->

## Funcionalidades

**Disponíveis agora**

- Cadastro de transações como **ganho** ou **despesa**, com título, descrição opcional, valor (R$) e data (preenchida com a data de hoje por padrão).
- Histórico de transações com as mais recentes primeiro, exibindo a data e um indicador visual para ganhos e despesas.
- Persistência local dos dados em um arquivo JSON, gerenciada pelo processo principal do Electron por meio de uma ponte (preload).
- Interface em tema escuro, com barra lateral e painel de visão geral.

**Em andamento**

- Cartões de resumo com saldo, ganhos e despesas (o layout está pronto, mas os cálculos ainda não foram conectados).
- Exclusão permanente de transações (por enquanto, "Excluir" apenas remove o item da lista exibida na tela).
- Edição de transações.
- Edição de perfil (nome, descrição e foto).
- Importação de dados a partir de um arquivo `.json`.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | Lógica da aplicação |
| [Electron](https://www.electronjs.org/) | Aplicação desktop multiplataforma |
| HTML5 + CSS3 | Interface do usuário |
| [Font Awesome](https://fontawesome.com/) | Ícones (carregados via CDN) |
| JSON | Armazenamento local dos dados |

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada) e npm
- [Git](https://git-scm.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Miguellsouza/SimpleKash.git

# Entre na pasta do projeto
cd SimpleKash

# Instale as dependências
npm install
```

### Executando o aplicativo

```bash
npm start
```

Esse comando executa `electron .` e abre a janela do SimpleKash.

> [!NOTE]
> Os ícones e o avatar padrão são carregados de CDNs externas, então é preciso ter conexão com a internet para que apareçam. Seus dados financeiros em si ficam apenas na sua máquina.

Ainda não há instaladores nem releases disponíveis.

## Estrutura do projeto

```text
SimpleKash/
├── .vscode/            # Configurações do editor
├── .gitignore
├── index.html          # Interface (HTML, CSS e script do renderer)
├── main.js             # Processo principal do Electron
├── preload.js          # Ponte entre o processo principal e a interface
├── package.json
└── package-lock.json
```

## Modelo de dados

Os dados são salvos localmente em JSON com a seguinte estrutura:

```json
{
  "usuario": {
    "nome": "",
    "descricao": "",
    "foto": null
  },
  "transacoes": [
    {
      "id": "b1f3c2a4-0000-0000-0000-000000000000",
      "titulo": "Salário",
      "descricao": "Salário mensal",
      "valor": 3000,
      "data": "2026-11-02",
      "tipo": "ganho"
    }
  ]
}
```

| Campo | Descrição |
| --- | --- |
| `id` | Identificador único da transação (UUID) |
| `titulo` | Título da transação |
| `descricao` | Descrição opcional |
| `valor` | Valor em reais |
| `data` | Data no formato `AAAA-MM-DD` |
| `tipo` | `ganho` ou `despesa` |

## Roadmap

- [x] Configuração do aplicativo Electron
- [x] Cadastro de ganhos e despesas
- [x] Histórico de transações
- [x] Persistência local em JSON
- [ ] Calcular saldo atual, total de ganhos e total de despesas
- [ ] Exclusão permanente de transações
- [ ] Edição de transações
- [ ] Edição do perfil do usuário (nome, descrição e foto)
- [ ] Importação de dados a partir de um arquivo JSON
- [ ] Visão geral e filtro por mês
- [ ] Instaladores para Windows, macOS e Linux
- [ ] Interface em vários idiomas

## Contribuindo

O projeto ainda está no início, mas feedbacks são bem-vindos. Se encontrou um bug ou tem uma ideia:

1. Abra uma [issue](https://github.com/Miguellsouza/SimpleKash/issues) descrevendo o caso.
2. Ou faça um fork do repositório, crie uma branch (`git checkout -b feature/minha-feature`), faça seus commits e abra um pull request.

## Licença

Este projeto declara a licença **ISC** no seu `package.json`.

## Autor

Desenvolvido por [@Miguellsouza](https://github.com/Miguellsouza).
