<?php

// 1 : Afficher les départements avec while()
$codePostal = 40000;
while ($codePostal <= 40005) {
    echo $codePostal . "<br>";
    $codePostal++;
}

// 2 : Table de multiplication (Chiffre 5 avec for)
for ($i = 1; $i <= 10; $i++) {
    echo "5 x $i = " . (5 * $i) . "<br>";
}

// 3 : Faire appel a des prénoms avec forEach
$prenoms = ['Nuno','Angélique','Sébastien','Nina', 'Adrien'];
foreach ($prenoms as $prenom) {
    echo "$prenom est présent(e).<br>";
}

// 4 : L'équipe DEV
$equipe = [
   'Nuno' => 'PHP',
   'Angélique' => 'JavaScript',
   'Sébastien' => 'PHP',
   'Nina' => 'Python',
   'Adrien' => 'PHP',
   'Alvyn' => 'PHP',
   'Ilona' => 'JavaScript',
   'Jean-François' => 'PHP',
   'Alan' => 'JavaScript',
   'Guillaume' => 'PHP'
];

foreach ($equipe as $nom => $language) {
    if ($language === 'php') {
        echo "$nom est développeur PHP.<br>";
    }
}


// 5 : Afficher les capitales avec forEach
$pays = [
    'France' => 'Paris',
    'Allemagne' => 'Berlin',
    'Italie' => 'Rome'
];
foreach ($pays as $paysNom => $capitale) {
    echo "$capitale<br>";
}

// 6 : Trier des nombres aléatoires 
$randoms = [];
$moinsDe50 = [];
$plusDe50 = [];

for ($i = 0; $i < 10; $i++) {
    $nombre = rand(1,100);
    $randoms[] = $nombre;
    if ($nombre < 50) {
        $moinsde50[] = $nombre;
    } else {
        $plusDe50[] = $nombre;
    }
}

echo "Moins de 50 : " . implode(', ', $moinsDe50) . "<br>";
echo "50 ou plus : " . implode(', ', $plusDe50) . "<br>";

// 7 : Compter le nombre de pays dans le tableau
$pays_population = array(
  'France' => 67595000,
  'Suede' => 9998000,
  'Suisse' => 8417000,
  'Kosovo' => 1820631,
  'Malte' => 434403,
  'Mexique' => 122273500,
  'Allemagne' => 82800000,
);

echo "Nombre de pays : " . count($pays_population);

?>