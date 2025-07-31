<?php
require_once '../require.php';

echo "Véhicule générique <br>";
$vehicule = new Vehicule("Generic", "Generic Manufacturer");
$vehicule->demarrer();
$vehicule->accelerer(60);
$vehicule->freiner(20);
echo "Vitesse actuelle : " . $vehicule->getVitesse() . " km/h<br>";
$vehicule->setMarque("GenericUpdated");
$vehicule->setConstructeur("GenericUpdatedManufacturer");
echo "Marque modifiée : " . $vehicule->getMarque() . "<br>";
echo "Constructeur modifié : " . $vehicule->getConstructeur() . "<br>";

echo "<hr>";

echo "Clio <br>";
$clio = new Voiture("Clio", "Renault", 5);
$clio->demarrer();
$clio->klaxonner();
$clio->accelerer(80);
$clio->freiner(30);
echo "Vitesse actuelle : " . $clio->getVitesse() . " km/h<br>";
echo "Nombre de portes : " . $clio->getNbPortes() . "<br>";
$clio->setNbPortes(3);
echo "Nombre de portes modifié : " . $clio->getNbPortes() . "<br>";

echo "<hr>";

echo "Golf <br>";
$golf = new Voiture("Golf", "Volkswagen", 3);
$golf->demarrer();
$golf->klaxonner();
$golf->accelerer(100);
$golf->freiner(50);
echo "Vitesse actuelle : " . $golf->getVitesse() . " km/h<br>";
echo "Nombre de portes : " . $golf->getNbPortes() . "<br>";

echo "<hr>";

echo "Tesla Model 3 électrique <br>";
$tesla = new VoitureElectrique("Tesla Model 3", "Tesla Inc.", 4, 500);
$tesla->demarrer();
$tesla->recharger();
$tesla->klaxonner();
$tesla->accelerer(120);
$tesla->freiner(60);
echo "Vitesse actuelle : " . $tesla->getVitesse() . " km/h<br>";
echo "Autonomie : " . $tesla->getAutonomie() . " km<br>";
$tesla->setAutonomie(600);
echo "Autonomie modifiée : " . $tesla->getAutonomie() . " km<br>";

echo "<hr>";

echo "Fin des tests, destruction des objets...<br>";
?>
