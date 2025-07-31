<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Panier</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>



<?php
// 1 - tableau associatif
$produit1 = [
    "nom" => "Casque",
    "prix" => 40,
    "quantité" => 2 
];

$produit2 = [
    "nom" => "Gants",
    "prix" => 20,
    "quantité" => 1 
];

$produit3 = [
    "nom" => "Eclairage",
    "prix" => 15,
    "quantité" => 3 
];

$produit4 = [
    "nom" => "Sandwich",
    "prix" => 2.36,
    "quantité" => 1 
];

$produit5 = [
    "nom" => "Coca cola",
    "prix" => 1.99,
    "quantité" => 2 
];

$produit6 = [
    "nom" => "étoile",
    "prix" => 25.80,
    "quantité" => 1 
];


$produit7 = [
    "nom" => "Ordinateur Portable",
    "prix" => 485.63,
    "quantité" => 1 
];


$produit8 = [
    "nom" => "Pochettes Plastiques",
    "prix" => 0.50,
    "quantité" => 32 
];

$produit9 = [
    "nom" => "Pastèque",
    "prix" => 1.70,
    "quantité" => 3 
];


$produit10 = [
    "nom" => "Bouteille d'eau",
    "prix" => 0.49,
    "quantité" => 2 
];

// 2 - tableau indexé
$panier = [$produit1, $produit2, $produit3, $produit4, $produit5, $produit6, $produit7, $produit8, $produit9, $produit10];

// 3 - fonction calculerTotal
function calculerTotal($panier) {
    $total = 0;
    foreach ($panier as $produit) {
        $total += $produit["prix"] * $produit["quantité"];
    }
    return $total;
}

// 4 - fonction afficherPanier
function afficherPanier($panier) {
    $count = count($panier);
    foreach ($panier as $index => $produit) {
        $totalProduit = $produit["prix"] * $produit["quantité"];
        echo '<div class="produit">';
        echo '<div>' . htmlspecialchars($produit["nom"]) . '</div>';
        echo '<div>' . number_format($produit["prix"], 2) . ' €</div>';
        echo '<div>' . $produit["quantité"] . '</div>';
        echo '<div>' . number_format($totalProduit, 2) . ' €</div>';
        echo '</div>';
    }
    echo '<div class="total-panier">Total du panier : ' . number_format(calculerTotal($panier), 2) . ' €</div>';
}
echo '<h1 class="titre-panier">Résumé de votre commande</h1>';
afficherPanier($panier);
?> 

</body>
</html>