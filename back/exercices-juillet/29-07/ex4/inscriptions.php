<?php
include 'includes/header.php';

// Initialiser les variables
$prenom = $nom = $age = $email = $motdepasse = '';
$errors = [];
$user = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $prenom = trim($_POST['prenom'] ?? '');
    $nom = trim($_POST['nom'] ?? '');
    $age = trim($_POST['age'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $motdepasse = trim($_POST['motdepasse'] ?? '');

    if (empty($prenom)) {
        $errors[] = "Le prénom est obligatoire.";
    }

    if (empty($nom)) {
        $errors[] = "Le nom est obligatoire.";
    }

    if (!filter_var($age, FILTER_VALIDATE_INT) || (int)$age < 18) {
        $errors[] = "L'âge doit être un nombre entier supérieur ou égal à 18.";
    }

    if (!isValidEmail($email)) {
        $errors[] = "L'adresse email n'est pas valide.";
    }

    if (strlen($motdepasse) < 6) {
        $errors[] = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    if (empty($errors)) {
        $user = [
            'prenom' => $prenom,
            'nom' => $nom,
            'age' => (int)$age,
            'email' => $email, 
            'motdepasse' => $motdepasse
        ];
    }
}

// Fonction de validation d'email
function isValidEmail($email)
{
    // Simple filtre PHP
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}


include 'includes/formulaire.php';

// Affichage des erreurs
if (!empty($errors)) {
    echo '<div style="color:red;"><ul>';
    foreach ($errors as $error) {
        echo '<li>' . htmlspecialchars($error) . '</li>';
    }
    echo '</ul></div>';
}

// Affichage du message de succès
if ($user !== null) {
    echo '<div style="color:green;">';
    echo "Inscription réussie pour " . htmlspecialchars($user['prenom']) . " " . htmlspecialchars($user['nom']) . " (âge : " . $user['age'] . ").";
    echo '</div>';
}

include 'includes/footer.php';
