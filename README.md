# Routage et Commutation - Formation Interactive

Ce projet est une plateforme d'apprentissage interactive dÃ©diÃ©e aux fondamentaux du rÃ©seau, ciblant spÃ©cifiquement le programme **Cisco CCNA 200-301**. Elle combine thÃ©orie, travaux pratiques (Labs) et quiz de vÃ©rification pour une prÃ©paration complÃ¨te.

## ðŸš€ FonctionnalitÃ©s ClÃ©s

-   **Apprentissage par Phases** : 6 phases structurÃ©es allant des fondamentaux aux technologies avancÃ©es (VLANs, OSPF, IPv6, NAT, ACLs).
-   **Navigation Intuitive** : Menu "Ressources" regroupant les Projets et la prÃ©paration CCNA, avec une expÃ©rience fluide sur bureau et mobile.
-   **Quiz Interactifs** : Moteur de quiz en JavaScript avec feedback immÃ©diat, explications dÃ©taillÃ©es et options repliables pour optimiser l'espace.
-   **Suivi de Progression** : Marquage des chapitres lus et des phases terminÃ©es.
-   **Design Moderne** : ThÃ¨mes Clair/Sombre, blocs de code avec fonction de copie, et diagrammes de topologie standardisÃ©s.

## ðŸ—ï¸ Architecture et Persistance des DonnÃ©es

Ce projet est conÃ§u comme une **Single Page Application (SPA) multi-fichiers** entiÃ¨rement statique.

### Sans Backend (Serverless)
L'application ne nÃ©cessite aucun serveur backend, aucune base de donnÃ©es (SQL/NoSQL) ni API externe pour fonctionner. L'intÃ©gralitÃ© de la logique de traitement (calcul des scores de quiz, gestion du thÃ¨me, suivi de progression) est exÃ©cutÃ©e cÃ´tÃ© client (dans le navigateur de l'utilisateur).

### Gestion de la Progression (Local Storage)
Pour offrir une expÃ©rience persistante sans base de donnÃ©es, l'application utilise l'API **`localStorage`** du navigateur :
-   **ClÃ©s de stockage** :
    -   `routage-theme` : Enregistre le choix du thÃ¨me (clair ou sombre).
    -   `routage-commutation-progress` : Stocke l'Ã©tat d'achÃ¨vement des phases (ex: Phase 1 terminÃ©e).
    -   `routage-commutation-sections` : Suit les chapitres spÃ©cifiques marquÃ©s comme "Lus" Ã  l'intÃ©rieur de chaque phase.
    -   `quiz_state_{phaseId}` : Sauvegarde les rÃ©ponses, le score et l'Ã©tat de soumission des quiz.
-   **Avantages** : Les donnÃ©es sont sauvegardÃ©es automatiquement et restent disponibles indÃ©finiment (mÃªme aprÃ¨s redÃ©marrage), **tant que vous ne videz pas le cache ou les donnÃ©es de site** de votre navigateur.
-   **ConfidentialitÃ©** : Aucune donnÃ©e n'est envoyÃ©e Ã  un serveur tiers ; votre progression reste localement sur votre machine.

## ðŸ“‚ Structure du Projet

-   `/` : Fichiers HTML principaux (`index.html`).
-   `/pages/` : Contenu dÃ©taillÃ© des phases (Phase 1 Ã  6), projets et CCNA.
-   `/styles/` : Fichiers CSS (`main.css`) gÃ©rant le design system, le responsive et les animations.
-   `/js/` : 
    -   `main.js` : Initialisation globale, gestion du thÃ¨me, du menu mobile et de la progression.
    -   `quiz.js` : Moteur de gestion des quiz (rendu, validation, toggle).
    -   `quiz_data.js` : Banque de questions organisÃ©e par phase.
-   `/assets/` : Images et schÃ©mas d'architecture.

## ðŸ› ï¸ Stack Technique

-   **Vanilla Web Stack** : HTML5, CSS3 et JavaScript pur. Aucun framework (React, Vue, etc.) n'est utilisÃ© pour garantir une lÃ©gÃ¨retÃ© extrÃªme.
-   **Font Awesome** : BibliothÃ¨que d'icÃ´nes vectorielles.
-   **Google Fonts** : Utilisation de polices modernes pour une lisibilitÃ© accrue des termes techniques.

## ðŸŒ HÃ©bergement

Ce site est actuellement mis en ligne via **GitHub Pages**.

-   **Type** : HÃ©bergement Statique
-   **CI/CD** : DÃ©ploiement automatique depuis la branche `main`.
-   **Avantage** : Gratuit, rapide et intÃ©grÃ© Ã  l'Ã©cosystÃ¨me GitHub.

## ðŸ“– Utilisation

Ouvrez simplement `index.html` dans n'importe quel navigateur web moderne. Pour rÃ©initialiser votre progression, vous pouvez vider le cache/stockage local du navigateur via les outils de dÃ©veloppement (F12 > Application > Local Storage).

---
*Projet dÃ©veloppÃ© pour faciliter l'accÃ¨s aux connaissances rÃ©seau et la rÃ©ussite de la certification CCNA.*

## ðŸ“ Changelog

### 6e version - 2026-08-24

Principales modifications rÃ©centes :

- IntÃ©gration de la page `Programme.html` dans le site et harmonisation du style (liaison Ã  `styles/main.css`).
- DÃ©placement du lien **Programme** vers le menu dÃ©roulant *Ressources* pour rÃ©duire la distraction en haut de page.
- Simplification du footer de la page d'accueil : navigation rÃ©duite, meilleure hiÃ©rarchie visuelle et disclaimer clarifiÃ©.
- Harmonisation du style des pages de contenu (polices, couleurs, boutons, hover en mode sombre).
- Correction des erreurs d'encodage/affichage et nettoyage du texte sur les pages (caractÃ¨res spÃ©ciaux, orthographe).
- Ajustements UX : CTA recentrÃ©, animations raccourcies et TOC comportant un comportement responsive plus simple.

Si tu veux une entrÃ©e de changelog plus dÃ©taillÃ©e (par page modifiÃ©e), je peux gÃ©nÃ©rer une liste automatique des fichiers modifiÃ©s et lâ€™ajouter ici.

---
