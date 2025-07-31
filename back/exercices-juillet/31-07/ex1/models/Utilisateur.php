<?php
class Utilisateur extends Personne {
    public function sIdentifier() {
        echo "Utilisateur standard : nom = {$this->nom}, email = {$this->email} <br>";
    }

    public function getType() {
        return "Utilisateur standard";
    }
}
?>