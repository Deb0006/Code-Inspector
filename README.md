## Code Inspector

This is a Next.js project designed to provide an AI-powered explanation of code blocks. The project is bootstrapped with `create-next-app` and utilizes the OpenAI API, Prism.js for syntax highlighting, Firebase for user authentication, and content-filter-alpha API to protect from displaying any unsafe or sensitive text.

## Web App
[Link to Site](https://code-inspector.vercel.app/)

<img src="https://github.com/Deb0006/Code-Inspector/blob/main/CodeInspector.gif" alt="" border="0">

## Built with
- Next.js (React)
- CSS
- JavaScript / JSX
- Node
- Firebase

## Features
- Generates explanation of code with AI 
- Provides user authentication with Firebase
- Code syntax highlighted with Prism.js

## Getting Started

To get started with Code Inspector, simply clone the repository and install the dependencies.
```bash
git clone https://github.com/Deb0006/Code-Inspector.git
cd smartstudy
npm install
```
Once the dependencies are installed, you can now run the application.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You can edit the page by modifying `pages/index.js` and the page will auto-update. Additionally, API routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

## Setup
To run this project, you need to create an `.env.local` file in the root of the project. Inside the file, you need to include your own private keys for the Firebase and OpenAI API.

For Firebase, you will need to include:

```
FIREBASE_KEY=
```

For OpenAI, you will need to include:

```
OPENAI_API_KEY=
```
To learn more about Next.js and the project, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) 
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next)
