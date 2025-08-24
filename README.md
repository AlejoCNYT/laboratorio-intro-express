# Laboratorio Intro Express — Servidor básico con Node.js + Express

Proyecto base para practicar **Express**: levanta un servidor, atiende la ruta raíz (`/`) y puede servir archivos estáticos.

> **Importante:** este repositorio **NO incluye** la carpeta `node_modules/`. Después de clonar, **ejecuta `npm install`** para restaurar las dependencias.

## ✨ Características

- Servidor HTTP con **Express**
- Endpoint raíz `GET /` (sirve `index.html` o una respuesta simple)
- Estructura mínima y clara para extender con rutas, middleware y estáticos

## 🔧 Requisitos

- **Node.js** 18 o superior  
- **npm** (incluido con Node)

## ⚡ Inicio rápido

```bash
# 1) Clona el repo
git clone https://github.com/<tu-usuario>/<tu-repo>.git
cd <tu-repo>

# 2) Restaura dependencias (node_modules no vienen en el repo)
npm install

# 3) Arranca el servidor (elige una opción)
npm run dev   # desarrollo con recarga (si usas nodemon)
# o
npm start     # ejecución normal
```

Servidor disponible en: **http://localhost:3000**

Prueba rápida:

```bash
curl -i http://localhost:3000/
```

## 📦 package.json (sugerido)

Asegúrate de tener algo similar a esto para que cualquiera pueda instalar y ejecutar:

```json
{
  "name": "laboratorio-intro-express",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js",
    "test": "echo \"No hay pruebas definidas\" && exit 0"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  },
  "engines": {
    "node": ">=18"
  }
}
```

Si no tienes `package.json`, créalo y añade dependencias:

```bash
npm init -y
npm i express
npm i -D nodemon
```

## 🗂️ Estructura recomendada

```
.
├── app.js
├── index.html
├── public/            # (opcional) CSS, JS, imágenes
├── package.json
└── package-lock.json
```

## 🧩 Ejemplo mínimo de `app.js`

```js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// (opcional) servir estáticos desde /public
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
```

## 🧪 Pruebas (si aplica)

```bash
npm test
```

> Si ves `Error: Cannot find module 'express'`, significa que **no ejecutaste `npm install`**. Recuerda que **`node_modules/` no se versiona** y debes restaurarlo con ese comando.

## 🚀 Despliegue

- Expone el puerto con `process.env.PORT` (ya incluido).
- Proveedores sugeridos: Render, Railway, Fly.io, etc.
- **No subas `node_modules/`**: el proveedor ejecutará `npm install` durante el build.

## 🙈 `.gitignore` recomendado

Crea un archivo `.gitignore` en la raíz:

```
node_modules/
npm-debug.log*
.env
.DS_Store
```

## ✅ Checklist antes de subir a GitHub

- [ ] `package.json` con dependencias y scripts (`dev`/`start`)  
- [ ] `.gitignore` ignorando `node_modules/`  
- [ ] Nota en este README aclarando que **faltan `node_modules/`** y se restaura con `npm install`  
- [ ] App arrancando en `http://localhost:3000`

## 📝 Licencia

Este proyecto se distribuye bajo la licencia **ISC** (puedes cambiarla si tu curso/repo lo requiere).
