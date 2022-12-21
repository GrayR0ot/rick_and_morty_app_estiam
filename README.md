# Projet Frontend Rick & Morty - ESTIAM

### Auteur: Léo MORICEAU - E5 WMD
### Ecole: ESTIAM
### Langue du projet: Anglais
### Installation du projet `npm install`
### Démérage du projet `npm run start`

## Outils / Librairies utilisées:
- FortAwesome
- FontAwesome
- Axios
- Lodash
- PropTypes
- React Hot Toast
- React

### Design patterns mis en oeuvre:
- HOC
- Props Controllés
- Composant Composés (GlobalProvider)


### Routes disponibles:
- /characters => Affichage des personnages (https://prnt.sc/nqlWWeb-eOxS)
- /characters/:id => Affichage de la page détail d'un personnage (https://prnt.sc/dHa6nL54sgUn)
- /episodes => Affichage des épisodes (https://prnt.sc/1qff5Xeci9Yt)
- /episodes/:id => Affichage des personnages d'un épisode (https://prnt.sc/nZg1W82ckhhx)
- /locations => Affichage des positions (https://prnt.sc/1eTQ32aiBd89)
- /locations/:id => Affichage des personnages d'une position (https://prnt.sc/IrWLWNT0UyKi)
- * => Redirection en cas d'erreur utilisateur sur la page des personnages

### Features supplémentaires:
- Possibilité de passer en mode sombre / clair en haut à droite (https://prnt.sc/8db2VY9UXSN_)
- Possibilité de filtrer les personnages "/characters" par nom, Status, Genders et Species

### Architecture:
- Le fichier App.js contient les routes et la mise en forme de la page
- La suite de la mise en page se situe via le HOC "Layout" qui contient le Header + Page + Footer
- Les pages sont gérées dans le dossier "pages"
- Les pages font appel à des composants eux gérés dans le dossier "components"
- Le dossier helpers sert à gérer les fonctions utiles dans le projet à divers endroits
- Le css est split au maximum pour chaque partie de l'application
