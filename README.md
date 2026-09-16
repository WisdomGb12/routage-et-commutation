# Routage et Commutation — Cours Interactif CCNA

Plateforme d'apprentissage interactive et entièrement statique dédiée à la préparation de la certification **Cisco CCNA 200-301**. Elle couvre l'intégralité du programme en 10 phases progressives, avec des quiz certifiants, un examen blanc de 100 questions inédites, et un design moderne en thème clair/sombre.

---

## 🎯 Objectif

Fournir un cours structuré, gratuit et accessible depuis n'importe quel navigateur, sans inscription ni backend, pour préparer efficacement l'examen CCNA 200-301 de Cisco.

---

## 🚀 Fonctionnalités

### Contenu pédagogique
- **10 phases de cours** couvrant l'intégralité du programme CCNA 200-301
- Cours détaillés avec blocs de code copiables, diagrammes de topologie et exemples de configuration Cisco IOS
- Table des matières (TOC) par page pour une navigation rapide
- Navigation précédent/suivant entre les phases

### Quiz et évaluation
- **Quiz de cours** : 150 questions certifiantes réparties sur les 10 phases (15 questions par phase)
  - QCM à réponse unique ou multiple
  - Feedback immédiat avec explication détaillée
  - Sauvegarde automatique des réponses (localStorage)
- **Examen Blanc Final** : 100 questions **inédites** (10 par phase, jamais vues dans les quiz de cours)
  - Tirage aléatoire des questions à chaque passage
  - Minuteur de 3h configurable
  - Grille de navigation entre les 100 questions
  - Système de "flag" pour marquer les questions douteuses
  - Tableau de bord de préparation : taux global de complétion des quiz de cours
  - Revue complète des erreurs après soumission
  - Export/Import de session en JSON

### Navigation
- **Navbar fixe** avec mega-menu pour accéder rapidement aux 10 phases
- Menu déroulant "Ressources" : Programme, Projets, CCNA, Examen Blanc
- Menu hamburger responsive pour mobile
- Bouton de changement de thème flottant (persistant)

### Design
- **Thème clair / sombre** avec bascule instantanée
  - Palette ardoise moderne en dark mode (style VS Code/Linear)
  - Glassmorphism sur le header
  - Footer quasi-noir pour cohérence avec la navbar
- Design system CSS complet avec variables `:root`
- Typographie : Ubuntu (titres, corps) + Ubuntu Mono (code)
- Icônes : Font Awesome 6.4
- Animations et micro-interactions (hover, transitions)
- Scrollbar personnalisée en dark mode

---

## 🗺️ Programme — 10 Phases

| Phase | Titre | Contenu principal |
|-------|-------|-------------------|
| 1 | Fondamentaux Réseaux & Adressage IP | Modèle OSI/TCP-IP, adressage IPv4, subnetting CIDR/VLSM, câblage |
| 2 | Commutation & VLANs | Switches, VLANs, trunk 802.1Q, STP/RSTP, EtherChannel |
| 3 | Routage IP | Routes statiques, RIP, OSPF single-area, redistribution |
| 4 | Inter-VLAN & Services | Router-on-a-stick, DHCP, DNS, NTP |
| 5 | Sécurité Réseau | ACLs standard/étendues, port security, SSH, AAA basique |
| 6 | Technologies Avancées | NAT/PAT, IPv6, OSPF multi-area, BGP basique |
| 7 | Sans Fil (Wireless) | WLAN 802.11, WPA2/WPA3, WLC, modes d'authentification |
| 8 | Automatisation & Programmabilité | Python, REST API, Ansible, SD-WAN, NETCONF/RESTCONF |
| 9 | Cloud & Virtualisation | NFV, SDN, cloud public/privé/hybride, QoS |
| 10 | Monitoring & Maintenance | SNMP, Syslog, NetFlow, dépannage méthodique |

---

## 📂 Structure du Projet

```
routage-et-commutation/
│
├── index.html                   # Page d'accueil (grille des 10 phases)
├── Programme.html               # Programme détaillé des 10 phases
│
├── pages/
│   ├── phase1-fondamentaux.html
│   ├── phase2-commutation.html
│   ├── phase3-routage.html
│   ├── phase4-inter-vlan.html
│   ├── phase5-securite.html
│   ├── phase6-avance.html
│   ├── phase7-wireless.html
│   ├── phase8-automatisation.html
│   ├── phase9-cloud.html
│   ├── phase10-monitoring.html
│   ├── examen-blanc.html        # Examen blanc 100 QCM inédits
│   ├── ccna.html                # Guide préparation CCNA
│   ├── projets.html             # Projets pratiques
│   ├── ressources.html          # Ressources externes
│   ├── mentions-legales.html
│   └── politique-confidentialite.html
│
├── includes/
│   └── header.html              # Navbar partagée (injectée dynamiquement)
│
├── styles/
│   └── main.css                 # Design system complet (~4500 lignes)
│                                # Variables :root, thème clair/sombre, composants,
│                                # dark mode polish, responsive, examen blanc
│
└── js/
    ├── main.js                  # Init globale, header include, thème, menu mobile,
    │                            # progression, code copy buttons
    ├── quiz.js                  # Moteur de quiz (rendu, validation, score, toggle)
    ├── quiz_data.js             # 150 questions certifiantes (15 × 10 phases)
    ├── exam.js                  # Moteur d'examen blanc (timer, grille, flags,
    │                            # diagnostic, export/import JSON)
    └── exam_data.js             # 100 questions inédites (10 × 10 phases)
```

---

## 🗄️ Persistance — localStorage

L'application ne nécessite **aucun backend ni base de données**. Toute la persistance est gérée côté client via l'API `localStorage` :

| Clé | Contenu |
|-----|---------|
| `routage-theme` | Thème actif : `"light"` ou `"dark"` |
| `routage-commutation-progress` | Phases marquées comme terminées |
| `routage-commutation-sections` | Chapitres individuels marqués "Lus" |
| `quiz_state_phase1` … `quiz_state_phase10` | Réponses, score et état de soumission par quiz |
| `exam_session` | Session d'examen blanc en cours (réponses, flags, timer) |

> **Réinitialisation** : F12 → Application → Local Storage → Supprimer les entrées souhaitées.

---

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| HTML5 | Structure sémantique (sans framework) |
| CSS3 Vanilla | Design system complet via variables CSS, responsive, animations |
| JavaScript ES6+ | Logique quiz, examen, navigation, thème (sans framework) |
| Google Fonts | Ubuntu + Ubuntu Mono (lisibilité technique) |
| Font Awesome 6.4 | Icônes vectorielles |
| localStorage API | Persistance côté client |

**Aucune dépendance NPM, aucun bundler, aucun framework.** Ouverture directe d'`index.html` dans un navigateur suffit.

---

## 🌍 Hébergement

- **Plateforme** : GitHub Pages
- **Type** : Statique (aucun serveur nécessaire)
- **Déploiement** : Automatique depuis la branche `main`
- **URL** : `https://<username>.github.io/routage-et-commutation/`

---

## 📖 Utilisation

```bash
# Cloner le dépôt
git clone https://github.com/<username>/routage-et-commutation.git

# Ouvrir directement dans le navigateur
open index.html   # macOS
start index.html  # Windows
```

Ou simplement ouvrir `index.html` depuis l'explorateur de fichiers dans n'importe quel navigateur moderne (Chrome, Firefox, Edge, Safari).

---

## 📝 Changelog

### v7.0 — 2026-09-16

**Refonte dark mode (ardoise moderne) :**
- Nouvelle palette dark mode : fonds ardoise quasi-noirs (`#0d0f14`, `#151820`, `#1e2130`) remplaçant l'ancien bleu marine (`#1a1a2e`, `#16213e`)
- Header glassmorphism en dark mode (`backdrop-filter: blur(24px)`)
- Cards avec micro-lueur bleue au hover en dark mode
- Footer dark mode quasi-noir cohérent avec la navbar
- Scrollbar personnalisée (piste sombre, thumb ardoise, hover bleu)
- Sélection de texte avec highlight bleu transparent
- Bleu des boutons assombri dans les deux thèmes : `#0055b3` (light) / `#1e68cc → #0d4fa0` (dark) — moins lumineux qu'avant

**Examen Blanc Final (100 QCM) :**
- Création de `js/exam_data.js` : 100 questions inédites, 10 par phase, jamais vues dans les quiz de cours
- Création de `js/exam.js` : moteur complet (tirage aléatoire, minuteur 3h, grille de 100 pastilles, flags, diagnostic par phase, export/import JSON)
- Création de `pages/examen-blanc.html` : interface complète (tableau de bord de préparation, arène de passation, résultats détaillés)
- Ajout du lien Examen Blanc dans la navbar de toutes les pages (menu Ressources)
- CTA Examen Blanc ajouté dans `index.html` et `Programme.html`
- Styles dédiés dans `styles/main.css` (~1400 lignes)

### v6.0 — 2026-08-24

**Navigation & UX :**
- Navbar compacte avec mega-menu déroulant pour les 10 phases (badges numérotés centrés)
- Bouton thème flottant (bas droite) — persistant et non intrusif
- Menu hamburger responsive avec accordéon mobile
- Correction des badges de phases (centrage des numéros dans les cercles)
- Couleurs attribuées aux phases 7–10 dans les cards de la page d'accueil

**Corrections visuelles :**
- Contrastes des blocs de code sur `Programme.html` (mode clair)
- Couleurs des placeholders et textes en mode clair uniformisées
- Encodage UTF-8 corrigé sur toutes les pages
- Suppression des emojis cassés remplacés par des icônes Font Awesome

**Structure :**
- Extension de 6 à 10 phases (`phase7` → `phase10`)
- `includes/header.html` : navbar centralisée injectée dynamiquement
- `main.js` : chargement asynchrone du header partagé, normalisation des chemins relatifs

### v5.0 et antérieures — 2026-08

- Intégration de `Programme.html` et harmonisation du style
- Mise en place du design system CSS (variables `:root`, tokens)
- Typo Ubuntu (corps) + Ubuntu Mono (code)
- Footer restructuré avec colonnes de liens et disclaimer
- Quiz interactifs avec `quiz.js` + `quiz_data.js` (150 questions)
- Suivi de progression via `localStorage`

---

*Projet développé pour faciliter l'accès aux connaissances réseau et la réussite de la certification Cisco CCNA 200-301.*
