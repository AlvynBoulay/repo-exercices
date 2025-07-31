<?php
class Utilisateur extends Personne {
    private static array $listeBannis = [];

    public function __construct(string $nom, string $email) {
        if (in_array($email, self::$listeBannis)) {
        echo "Cet email est banni ({$email}), création impossible <br>";
            return;
        }

        parent::__construct($nom, $email);
    } 

    public function bannir(): void {
        self::$listeBannis[] = $this->email ;
    }

    public static function getBannis(): array {
        return self::$listeBannis;
    }

    public function sIdentifier() {
        echo "Utilisateur standard : nom = {$this->nom}, email = {$this->email} <br>";
    }

    public function getType() {
        return "Utilisateur standard <br>";
    }
}
?>