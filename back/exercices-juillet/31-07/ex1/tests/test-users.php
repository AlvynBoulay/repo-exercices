<?php

require_once '../require.php';

$u1 = new Utilisateur("Alice", "alice@cunmail.com");
$u2 = new Utilisateur("Bob", "bob@cunmail.com");
$a1 = new Admin("Alvyn", "Alvyn@cunmail.com");
$personnes = [$u1, $u2, $a1];
foreach ($personnes as $personne) {
    $personne->sIdentifier();
    echo "Type : " . $personne->getType() . "<br><br>";
}

?>