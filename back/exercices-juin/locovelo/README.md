
# 🚲 LocoVélo – Construis la base de données d’un service de location de vélos

Bienvenue chez **LocoVélo**, une start-up de location de vélos urbains !  
Manon, sa fondatrice, veut moderniser sa gestion en passant à une vraie base de données relationnelle. Elle compte sur toi pour concevoir et mettre en place tout le système.

---

## 🧠 Mise en situation

> “Salut !  
> Je gère un service de location de vélos. Je veux pouvoir gérer :
> - mes clients
> - mes vélos
> - les locations effectuées
>
> Je veux aussi éviter les erreurs de saisie, les oublis, et pouvoir extraire des statistiques utiles rapidement.
>
> Tu peux m’aider à tout structurer proprement ?”

---

## 🛠️ Étapes à suivre

### 1. 📐 Modélisation conceptuelle

- Crée un **MCD (Modèle Conceptuel de Données)** sur [https://draw.io](https://draw.io)
- Tu dois créer les **entités suivantes**, avec les **champs demandés** :

#### 🎯 Entité `Client`
- Identifiant
- Prénom
- Nom
- Email
- Date d’inscription

#### 🎯 Entité `Velo`
- Identifiant
- Marque
- Type (`ville`, `route`, `électrique`, etc.)
- Taille
- Tarif horaire
- État (`bon`, `usé`, etc.)
- Disponibilité (oui/non)

#### 🎯 Entité `Location`
- Identifiant
- Client concerné
- Vélo concerné
- Date et heure de début
- Date et heure de fin
- Montant total

👉 Indique bien les **associations** avec les **multiplicités** (1,N), (0,N), etc.
Tu peux ajouter des tables si d'autres tables te semblent pertinentes. Le but est de modéliser au plus proche de la réalité. 
- Exporte ton diagramme au format `.png`

📸 Capture d'écran attendue de ton MCD : `captures/mcd.png`

---

### 2. 🧱 Création de la base de données

- Crée une base nommée `locovelo`
- Implémente les **tables** correspondant à ton MCD
- Pour chaque table :
  - Choisis les **types de données** adaptés
  - Empêche les valeurs incohérentes (ex : tarif négatif, nom vide…)
  - Empêche les doublons d’email client
  - Assure la cohérence entre tables (références entre vélos/clients/locations)
  - Ajoute une valeur par défaut pour les vélos disponibles

📄 Rendu attendu : schema.sql ← Création des tables avec les contraintes


---

### 3. 🧪 Création d’un jeu de données

- A l'aide d'un fichier .csv généré par un faker de données, insère un **jeu de données réaliste** :
  - 5 clients
  - 5 vélos
  - 5 locations

📄 Rendu attendu : 
- clients.csv ← Création du jeu de données clients
- velos.csv ← Création du jeu de données vélos
- locations.csv ← Création du jeu de données locations

📄 Rendu attendu : data.sql ← Insertion du jeu de données


---

### 4. 🔍 Requêtes utiles

Réalise les requêtes suivantes et capture leurs résultats :

- Lister les vélos disponibles
- Lister les locations faites par un client donné avec identifiant 1
- Calculer le nombre total de locations
- Calculer les revenus totaux générés
- Afficher le revenu total par mois

📄 Rendu attendu : requetes.sql ← Les requêtes demandées

📸 Captures attendues des résultats :
- `captures/velos_disponibles.png`
- `captures/locations_client.png`
- `captures/nb_location_par_velo.png`
- `captures/revenus_total.png`
- `captures/revenus_par_mois.png`

---

### 5. 🚀 Optimisation

- Ajoute une **optimisation** pour accélérer les recherches fréquentes (par exemple : les recherches de locations par client, ou par date)
- Choisis une ou plusieurs colonnes pertinentes

📄 Rendu attendu : optimisation.sql ← Requête d'optimisation

---

## 📂 Organisation du dépôt

Ton dépôt Git doit contenir :

```
/locovelo
│
├── schema.sql ← Création des tables avec les contraintes
├── data.sql ← Insertion du jeu de données
├── requetes.sql ← Les requêtes demandées
├── optimisation.sql ← Requête de création d’index
├── captures/ ← Toutes les captures d’écran
│ ├── mcd.png
│ ├── velos_disponibles.png
│ ├── ...
└── README.md ← Ce fichier
```

---

## ✅ À rendre

Une fois terminé **push ton repo** sur le dépôt Git qui t’a été assigné.



Bon courage 🚴 et n’oublie pas de soigner la **qualité de ton schéma** !