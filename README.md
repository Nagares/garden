
# 🌸 Garden

Garden is a React application that demonstrates the use of Chakra UI and i18next for creating a multilingual interface. This is my first project where I implemented language switching.

## 🚀 Features

- 🌐 Support for multiple languages using i18next
- 💅 Styling with Chakra UI
- 🔄 Animations with Framer Motion
- 🔗 Routing with React Router DOM

## 🛠 Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/Nagares/garden.git
cd garden
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Interfaces
│   │   │   ├── FooterDataProps.ts
│   │   │   └── NavLinkProps.ts
│   │   ├── Footer.tsx
│   │   ├── NavBar.tsx
│   │   └── ...
│   ├── i18n
│   │   ├── index.ts
│   │   └── locales
│   │       ├── en
│   │       │   └── translation.json
│   │       └── ua
│   │           └── translation.json
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── ...
```

## 🌐 Language Switching

The project implements language switching using i18next. To add a new language, create a translation file in `src/i18n/locales` and update the i18next configuration in `src/i18n/index.ts`.

Example translation file structure:

```json
{
  "welcome": "Welcome",
  "menu": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  }
}
```

## 📦 Dependencies

- **Chakra UI**: `@chakra-ui/react`, `@chakra-ui/icons`, `@emotion/react`, `@emotion/styled`
- **i18next**: `i18next`, `react-i18next`, `i18next-browser-languagedetector`, `i18next-http-backend`
- **React**: `react`, `react-dom`
- **React Router**: `react-router-dom`
- **Framer Motion**: `framer-motion`
- **TypeScript**: `typescript`, `@types/react`, `@types/react-dom`, `@types/node`

## 🧪 Scripts

- `start`: Start the application in development mode
- `build`: Build the application for production
- `test`: Run tests
- `eject`: Eject Create React App configuration

## 🤝 Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request. We welcome all your suggestions and improvements!


---

