<?php

session_start();

require_once __DIR__ . '/../vendor/autoload.php';

use App\FormValidator;

$nom = $email = $age = "";
$erreurs = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = FormValidator::nettoyerNom();
    $email = FormValidator::validerEmail();
    $age = FormValidator::validerAge();
    $mdp = FormValidator::validerMdp();
    $site = FormValidator::validerSite();

    $_SESSION['form_data'] = [
    'nom' => $nom,
    'email' => $email,
    'age' => $age,
    'site' => $site ?? '',
    ];


    if (!$nom || trim($nom) === '') {
        $erreurs['nom'] = "Le nom est requis";
    }

    if (!$email) {
        $erreurs['email'] = "L'adresse email n'est pas valide.";
    }

    if ($age === false) {
        $erreurs['age'] = "L'âge doit être un entier entre 13 et 120.";
    }

    if ($mdp === false) {
        $erreurs['mdp'] = "Le mot de passe doit contenir au moins 6 caractères";
    }

    if ($site === false) {
        $erreurs['site'] = "L'URL du site est invalide.";
    }

    if (empty($erreurs)) {
        unset($_SESSION['form_data']);
    }

}

?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire filtré</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    

<?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($erreurs)) : ?>
    <div class="success">
        <p><strong>Formulaire envoyé avec succès !</strong></p>
        <p>Nom : <?= htmlspecialchars($nom) ?></p>
        <p>Email : <?= htmlspecialchars($email) ?></p>
        <p>Âge : <?= htmlspecialchars($age) ?></p>
        <p>Mot de passe : <?= htmlspecialchars($mdp) ?></p>
        <p>Site web : <?= htmlspecialchars($site) ?></p>
    </div>
<?php else: ?>
<?php include '../templates/form.php'; ?>
<?php endif; ?>

</body>
</html>
