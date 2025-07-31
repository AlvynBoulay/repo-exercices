# TP PHP — Validation des Données & Filtres

## 🎯 Objectifs

Ce TP vous permet de pratiquer :

- La **validation** et le **nettoyage** des données utilisateur avec `filter_input()`
- L’utilisation des filtres natifs PHP (`FILTER_VALIDATE_*`, `FILTER_SANITIZE_*`)
- L'affichage conditionnel d’erreurs ou de confirmation
- La **modularisation** du code avec namespaces et fichiers séparés (bonus)

---

## 📁 Étape 1 : Version simple (tout en un seul fichier)

### ✅ À faire

- Lancer un serveur local ou placer le fichier dans _htdocs_
- Parcourir `index.php` pour comprendre son architecture
- Affichez le formulaire HTML stylisé (déjà fourni)
- Créer un nouveau fichier `formValidator.php`
- Ajouter une option `action=formulaire.php` au bon endroit dans index.php
- Lors de la soumission :
  - Récupérez les champs avec `filter_input()`
  - Validez chaque champ :
    - `nom` → `FILTER_SANITIZE_SPECIAL_CHARS`
    - `email` → `FILTER_VALIDATE_EMAIL`
    - `age` → `FILTER_VALIDATE_INT` (entre 13 et 120)
- Affichez les erreurs si nécessaires
- Affichez un message de confirmation si tout est correct

---

## 🔧 Étape 2 : Version modulaire (bonus)

Réorganisez votre projet comme suit :

```
├── public/
│ ├── index.php # Point d’entrée
│ ├── style.css # CSS externe
│
├── src/
│ └── FormValidator.php # Classe PHP avec namespace
│
└── templates/
└── form.php # Vue HTML du formulaire
```

### À implémenter

1. Créez la classe `FormValidator` dans `src/` avec le namespace `App`
   - Ajoutez 3 méthodes statiques : `nettoyerNom`, `validerEmail`, `validerAge`
2. Utilisez cette classe dans `index.php` :
   ```php
   require_once __DIR__ . '/../src/FormValidator.php';
   use App\FormValidator;
   ```
3. Déplacez le HTML dans templates/form.php

- Chargez-le depuis index.php avec require

4. Déplacez le CSS dans public/style.css

- Ajoutez la balise `<link>` dans le `<head>`

### Concepts mobilisés

- Superglobales $\_POST, $\_SERVER

- Validation et filtrage

- Affichage conditionnel (erreurs / confirmation)

- Séparation du code (MVC simplifié)

- Namespace (namespace App;) et use

## 💡 Pour aller plus loin

- Ajouter un champ mot de passe (validation simple)

- Ajouter un champ site web (et valider avec FILTER_VALIDATE_URL)

- Utiliser des sessions pour conserver les valeurs

- Ajouter un autoloader PSR-4 (via Composer)

## 🔍 Astuce debug

Utilisez `var_dump()` ou `print_r()` pour afficher vos données :

```php
var_dump($nom, $email, $age);
```
