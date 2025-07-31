<?php
class Admin extends Personne {
    public function sIdentifier() {
        echo "Administrateur : nom = {$this->nom}, email = {$this->email} <br>";
    }

    public function getType() {
        return "Administrateur";
    }

}
?>