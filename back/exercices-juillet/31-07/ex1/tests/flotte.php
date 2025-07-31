<?php
require_once '../require.php';


// Créer un tableau d'objets
$flotte = [
    new Vehicule("Peugeot", "France Auto"),
    new Voiture("Clio", "Renault", 5),
    new Voiture("Golf", "Volkswagen", 3),
    new VoitureElectrique("Model 3", "Tesla", 4, 450),
];

// Parcourir le tableau et afficher infos
echo "<h2>Liste des véhicules</h2>";
foreach ($flotte as $vehicule) {
    echo "<strong>Classe :</strong> " . get_class($vehicule) . "<br>";
    echo "Marque : " . $vehicule->getMarque() . "<br>";
    echo "Constructeur : " . $vehicule->getConstructeur() . "<br>";

    if ($vehicule instanceof VoitureElectrique) {
        echo "Autonomie : " . $vehicule->getAutonomie() . " km<br>";
    } elseif ($vehicule instanceof Voiture) {
        echo "Nombre de portes : " . $vehicule->getNbPortes() . "<br>";
    }

    echo "<hr>";
}

// Filtrage par constructeur via paramètre GET
if (isset($_GET['constructeur'])) {
    $constructeurRecherche = $_GET['constructeur'];
    echo "<h2>Véhicules du constructeur '{$constructeurRecherche}'</h2>";

    foreach ($flotte as $vehicule) {
        if (strtolower($vehicule->getConstructeur()) === strtolower($constructeurRecherche)) {
            echo get_class($vehicule) . " - " . $vehicule->getMarque() . "<br>";
        }
    }
}

// Trier le tableau par marque
usort($flotte, function($a, $b) {
    return strcmp($a->getMarque(), $b->getMarque());
});

echo "<h2>Liste triée par marque</h2>";
foreach ($flotte as $vehicule) {
    echo $vehicule->getMarque() . " (" . $vehicule->getConstructeur() . ")<br>";
}

// Accélération aléatoire et calcul vitesse moyenne
$totalVitesse = 0;
echo "<h2>Accélération aléatoire</h2>";
foreach ($flotte as $vehicule) {
    $valeur = rand(10, 100);
    echo get_class($vehicule) . " " . $vehicule->getMarque() . " accélère de {$valeur} km/h<br>";
    $vehicule->accelerer($valeur);
    $totalVitesse += $vehicule->getVitesse();
}

$moyenne = $totalVitesse / count($flotte);
echo "<br><strong>Vitesse moyenne :</strong> " . round($moyenne, 2) . " km/h<br>";
?>
