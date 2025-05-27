<?php 
// tableau des pages disponibles
$pages = [
    'accueil' => 'accueil.php',
    'contact' => 'contact.php',
    'produits' => 'produits.php'
];

// Vérifie si un paramètre "page" est passé dans l'url
$page = $_GET['page'] ?? 'accueil'; // par défaut : accueil

// Vérifie si la page demandé existe dans le tableau
if (array_key_exists($page, $pages)) {
    include $pages[$page];
} else {
    echo "<h1>Page non trouvée</h1>";
}
?>