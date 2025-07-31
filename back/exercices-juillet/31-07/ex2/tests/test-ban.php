<?php

require_once '../require.php';

$u1 = new Utilisateur("jf", "jf@cunmail.com");
$u2 = new Utilisateur("Nina", "nina@cunmail.com");
$u3 = new Utilisateur("Guillaume", "guillaume@cunmail.com");

$u1->bannir();
$u2->bannir();

echo "<h2>Emails bannis :</h2>";
echo "<ul>";
foreach (Utilisateur::getBannis() as $email) {
    echo "<li>" . htmlspecialchars($email) . "</li>";
}
echo "</ul>";

echo "<hr>";
echo "<h3>Tests Créations de comptes :</h3> <br>";
$u4 = new Utilisateur("AliceDeux", "alice@cunmail.com");
$u5 = new Utilisateur("Bob2", "bob@cunmail.com");
?>