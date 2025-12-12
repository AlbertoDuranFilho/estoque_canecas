### Lojão das Canecas 🍵 — Controle de Estoque (TypeScript + POO)

Projeto desenvolvido durante o programa **Generation Brasil**, com foco em **TypeScript**, **Programação Orientada a Objetos (POO)** e uma aplicação executada **no terminal**.

O sistema simula um **controle de estoque de canecas**, com um **menu colorido** e um **CRUD básico** para gerenciar os itens cadastrados.

---

### ✅ Funcionalidades (CRUD)

- ➕ **Cadastrar** caneca
- 📋 **Listar** todas as canecas
- 🔎 **Listar por ID**
- ✏️ **Atualizar** caneca
- 🗑️ **Deletar** caneca
- 🎁 **Comprar** caneca
- 🚪 **Sair** do sistema

---

### 🧠 Conceitos praticados

- Programação Orientada a Objetos (**classes**, **métodos**, **encapsulamento**, **interfaces**, **polimorfismo**)
- Tipagem e boas práticas com **TypeScript**
- Entrada e saída de dados no terminal usando **readline-sync**
- Organização do código por pastas (model / menu / repository ou service)

---

### 🛠 Tecnologias e Ferramentas

- **Node.js**
- **TypeScript**
- **readline-sync**
- Git & GitHub

---

### ▶️ Como executar o projeto

#### Pré-requisitos
- Node.js instalado
- Typescript instalado
- ts-node instalado
- npm 

#### Passo a passo
1. Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

```
2. Entre na pasta do projeto:
```bash
cd SEU-REPOSITORIO
```
3. Instale as dependências:
```bash
npm install
```
4. Execute a aplicação:
```bash
ts-node Menu.ts
```

---

### 📂 Estrutura do projeto
```bash
├── src
│   ├── util
│   │   └── Colors.ts 
│   ├── repository  
│   │   └── ProdutoRepository.ts        
│   ├── models
│   │   ├── Caneca.ts 
│   │   └── Produto.ts           
│   └── Menu.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```
---

### 📌 Observações
- Projeto executado 100% no terminal
- Dados armazenados em memória durante a execução (sem banco de dados), ideal para praticar lógica e POO

---

## 👤 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/alberto-janeiro">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/67593467?v=4" width="100px;" alt="Foto de perfil"/><br />
        <sub><b>Alberto Duran</b></sub>
      </a>
      <br />❤️
    </td>
  </tr>
</table>