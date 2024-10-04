[English version below](#english-version)

# Portfolio

Dieses vollständig responsive Single-Page-Portfolio wurde mit React und Vite erstellt und verwendet CSS-Module für das Styling. Das Kontaktformular ist mit einem kleinen Server verknüpft, um im Backend Emails zu senden. Als Sprache kann entweder Englisch oder Deutsch ausgewählt werden.

## Vorschau

Die Website ist sowohl im Dark Mode als auch im Light Mode verfügbar:

![Screenshots der Website im Hellmodus](./src/assets/screenshots/screenshot_light.png)
![Screenshots der Website im Dunkelmodus](./src/assets/screenshots/screenshot_dark.png)

## Live-Demo

Schau dir die Website hier live an: [Zum Portfolio](https://hannahnier.onrender.com/)

## Kontaktformular

Das Portfolio enthält ein funktionales Kontaktformular, das es ermöglicht, Nachrichten direkt über die Website zu senden. Das Formular wird von einem kleinen Server im Hintergrund unterstützt, der mit **Node.js** und **Express.js** gebaut ist und **Nodemailer** verwendet, um E-Mails zu versenden.

## Installation und lokales Ausführen

<details>
<summary>Installationsanleitung ein-/ausklappen</summary>
Wenn du das Projekt lokal ausführen möchtest, folge bitte diesen Schritten:

1. **Klone das Repository und navigiere in das Projektverzeichnis:**
   ```bash
   git clone git@github.com:hannahnier/portfolio.git
   cd portfolio
   ```
2. **Installiere die Abhängigkeiten und starte den Entwicklungsserver:**
   ```bash
   npm install
   npm run dev
   ```
   Das Portfolio sollte dann lokal unter `http://localhost:3000` zugänglich sein.
   </details>

## Technologie-Stack

- **React** & **Vite**
- **CSS-Module** für das Styling
- **Node.js & Express.js** für den Backend-Server
- **Nodemailer** für die E-Mail-Funktionalität des Kontaktformulars
- **Eigenes Wörterbuch** für die Übersetzung der Inhalte je nach gewünschter Sprache

---

# English Version

This fully responsive single-page portfolio was built with React and Vite and uses CSS Modules for styling. The contact form is linked to a small server to send emails in the backend. Either English or German can be selected as the language.

## Preview

The portfolio website comes with a dark and light mode:

![Screenshots of website in light mode](./src/assets/screenshots/screenshot_light.png)
![Screenshots of website in dark mode](./src/assets/screenshots/screenshot_dark.png)

## Explore the Website

Take a look at the deployed website here: [https://hannahnier.onrender.com/](https://hannahnier.onrender.com/)

## Contact Form

The portfolio includes a functional contact form that allows users to send messages directly through the website. The form is supported by a small server built with **Node.js** and **Express.js**, and it uses **Nodemailer** to send emails.

## Installation and Running Locally

<details>
<summary>Show/hide step-by-step instructions</summary>

If you want to run the project locally, please follow these steps:

1. **Clone the repository and navigate to the project directory:**
   ```bash
   git clone git@github.com:hannahnier/portfolio.git
   cd portfolio
   ```
2. **Install dependencies and start the development server:**
   ```bash
   npm install
   npm run dev
   ```
   The portfolio should then be locally accessible at `http://localhost:3000`.
   </details>

## Tech Stack

- **React** & **Vite**
- **CSS Modules** for styling
- **Node.js & Express.js** for the backend server
- **Nodemailer** for email functionality linked to the contact form
- **Own dictionary** for the translation of content depending on the desired language
