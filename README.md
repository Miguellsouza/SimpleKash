<div align="center">

# SimpleKash

**A simple desktop app to manage your personal finances.**

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Electron](https://img.shields.io/badge/Electron-47848F?logo=electron&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-ISC-blue)

🇺🇸 English · [🇧🇷 Português](README.pt-BR.md)

</div>

> [!WARNING]
> **SimpleKash is under active development.** Some features are incomplete, the interface may change, and bugs are expected. It is not ready for production use yet.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Model](#data-model)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## About

SimpleKash is a desktop personal finance manager built with **JavaScript** and **Electron**. It lets you record your income and expenses, review a history of your transactions, and keep your data stored locally on your computer, with no account or server required.

The interface is currently in Brazilian Portuguese and uses Brazilian Real (R$).

<!-- Add screenshots here, e.g.:
![SimpleKash overview](docs/screenshot.png)
-->

## Features

**Available now**

- Add transactions as **income** or **expense**, with a title, an optional description, an amount (R$), and a date (defaults to today).
- Transaction history with the newest entries first, showing the date and a visual indicator for income and expenses.
- Local data persistence in a JSON file, handled by the Electron main process through a preload bridge.
- Dark-themed interface with a sidebar and an overview dashboard.

**In progress**

- Balance, income, and expense summary cards (the layout is ready; the calculations are not wired up yet).
- Permanent deletion of transactions (for now, "Delete" only removes the item from the list on screen).
- Editing transactions.
- Profile editing (name, description, and photo).
- Importing data from a `.json` file.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application logic |
| [Electron](https://www.electronjs.org/) | Cross-platform desktop shell |
| HTML5 + CSS3 | User interface |
| [Font Awesome](https://fontawesome.com/) | Icons (loaded from a CDN) |
| JSON | Local data storage |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Miguellsouza/SimpleKash.git

# Enter the project folder
cd SimpleKash

# Install dependencies
npm install
```

### Running the app

```bash
npm start
```

This runs `electron .` and opens the SimpleKash window.

> [!NOTE]
> Icons and the default avatar are loaded from external CDNs, so an internet connection is needed for them to appear. Your financial data itself stays on your machine.

There are no packaged installers or releases yet.

## Project Structure

```text
SimpleKash/
├── .vscode/            # Editor settings
├── .gitignore
├── index.html          # Interface (HTML, CSS, and renderer script)
├── main.js             # Electron main process
├── preload.js          # Bridge between the main process and the interface
├── package.json
└── package-lock.json
```

## Data Model

Data is saved locally as JSON with the following structure:

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
      "titulo": "Salary",
      "descricao": "Monthly salary",
      "valor": 3000,
      "data": "2026-11-02",
      "tipo": "ganho"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `id` | Unique transaction identifier (UUID) |
| `titulo` | Transaction title |
| `descricao` | Optional description |
| `valor` | Amount in Brazilian Real |
| `data` | Date in `YYYY-MM-DD` format |
| `tipo` | `ganho` (income) or `despesa` (expense) |

## Roadmap

- [x] Electron app setup
- [x] Add income and expense transactions
- [x] Transaction history
- [x] Local JSON persistence
- [ ] Calculate current balance, total income, and total expenses
- [ ] Permanent deletion of transactions
- [ ] Edit transactions
- [ ] Edit user profile (name, description, photo)
- [ ] Import data from a JSON file
- [ ] Monthly overview and filtering
- [ ] Installers for Windows, macOS, and Linux
- [ ] Multi-language interface

## Contributing

The project is still at an early stage, but feedback is welcome. If you find a bug or have an idea:

1. Open an [issue](https://github.com/Miguellsouza/SimpleKash/issues) describing it.
2. Or fork the repository, create a branch (`git checkout -b feature/my-feature`), commit your changes, and open a pull request.

## License

This project declares the **ISC** license in its `package.json`.

## Author

Developed by [@Miguellsouza](https://github.com/Miguellsouza).
