
# 📱 DietAi APP

Um aplicativo mobile desenvolvido com **React Native** e **Expo**, para geração de dietas personalizadas. Utiliza variáveis de ambiente para proteger sua `API_KEY` e se conecta a um backend via API com **Node.js**, **TypeScript** e **Fastify**.

---
![Home](https://github.com/user-attachments/assets/67183534-1119-4487-8ac4-829aeee367f8)
![Step1](https://github.com/user-attachments/assets/ca743b4e-ba6e-4282-880f-18a57c6af4d6)
![Step2](https://github.com/user-attachments/assets/72b97b47-1114-4bfd-ac4e-d487f46f4a24)
![Diet](https://github.com/user-attachments/assets/2a3ff28f-7c06-4ce0-9b25-e69cbe4a4e2d)



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
