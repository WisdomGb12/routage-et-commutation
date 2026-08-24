# Routage et Commutation - Formation Interactive

Ce projet est une plateforme d'apprentissage interactive dédiée aux fondamentaux du réseau, ciblant spécifiquement le programme **Cisco CCNA 200-301**. Elle combine théorie, travaux pratiques (Labs) et quiz de vérification pour une préparation complète.

## 🚀 Fonctionnalités Clés

-   **Apprentissage par Phases** : 6 phases structurées allant des fondamentaux aux technologies avancées (VLANs, OSPF, IPv6, NAT, ACLs).
-   **Navigation Intuitive** : Menu "Ressources" regroupant les Projets et la préparation CCNA, avec une expérience fluide sur bureau et mobile.
-   **Quiz Interactifs** : Moteur de quiz en JavaScript avec feedback immédiat, explications détaillées et options repliables pour optimiser l'espace.
-   **Suivi de Progression** : Marquage des chapitres lus et des phases terminées.
-   **Design Moderne** : Thèmes Clair/Sombre, blocs de code avec fonction de copie, et diagrammes de topologie standardisés.

## 🏗️ Architecture et Persistance des Données

Ce projet est conçu comme une **Single Page Application (SPA) multi-fichiers** entièrement statique.

### Sans Backend (Serverless)
L'application ne nécessite aucun serveur backend, aucune base de données (SQL/NoSQL) ni API externe pour fonctionner. L'intégralité de la logique de traitement (calcul des scores de quiz, gestion du thème, suivi de progression) est exécutée côté client (dans le navigateur de l'utilisateur).

### Gestion de la Progression (Local Storage)
Pour offrir une expérience persistante sans base de données, l'application utilise l'API **`localStorage`** du navigateur :
-   **Clés de stockage** :
    -   `routage-theme` : Enregistre le choix du thème (clair ou sombre).
    -   `routage-commutation-progress` : Stocke l'état d'achèvement des phases (ex: Phase 1 terminée).
    -   `routage-commutation-sections` : Suit les chapitres spécifiques marqués comme "Lus" à l'intérieur de chaque phase.
    -   `quiz_state_{phaseId}` : Sauvegarde les réponses, le score et l'état de soumission des quiz.
-   **Avantages** : Les données sont sauvegardées automatiquement et restent disponibles indéfiniment (même après redémarrage), **tant que vous ne videz pas le cache ou les données de site** de votre navigateur.
-   **Confidentialité** : Aucune donnée n'est envoyée à un serveur tiers ; votre progression reste localement sur votre machine.

## 📂 Structure du Projet

-   `/` : Fichiers HTML principaux (`index.html`).
-   `/pages/` : Contenu détaillé des phases (Phase 1 à 6), projets et CCNA.
-   `/styles/` : Fichiers CSS (`main.css`) gérant le design system, le responsive et les animations.
-   `/js/` : 
    -   `main.js` : Initialisation globale, gestion du thème, du menu mobile et de la progression.
    -   `quiz.js` : Moteur de gestion des quiz (rendu, validation, toggle).
    -   `quiz_data.js` : Banque de questions organisée par phase.
-   `/assets/` : Images et schémas d'architecture.

## 🛠️ Stack Technique

-   **Vanilla Web Stack** : HTML5, CSS3 et JavaScript pur. Aucun framework (React, Vue, etc.) n'est utilisé pour garantir une légèreté extrême.
-   **Font Awesome** : Bibliothèque d'icônes vectorielles.
-   **Google Fonts** : Utilisation de polices modernes pour une lisibilité accrue des termes techniques.

## 🌍 Hébergement

Ce site est actuellement mis en ligne via **GitHub Pages**.

-   **Type** : Hébergement Statique
-   **CI/CD** : Déploiement automatique depuis la branche `main`.
-   **Avantage** : Gratuit, rapide et intégré à l'écosystème GitHub.

## 📖 Utilisation

Ouvrez simplement `index.html` dans n'importe quel navigateur web moderne. Pour réinitialiser votre progression, vous pouvez vider le cache/stockage local du navigateur via les outils de développement (F12 > Application > Local Storage).

---
*Projet développé pour faciliter l'accès aux connaissances réseau et la réussite de la certification CCNA.*

## 📝 Changelog

### 6e version - 2026-08-24

Principales modifications récentes :

- Intégration de la page `Programme.html` dans le site et harmonisation du style (liaison à `styles/main.css`).
- Déplacement du lien **Programme** vers le menu déroulant *Ressources* pour réduire la distraction en haut de page.
- Simplification du footer de la page d'accueil : navigation réduite, meilleure hiérarchie visuelle et disclaimer clarifié.
- Harmonisation du style des pages de contenu (polices, couleurs, boutons, hover en mode sombre).
- Correction des erreurs d'encodage/affichage et nettoyage du texte sur les pages (caractères spéciaux, orthographe).
- Ajustements UX : CTA recentré, animations raccourcies et TOC comportant un comportement responsive plus simple.

Si tu veux une entrée de changelog plus détaillée (par page modifiée), je peux générer une liste automatique des fichiers modifiés et l’ajouter ici.

---
