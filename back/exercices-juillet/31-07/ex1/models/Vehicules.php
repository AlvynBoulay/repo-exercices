<?php
class Vehicule {
    private string $marque;
    private string $constructeur;
    private int $vitesse;

    public function __construct(string $marque, string $constructeur) {
        $this->marque = $marque;
        $this->constructeur = $constructeur;
        $this->vitesse = 0;
    } 

    public function __destruct() {
        echo "Destruction du véhicule : {$this->marque} <br>";
    }

    public function getMarque(): string {
        return $this->marque;
    }

    public function getConstructeur(): string {
        return $this->constructeur;
    }

    public function getVitesse(): int {
        return $this->vitesse;
    }

    public function setMarque(string $marque): void {
        $this->marque = $marque;
    }

    public function setConstructeur(string $constructeur): void {
        $this->constructeur = $constructeur;
    }

    public function demarrer(): void {
        echo "Le véhicule démarre <br>";
    }

    public function accelerer(int $valeur): void {
        if ($valeur <= 0) {
            echo "Erreur : la valeur doit être positive <br>";
            return;
        }

        if ($this->vitesse + $valeur > 200) {
            $this->vitesse = 200;
            echo "Vitesse maximale atteinte (200 km/h) <br>";
        } else {
            $this->vitesse += $valeur;
            echo "Vitesse actuelle : {$this->vitesse} km/h <br>";
        }
    }

    public function freiner(int $valeur): void {
        if ($valeur <= 0) {
            echo "Erreur : la valeur doit être positive <br>";
            return;
        }

        if ($this->vitesse - $valeur < 0) {
            $this->vitesse = 0;
            echo "Véhicule arrêté. (vitesse : 0 km/h) <br>";
        } else {
            $this->vitesse -= $valeur;
            echo "Vitesse actuelle : {$this->vitesse} km/h <br>";
        }
    }
}

class Voiture extends Vehicule {
    private int $nbPortes;

    public function __construct(string $marque, string $constructeur, int $nbPortes) {
        parent::__construct($marque, $constructeur);
        $this->nbPortes = $nbPortes;
    }

    public function getNbPortes(): int {
        return $this->nbPortes;
    }

    public function setNbPortes(int $nbPortes): void {
        $this->nbPortes = $nbPortes;
    }

    public function klaxonner(): void {
        echo "klaxon : tut tut <br>";
    }

    public function demarrer(): void {
        echo "La voiture démarre <br>";
    }
}

class VoitureElectrique extends Voiture {
    private int $autonomie;

    public function __construct(string $marque, string $constructeur, int $nbPortes, int $autonomie) {
        parent::__construct($marque, $constructeur, $nbPortes);
        $this->autonomie = $autonomie;
    }
    public function getAutonomie(): int {
        return $this->autonomie;
    }

    public function setAutonomie(int $autonomie): void {
        $this->autonomie = $autonomie;
    }

    public function recharger(): void {
        echo "Recharge en cours... <br>";
    }

    public function demarrer(): void {
        echo "La voiture électrique démarre silencieusement <br>";
    }
}

?>
