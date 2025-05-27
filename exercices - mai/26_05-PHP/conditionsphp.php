<?php

// 1 : Utiliser if et else
$age = 17;
if ($age >= 18) {
    echo "Tu es majeur<br>";
} else {
    echo "Tu es mineur<br>";
}


// 2 : Utiliser if, elseif et else pour plusieurs cas
$note = 15;
if ($note < 10) {
    echo "Insuffisant<br>";
} elseif ($note >= 10 && $note <= 13) {
    echo "Passable<br>";
} elseif ($note >= 14 && $note <= 16) {
    echo "Bien<br>";
} else { // $note = >= 17
    echo "Excellent<br>";
}


// 3 : Combiner plusieurs conditions avec && et ||
$age = 21;
$abonne = true;
if ($age >= 18 && $abonne) {
    echo "Accès autorisé<br>";
} else {
    echo "Accès refusé<br>";
}


// 4 : Afficher un budget si ceului ci permet de payer des achats
$budget = 1553.89;
$achats = 1554.76;
if ($budget >= $achats) {
    echo "Le budget permet de payer les achats.<br>";
} else {
    echo "Le budget ne permet pas de payer les achats.<br>";
}

?>