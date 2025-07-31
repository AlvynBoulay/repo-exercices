# TP PHP : Mini système d'inscription

## Contexte

Vous allez créer une mini-application PHP permettant d’enregistrer un utilisateur via un formulaire.

## Objectifs pédagogiques

- Organiser le code en plusieurs fichiers grâce aux includes (`header.php`, `footer.php`)  
- Créer et afficher un formulaire HTML simple (prénom, nom, âge, email)  
- Récupérer et valider les données du formulaire en PHP via `$_POST`  
- Valider que l’âge est un entier supérieur ou égal à 18  
- Valider que l’email est bien formé (fonction de validation)  
- Afficher dynamiquement un message d’erreur ou de succès  
- Stocker les données valides dans un tableau associatif `$user`  

## Fichiers fournis

- `includes/header.php` : en-tête HTML (doctype, head, début body)  
- `includes/footer.php` : fin de page HTML (fin body, fin html)  
- `includes/formulaire.html` : formulaire HTML avec champs prénom, nom, âge, email  

## Consignes

1. Dans `inscription.php` :  
   - Inclure `header.php` en début et `footer.php` en fin de fichier  
   - Charger et afficher le formulaire HTML (via include ou lecture du fichier)  
   - Récupérer les données envoyées en POST  
   - Valider :  
     - L’âge est un nombre entier ≥ 18  
     - L’email est valide (fonction `isValidEmail($email)`)  
   - Afficher sous le formulaire :  
     - Les messages d’erreur en cas d’invalidité  
     - Le message de succès si toutes les données sont valides  
   - Stocker les données valides dans un tableau associatif `$user`  

2. Créer la fonction `isValidEmail($email)` pour vérifier la validité d’une adresse mail.

3. Pré-remplir le formulaire avec les valeurs précédemment saisies en cas d’erreur.



## Bonus

- Ajouter un champ “mot de passe” avec validation (longueur minimale)  
- Ajouter un bouton “Réinitialiser” pour vider le formulaire  
- Gérer la validation côté client avec JavaScript (optionnel)
