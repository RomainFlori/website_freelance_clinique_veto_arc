# 🐾 Clinique Vétérinaire de l'Arc

> Une expérience numérique moderne, fluide et rassurante dédiée au bien-être animal.

Ce projet est une plateforme web vitrine développée pour la **Clinique Vétérinaire de l'Arc** (Pourrières). L'objectif est d'allier une interface utilisateur (UI) luxueuse et épurée à une performance technique irréprochable, reflétant l'expertise médicale et la bienveillance de l'équipe.

---

## ✨ Caractéristiques du Projet

* **Design Glassmorphism :** Utilisation de flous d'arrière-plan et de transparences pour un look "Apple-style" moderne et professionnel.
* **Système d'Annonces Dynamique :** Gestion des urgences en temps réel avec programmation de dates (début/fin) et choix de couleurs (Urgence, Info, Succès) via Firebase.
* **Espace Admin Sécurisé :** Interface sur mesure pour la rédaction d'articles de blog et la gestion des alertes, avec persistance de session sécurisée (1h max).
* **Expérience Fluide :** Animations fluides, transitions "beurre fondu" et scroll doux (Smooth Scroll) pour une navigation apaisante.
* **Architecture Mobile-First :** Entièrement responsive, optimisé pour une consultation rapide sur smartphone.

---

## 🛠 Technologies Utilisées

Le projet repose sur une stack technologique moderne et performante :

| Technologie | Usage |
| :--- | :--- |
| **Nuxt 3** | Framework Vue.js haute performance avec rendu hybride. |
| **Tailwind CSS** | Framework utilitaire pour un design sur mesure et ultra-léger. |
| **Firebase** | Firestore (BDD), Authentication (Sécurité) & Storage (Images). |
| **Vercel** | Hébergement Cloud et déploiement continu (CI/CD). |
| **TypeScript** | Typage statique pour un code robuste et maintenable. |

---

## 📂 Structure des Sections

1.  **Navigation :** Barre flottante avec animations de soulignement et gestion intelligente des ancres (`/#`).
2.  **Hero Section :** Image immersive de la Sainte-Victoire avec superposition textuelle élégante.
3.  **Qui sommes-nous :** Présentation de l'équipe et de la clinique avec un ancrage SEO local (Pourrières).
4.  **Expertises :** Grille interactive présentant les services (Radiologie, Chirurgie, Analyses, etc.).
5.  **Blog :** Articles d'actualités avec gestion automatique des images compressées.
6.  **Contact :** Intégration Google Maps et coordonnées directes.

---

## 🚀 Installation & Développement

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé (version 18+).

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre-compte/clinique-veto-arc.git](https://github.com/votre-compte/clinique-veto-arc.git)
    cd clinique-veto-arc
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Configurer les variables d'environnement :**
    Créez un fichier `.env` à la racine et ajoutez vos clés Firebase :
    ```env
    NUXT_PUBLIC_FIREBASE_API_KEY=votre_clé
    NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_domaine
    ...
    ```

4.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```

---

## 🌍 Déploiement & Mise en ligne

Le site est configuré pour un déploiement automatisé via **Vercel** et lié au domaine **OVH**.

### 1. Configuration Vercel
- Chaque `git push` sur la branche principale déclenche une mise à jour.
- Les **Environment Variables** (clés Firebase) sont configurées dans le dashboard Vercel pour les environnements *Production* et *Preview*.

### 2. Configuration DNS (OVH)
- **Record A :** Pointe vers l'IP Vercel (`216.198.79.1`).
- **Record CNAME :** Le sous-domaine `www` pointe vers l'alias Vercel unique du projet.
- **Record TXT :** Validation de la propriété via Google Search Console.

### 3. Sécurité & SEO
- **Domaines autorisés :** `clinique-veterinaire-de-larc.fr` est ajouté dans la console Firebase (Auth).
- **Indexation :** Métadonnées optimisées pour la recherche locale "Vétérinaire Pourrières".

---

## 📄 Licence

Ce projet est la propriété exclusive de la **Clinique Vétérinaire de l'Arc**. Toute reproduction ou utilisation commerciale des visuels et du logo est interdite sans autorisation préalable.

---
*Développé avec ❤️ pour nos amis les bêtes.*