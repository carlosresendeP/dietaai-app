
# 📱 DietAi APP

Um aplicativo mobile desenvolvido com **React Native** e **Expo**, para geração de dietas personalizadas. Utiliza variáveis de ambiente para proteger sua `API_KEY` e se conecta a um backend via API com **Node.js**, **TypeScript** e **Fastify**.

---
![Home](https://github.com/user-attachments/assets/c5b367da-d860-4da4-9083-11a634f0f4dc)
![Step1](https://github.com/user-attachments/assets/a273463b-3e1b-444d-8945-e2a6dcb96d6e)
![Step2](https://github.com/user-attachments/assets/58c62d22-d3e5-42a0-bde6-1adc3f09bca7)
![Diet](https://github.com/user-attachments/assets/89b0cea7-17be-4ead-9b15-1eb8d618a225)


---

## 📦 Tecnologias Utilizadas

- React Native  
- Expo  
- TypeScript  
- react-native-dotenv  
- Google Gemini 2.0  
- Node.js (backend)  
- TypeScript (backend)  
- Fastify (backend)  

---

## 🚀 Como Rodar o Projeto

### 📱 Mobile (React Native + Expo)

1. Clone este repositório:

   ```bash
   git clone https://github.com/carlosresendeP/DietAi-App.git
   ```

2. Acesse a pasta do projeto mobile:

   ```bash
   cd mobile
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npx expo start
   ```

---

### 🖥️ Backend (Node.js + Fastify)

1. Acesse a pasta do backend (que está na raiz do projeto):

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz da pasta `backend` e configure as variáveis necessárias, incluindo a `API_KEY` do Google Gemini:

   ```env
   API_KEY=SUA_CHAVE_AQUI
   ```

4. Execute o servidor:

   ```bash
   npm run dev
   ```

---

## 📂 Estrutura do Projeto

```
├── backend
│   ├── src
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── mobile
│   ├── .expo
│   ├── .vscode
│   ├── app
│   │   ├── create
│   │   ├── nutrition
│   │   ├── step
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── app-example
│   │   ├── app
│   │   ├── components
│   │   ├── constants
│   │   ├── hooks
│   │   └── scripts
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   ├── footer
│   │   ├── header
│   │   └── input
│   ├── constants
│   │   └── Colors.ts
│   ├── dist
│   ├── node_modules
│   ├── services
│   │   └── api.ts
│   ├── store
│   │   └── data.ts
│   ├── types
│   │   └── data.ts
│   ├── .gitignore
│   └── package.json
├── README.md
└── LICENSE
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<p align="center">Feito com ❤️ por <strong>Carlos Resende</strong></p>
