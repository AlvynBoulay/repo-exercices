# TP : Gestion d'un parc automobile 🚗

## 🎯 Objectifs pédagogiques

Ce TP vous permettra de mettre en pratique l'ensemble des notions suivantes :

- Définition et manipulation de classes
- Héritage, constructeurs et destructeurs
- Encapsulation via getters et setters
- Surcharge de méthodes
- Structures de contrôle (`if`, `for`, `foreach`, `switch`, etc.)
- Tableaux de données (indexés, associatifs, tableaux d'objets)
- Tri, filtrage, et affichage dynamique

---

## 🧱 Partie 1 — Classe `Vehicule`

### ✏️ Instructions

Créez une classe `Vehicule` avec les caractéristiques suivantes :

- **Propriétés privées** :

  - `$marque` (string)
  - `$constructeur` (string)
  - `$vitesse` (int, initialisée à 0)

- **Méthodes** :
  - `__construct($marque, $constructeur)`
  - `__destruct()` : affiche "Destruction du véhicule : [marque]"
  - `getMarque()`, `getConstructeur()`, `setMarque()`, `setConstructeur()`
  - `getVitesse()`
  - `demarrer()` : affiche "Le véhicule démarre"
  - `accelerer($valeur)` : ajoute à `$vitesse`, sans dépasser 200, affiche la nouvelle vitesse ou une erreur
  - `freiner($valeur)` : réduit `$vitesse`, sans passer sous 0, affiche la nouvelle vitesse ou une erreur

---

## 🚗 Partie 2 — Classe `Voiture` (héritage)

### ✏️ Instructions

Créez une classe `Voiture` qui hérite de `Vehicule` :

- **Propriété privée** : `$nbPortes`

- **Méthodes** :
  - `__construct($marque, $constructeur, $nbPortes)` : utilise `parent::__construct(...)`
  - `getNbPortes()`, `setNbPortes()`
  - `klaxonner()` : affiche "La voiture klaxonne !"
  - `demarrer()` : surcharge pour afficher "La voiture démarre"

---

## ⚡ Partie 3 — Classe `VoitureElectrique` (héritage multi-niveau)

### ✏️ Instructions

Créez une classe `VoitureElectrique` qui hérite de `Voiture` :

- **Propriété publique** : `$autonomie` (en km)

- **Méthodes** :
  - `__construct($marque, $constructeur, $nbPortes, $autonomie)`
  - `recharger()` : affiche "Recharge en cours..."
  - `demarrer()` : surcharge avec "La voiture électrique démarre silencieusement"

---

## 🧪 Partie 4 — Tests unitaires dans `test.php`

### ✏️ À faire

- Créez une voiture générique, une Clio, une Golf, et une Tesla Model 3 électrique
- Appelez leurs méthodes : `demarrer()`, `accelerer()`, `freiner()`, `getVitesse()`
- Testez les getters et setters
- Vérifiez les destructeurs en fin de script

---

## 🧮 Partie 5 — Structures de contrôle

### ✏️ À intégrer

- Dans `accelerer()` et `freiner()` :
  - Si la valeur est négative ou nulle, afficher une erreur
  - Si la vitesse dépasse les limites (0–200), corriger et avertir l'utilisateur

---

## 🧰 Partie 6 — Tableaux de véhicules

### ✏️ Instructions

#### 6.1 — Créez un tableau `$flotte` contenant des objets :

```php
$flotte = [
  new Vehicule("Peugeot", "France Auto"),
  new Voiture("Clio", "Renault", 5),
  new Voiture("Golf", "Volkswagen", 3),
  new VoitureElectrique("Model 3", "Tesla", 4, 450),
];
```

#### 6.2 — Parcourez le tableau avec foreach :

Pour chaque objet :

- Affichez la classe avec get_class()

- Affichez la marque et le constructeur

- Si c’est une Voiture, affichez le nombre de portes

- Si c’est une VoitureElectrique, affichez l’autonomie

Utilisez `instanceof` pour détecter les classes.

#### 6.3 — Filtrage par constructeur

- Demandez un constructeur à l'utilisateur via un paramètre GET ou readline()

- Affichez uniquement les véhicules de ce constructeur

#### 6.4 — Trier le tableau par marque

Utilisez `usort()` avec `strcmp()` :

```php
usort($flotte, function($a, $b) {
    return strcmp($a->getMarque(), $b->getMarque());
});
```

Affichez le tableau trié.

#### 6.5 — Simuler une accélération aléatoire

- Pour chaque véhicule, appelez accelerer `(rand(10, 100))`
- Affichez la vitesse finale
- Calculez la vitesse moyenne de tous les véhicules

### 🧠 Astuces

- Utilisez `echo "<pre>"; print_r($objet); echo "</pre>";` pour déboguer

- Regroupez les méthodes communes dans des fonctions si besoin

- N’hésitez pas à commenter votre code pour garder de la clarté

---

Bon courage, et amusez-vous à programmer en PHP ! 💪🐘
