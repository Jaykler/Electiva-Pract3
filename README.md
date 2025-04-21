# Electiva-Pract3

Aplicación web simple desarrollada en Node.js y Express, que implementa un pipeline CI/CD básico utilizando GitHub Actions para automatizar pruebas y despliegue en GitHub Pages.

## 🚀 Características

- Servidor web con Express.js
- Pruebas unitarias e integración con Jest y Supertest
- Cobertura de código automatizada
- Pipeline CI/CD con GitHub Actions
- Despliegue automático a GitHub Pages

## 📁 Estructura del proyecto

Electiva-Pract3/ ├── .github/workflows/ci.yml ├── app.js ├── index.js ├── package.json ├── test/ │ └── app.test.js └── README.md


## 🛠️ Requisitos

- Cuenta en GitHub
- Node.js instalado localmente
- Editor de código (recomendado: VS Code)
- Conocimientos básicos de Git

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Jaykler/Electiva-Pract3.git
cd Electiva-Pract3
```
2. Instala las dependencias:
   *npm install
  
3. Inicia la aplicación:
    *npm start

## Pipeline CI/CD

El flujo de trabajo de GitHub Actions (`.github/workflows/ci.yml`) realiza las siguientes acciones en cada push a la rama `main`:

- Instala las dependencias
- Ejecuta las pruebas y genera el reporte de cobertura
- Construye la aplicación (si aplica)
- Despliega automáticamente a GitHub Pages
