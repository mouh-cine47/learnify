# Learnify — Plateforme E-Learning UM5

Learnify est une plateforme de e-learning développée pour l'Université Mohammed V de Rabat. Elle centralise les cours, les ressources pédagogiques, les quiz interactifs et les attestations de réussite. Elle s'adresse aux **enseignants** qui souhaitent créer et gérer leur contenu, ainsi qu'aux **étudiants** qui veulent suivre leur progression et valider leurs apprentissages.

---

## 👥 Membres de l'équipe

| Prénom & Nom | Rôle Scrum | Contribution principale |
|---|---|---|
| ALOUANI Mouhcine | Product Owner | Frontend (QuizPage, Dashboard, CoursePage, Navbar, Sidebar, App.jsx, CSS, apiBase) |
| FARIZ Adam | Développeur | Backend (server, routes, controllers, models, middleware, DB config), Docker, vite config |
| CHAMSSI Imane | Développeur | Intégration frontend-backend, ProfilePage, CourseCard, corrections controllers |

---

## 🛠 Technologies utilisées

| Couche | Technologie | Version |
|---|---|---|
| Frontend | React | 19.x |
| Frontend | Vite | 8.x |
| Frontend | Tailwind CSS | 4.x |
| Frontend | React Router DOM | 7.x |
| Frontend | Framer Motion | 11.x |
| Backend | Node.js | 18+ |
| Backend | Express.js | 4.x |
| Backend | JSON Web Token (JWT) | 9.x |
| Backend | Multer (upload fichiers) | 2.x |
| Base de données | MongoDB (via Mongoose) | 8.x |
| Conteneurisation | Docker & Docker Compose | — |

---

## ⚙️ Prérequis d'installation

- **Docker** v24+ — [docs.docker.com](https://docs.docker.com/get-docker/)
- **Docker Compose** v2+ (inclus avec Docker Desktop)
- **Git** — [git-scm.com](https://git-scm.com)

---

## 🚀 Instructions de lancement

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/farizadam/learnify.git
   cd learnify
   ```

2. **Lancer l'application :**
   ```bash
   docker compose up --build
   ```

   Cela démarre automatiquement :
   - MongoDB sur `mongodb://localhost:27017`
   - L'API backend sur `http://localhost:3000`
   - Le frontend sur `http://localhost:5173`

3. **Arrêter l'application :**
   ```bash
   docker compose down
   ```

---

## 🌐 URL de déploiement

**👉 [https://learnnifyyy.netlify.app/](https://learnnifyyy.netlify.app/)**

> Frontend hébergé sur **Netlify** — Backend hébergé sur **Railway**.

---

## 🔑 Identifiants de test

| Rôle | Email | Mot de passe |
|---|---|---|
| Étudiant | sara.benmossa@gmail.com | 123456 |
| Enseignant | jalal.fathi@gmail.com | fathi1234 |

> ⚠️ Ces données sont fictives et utilisées uniquement à des fins de démonstration.

---

## 📁 Livrables antérieurs

| Livrable | Description | Lien |
|---|---|---|
| Fiche Projet | Contexte, équipe, périmètre | [docs/learnify.pdf](./docs/learnify.pdf) |
| Livrable 2 | Estimation COCOMO, WBS, Gantt | [docs/6_learnify_S2.pdf](./docs/6_learnify_S2.pdf) |
| Livrable 3 | Backlog Scrum, Sprints, Cérémonies | [docs/Livrable_3_6.pdf](./docs/Livrable_3_6.pdf) |
| Livrable Final | Dépôt Git, déploiement, rétrospective | [docs/6_learnify_Final.pdf](./docs/6_learnify_Final.pdf) |
