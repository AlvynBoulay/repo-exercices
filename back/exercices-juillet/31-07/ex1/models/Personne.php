<?php

abstract class Personne {
    protected string $nom;
    protected string $email;

    public function __construct(string $nom, string $email) {
    $this->nom = $nom;
    $this->email = $email;
    }

    abstract public function sIdentifier();
    abstract public function getType();
}

?>