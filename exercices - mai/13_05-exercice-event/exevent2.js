// Liste fixe de fruits
	const fruits = ["fraise", "banane", "kiwi magique", "pomme", "ananas", "framboise", "mangue"];


	let compteur = 0; 
	let indexDepart = 0; 

	// Fonction de préparation
	function preparerSmoothie() {
	const smoothie = [];
    
    /* Selection de 3 fruits */
    for (let i = 0; i < 3; i++) {
        smoothie.push(fruits[(indexDepart + i) % fruits.length]);
    }

    indexDepart = (indexDepart + 3) % fruits.length; // MAJ point de départ pour le prochain smoothie

    /* afficher les fruits dans #resultat */
    const resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = ""; // (reinitialisr l'affichage)

    smoothie.forEach(fruit => {
        const ligne = document.createElement("p");
        ligne.textContent = fruit;
        resultatDiv.appendChild(ligne);
    });

    /* Changer la couleur de fond si "kiwi magique" est présent */
    if (smoothie.includes("kiwi magique")) {
        resultatDiv.style.backgroundColor = "lightgreen";
    } else {
        resultatDiv.style.backgroundColor = "transparent";
    }

    /* MAJ du compteur */
    compteur++;
    document.getElementById("compteur").textContent = `Smoothies préparés : ${compteur}`;
	}

	// Fonction de reset
	function boireSmoothie() {
		/* Vider la div et reset la couleur */
        const resultatDiv = document.getElementById("resultat");
        resultatDiv.innerHTML = "";
        resultatDiv.style.backgroundColor = "transparent";
	}


    /* écouteurs d'événements */
    document.getElementById("btnSmoothie").addEventListener("click", preparerSmoothie);
    document.getElementById("btnBoire").addEventListener("click", boireSmoothie);