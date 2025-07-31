<?php
class Utilisateur {
    private $nom;
    private $email;

    public function __construct($nom, $email) {
        $this->nom = $nom;
        $this->email = $email;
        echo "Utilisateur $nom créé avec l'email : " . $this -> email . "<br>";
    }

    public function __destruct() {
        echo "L'utilisateur $this->nom a été supprimé <br>";
    }

    public function getNom() {
        return $this->nom;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setNom($nouveauNom) {
        echo "$this->nom devient $nouveauNom <br>";
        $this->nom = $nouveauNom;
    }

    public function setEmail($nouvelEmail) {
        if (strpos($nouvelEmail, "@") !== false) {
            $this->email = $nouvelEmail;
            echo "L'email a été changé. (" . $this -> email . ") <br>";
        } else {
            echo "L'email n'est pas valide, pas de changement (@ obligatoire) <br>";
        }
    }

}

$utilisateur1 = new Utilisateur("Alvyn", "boulayalvyn@cunmail.com");
$utilisateur1 -> setNom("Alvyn Boulay");
$utilisateur1 -> setEmail("boulayalvyn.cunmail.com");
$utilisateur1 -> setEmail("boulayalvyn@cunmail.com");

echo $utilisateur1 -> getNom() . "<br>";
echo $utilisateur1 -> getEmail() . "<br>";
?>