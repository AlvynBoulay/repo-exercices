<?php
namespace App;

class FormValidator {
    public static function nettoyerNom() {
        return filter_input(INPUT_POST, 'nom', FILTER_SANITIZE_SPECIAL_CHARS);
    }

    public static function validerEmail() {
        return filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    }

    public static function validerAge() {
        return filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT, [
            "options" => ["min_range" => 13, "max_range" => 120]
        ]);
    }

    public static function validerMdp() {
        $pass = filter_input(INPUT_POST, 'mdp');
        return ($pass && strlen($pass) >= 6) ? $pass : false;
    }

    public static function validerSite() {
    return filter_input(INPUT_POST, 'site', FILTER_VALIDATE_URL);
    }

}
?>
