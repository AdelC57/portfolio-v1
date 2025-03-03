# Portfolio personnel d'Adel

Ce portfolio a été développé avec Vue.js pour présenter mes compétences et projets en développement web.

![Portfolio Preview](./src/assets/preview.png)

## 🚀 Live Demo

Vous pouvez voir la version en ligne du portfolio ici : [adel-portfolio.netlify.app](https://adel-portfolio.netlify.app)

## ✨ Fonctionnalités

- Design responsive adapté à tous les appareils
- Section de présentation personnelle
- Galerie de projets avec modals interactives
- Formulaire de contact fonctionnel
- Navigation fluide avec ancres
- Page 404 personnalisée

## 🛠️ Développé avec

- [Vue.js 3](https://v3.vuejs.org/) - Framework JavaScript progressif
- [Vue Router](https://router.vuejs.org/) - Routeur officiel pour Vue.js
- HTML5 & CSS3 - Avec Flexbox pour des mises en page responsives
- JavaScript ES6+ - Pour la logique interactive

## 📋 Prérequis

- Node.js (v14.0 ou supérieur)
- npm (v6.0 ou supérieur)

## ⚙️ Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votre-username/portfolio.git
cd portfolio
```

2. Installez les dépendances
```bash
npm install
```

## 🏃‍♂️ Lancement

### Mode développement
Pour lancer le serveur de développement :
```bash
npm run serve
```
Accédez ensuite à `http://localhost:8080/` dans votre navigateur.

### Compilation pour la production
Pour construire l'application pour la production :
```bash
npm run build
```

## 📁 Structure du projet

```
portfolio/
├── public/               # Fichiers statiques publics
├── src/                  # Code source principal
│   ├── assets/           # Images, polices, etc.
│   ├── components/       # Composants Vue réutilisables
│   │   └── Header.vue    # Composant d'en-tête
│   ├── router/           # Configuration du router
│   │   └── index.js      # Définition des routes
│   ├── views/            # Pages/vues principales
│   │   ├── HomeView.vue  # Page d'accueil
│   │   └── NotFound.vue  # Page 404
│   ├── App.vue           # Composant racine
│   └── main.js           # Point d'entrée de l'application
└── package.json          # Dépendances et scripts
```

## ✅ Validation W3C

L'HTML et le CSS de ce projet ont été validés par les validateurs du W3C :
- [Validation HTML W3C](https://validator.w3.org/)
- [Validation CSS W3C](https://jigsaw.w3.org/css-validator/)

## 📝 Fonctionnalités détaillées

### Modal de projet
Les cartes de projet affichent une modal détaillée au clic avec:
- Titre du projet
- Date de réalisation
- Technologies utilisées
- Description détaillée
- Liens vers le site live et le code source

### Navigation par ancres
Le header permet une navigation fluide vers les différentes sections:
- Présentation
- Réalisations
- Contact

### Formulaire de contact
Un formulaire interactif permettant aux visiteurs de me contacter.

## 👤 Auteur

- **Adel** - *Développeur Web en formation*

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Ce portfolio a été réalisé dans le cadre de ma formation au Centre Européen de Formation (CEF).