# Aplicação Backend de Controle de Investimentos

Esta aplicação backend simplificada foi desenvolvida para o controle de investimentos. Ela permite o cadastro, visualização e exclusão de registros relacionados a ativos financeiros, como ações e fundos.

## Tecnologias Utilizadas

- ⚙️ **Node.js**
- 🚀 **NestJS**
- 📚 PrismaORM
- 🐘 PostgreSQL
- 🐳 Docker

## Como executar o projeto

### Pré-requisitos

Certifique-se de possuir as seguintes ferramentas instaladas:

- 🛠️ Node.js `(asdf install) - Instala a versão do Node.js localizada em .tool-versions`
- 🐳 Docker

## Passos para Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/PedroNB10/investments-app-crud.git
cd investments-app-crud
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o ambiente de desenvolvimento

```bash
npm run start:dev
```

Este comando realiza as seguintes ações sequenciais:

- Levanta os serviços Docker (PostgreSQL) 📦
- Inicia a aplicação NestJS 🚀
- Executa as migrations do PrismaORM 📚

### Explicação dos scripts

- `npm run start:dev`: Carrega variáveis do `.env.development` e inicia a aplicação em modo desenvolvimento.
- `npm run services:up`: Inicializa serviços necessários no Docker (ex.: PostgreSQL).
- `npm run wait-for-postgres`: Aguarda até o banco PostgreSQL estar disponível.
- `npm run prisma:migrate:up`: Aplica as migrations para atualizar o banco de dados.
- `npm run prisma:studio`: Abre o Prisma Studio para gerenciar o banco de dados visualmente.

## Scripts Úteis

| Comando                       | Descrição                             |
| ----------------------------- | ------------------------------------- |
| `npm run services:up`         | 🟢 Inicia serviços Docker             |
| `npm run services:down`       | 🔴 Encerra serviços Docker            |
| `npm run prisma:migrate:up`   | ✅ Aplica as migrations PrismaORM     |
| `npm run prisma:migrate:down` | 🔴 Reseta migrations PrismaORM        |
| `npm run prisma:studio`       | 📊 Interface visual do banco de dados |

---

📌 Agora você já pode utilizar sua aplicação de controle de investimentos! 💰📈
