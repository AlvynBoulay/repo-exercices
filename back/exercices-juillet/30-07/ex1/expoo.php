<?php
class Utilisateur {
    public $nom;
    public $email;

    public function afficherInfo() {
        echo "Nom :" .$this->nom . "<br>";
        echo "Email :" .$this->email . "<br>";
    }
}

$utilisateur1 = new Utilisateur();
$utilisateur1 -> nom = "Alvyn Boulay";
$utilisateur1 -> email = "boulayalvyn@cunmail.com";


$utilisateur1->afficherInfo();
?>