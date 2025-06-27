<?php 
// 1 : Creer et afficher une bariable contenant Paris
$ville = "Paris";
echo "1) Ville : " . $ville . "<br><br>";
// 2 : Utiliser la concaténation pour afficher une phrase compléte
$prenom = "Jean";
$nom = "Dupont";
echo "2) Bonjour " . $prenom . " " . $nom . " !<br><br>";
// 3 : Modifier la valeur d'une variable et afficher les deux états
$score = 10;
echo "3) Score initial : " . $score . "<br>";
$score = 15;
echo "   Score modifié : " . $score . "<br><br>";
// 4 : Utiliser des variables pour faire une opération mathématique
$a = 8;
$b = 4;
$total = $a + $b;
echo "4) Le total est : " . $total . "<br><br>";
// 5 : Manipuler plusieurs types de variables et utiliser var_dump
$texte = "Bonjour";
$entier = 42;
$decimal = 3.14;
$vraiOuFaux = true;
echo "5) Types et valeurs des variables :<br>";
var_dump($texte);
echo "<br>";
var_dump($entier);
echo "<br>";
var_dump($decimal);
echo "<br>";
var_dump($vraiOuFaux);
echo "<br><br>";
// 6 : Calculer la moyenne des notes
$note_maths = 15;
$note_francais = 12;
$note_histoire_geo = 9;
$moyenne = ($note_maths + $note_francais + $note_histoire_geo) / 3;
echo "6) La moyenne est de " . $moyenne . " / 20.<br><br>";
// 7 : Calculer le prix TTC du produit
$prix_ht = 50;
$tva = 20; // en pourcentage
$prix_ttc = $prix_ht + ($prix_ht * $tva / 100);
echo "7) Le prix TTC du produit est de " . $prix_ttc . " €.<br>";
?>