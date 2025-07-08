const taches = [];
const historique = [];

// Ajouter une tâche
function ajouterTaches(titre, priorite = "moyenne") {
    const prioritesValides = ["basse", "moyenne", "haute"];
    if (!prioritesValides.includes(priorite)) {
        console.log('Priorité invalide. Utilisez : "basse", "moyenne" ou "haute".');
        return;
    }
    const tache = {
        titre: titre.trim(),
        termine: false,
        priorite: priorite
    };
    taches.push(tache);
    enregistrerAction("Ajout", titre);
    afficherTaches();
    afficherHistorique();
    console.log(`La tâche "${titre}" a bien été ajoutée avec la priorité "${priorite}".`);
}


// Supprimer une tâche par index
function supprimerTaches(index) {
    if (index >= 0 && index < taches.length) {
        const tacheSupprime = taches.splice(index, 1)[0];
        enregistrerAction("Suppression", tacheSupprime.titre);
        afficherHistorique();
        console.log(`La tâche "${tacheSupprime.titre}" a bien été supprimé`)
    } else {
        console.log("Index invlide : aucune tâche supprimé")
    }
}


// lister toutes les tâches
function listerTaches() {
    if (taches.length === 0) {
        console.log("Aucune tâche à afficher")
        return;
    }

    taches.forEach((tache, index) => {
        const etat = tache.termine ? "[x]" : "[ ]";
        console.log(`"${index}. ${etat} ${tache.titre} (priorité : ${tache.priorite})`);
    });
    
}

// marquer une tâche comme terminé
function terminerTaches(index) {
    if (index >= 0 && index < taches.length) {
        taches[index].termine = true;
        enregistrerAction("Terminé", taches[index].titre);
        afficherHistorique();
        console.log(`La tâche "${taches[index].titre} a été marquée comme terminé`);
    } else {
        console.log("Index invalide : impossible de marquer la tâche")
    }
}


/* BONUS */

// editer une tâche
function editerTaches(index, nouveauTitre) {
    if (index >= 0 && index < taches.length) {
        if (nouveauTitre.trim() !== "") {
            const ancienTitre = taches[index].titre;
            taches[index].titre = nouveauTitre.trim();
            enregistrerAction("Modification", `${ancienTitre} → ${nouveauTitre.trim()}`);
            afficherHistorique();
            console.log(`La tâche "${ancienTitre}" a été modifié en "${nouveauTitre}"`);
        } else {
            console.log("Le nouveau titre ne peut pas être vide");
        }
    } else {
        console.log("Index invalide : aucune tâche modifié");
    }
}


// Rechercher un tâche par mot clé
function rechercherTaches(motCle) {
    if (!motCle || motCle.trim() === "") {
        console.log("Veuillez fournir un mot clé non vide.");
        return;
    }
    const motCleMin = motCle.toLowerCase();
    const resultats = taches.filter(tache =>
        tache.titre.toLowerCase().includes(motCleMin));
    if (resultats.length === 0) {
        console.log(`Aucune tâche trouvée contenant "${motCle}".`);
    } else {
        console.log(`Tâches contenant "${motCle}" :`);
        resultats.forEach((tache, index) => {
            const etat = tache.termine ? "[x]" : "[ ]";
            console.log(`${index}. ${etat} ${tache.titre}`);
        });
    }
}


// filtrer par etat
function filtrerParEtat(etat) {
    let filtre;
    if (etat === true || etat === "terminées") {
        filtre = true;
    } else if (etat === false || etat === "en cours") {
        filtre = false;
    } else {
        console.log('Veuillez préciser "terminées" ou "en cours" (ou true / false).');
        return;
    }
    const resultats = taches.filter(tache => tache.termine === filtre);
    if (resultats.length === 0) {
        console.log(`Aucune tâche ${filtre ? "terminée" : "en cours"} trouvée.`);
    } else {
        console.log(`Tâches ${filtre ? "terminées" : "en cours"} :`);
        resultats.forEach((tache, index) => {
            const etatAffiche = tache.termine ? "[x]" : "[ ]";
            console.log(`${index}. ${etatAffiche} ${tache.titre}`);
        });
    }
}


// historique des actions
function enregistrerAction(type, titreAction) {
    const action = {
        type: type,
        titreAction: titreAction,
        date: new Date().toLocaleString()
    };
    historique.push(action);
}  
function afficherHistorique() {
    const ul = document.getElementById("listeHistorique");
    ul.innerHTML = "";
    if (historique.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Aucune action enregistrée.";
        ul.appendChild(li);
        return;
    }
    historique.forEach(action => {
        const li = document.createElement("li");
        li.textContent = `${action.date} : ${action.type} → "${action.titreAction}"`;
        ul.appendChild(li);
    });
}

function afficherTaches() {
  const ul = document.getElementById("listeTaches");
  ul.innerHTML = "";
  taches.forEach((tache, index) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const spanTexte = document.createElement("span");
    spanTexte.textContent = `${tache.termine ? "✔️" : "❌"} ${tache.titre} (priorité : ${tache.priorite})`;
    spanTexte.classList.add("task-text");

    spanTexte.addEventListener("click", () => {
      passerEnEdition(li, index);
    });

    li.appendChild(spanTexte);

    const btn = document.createElement("button");
    btn.classList.add("task-btn");

    if (!tache.termine) {
      btn.innerHTML = "&#10003;";
      btn.title = "Terminer";
      btn.addEventListener("click", () => {
        terminerTaches(index);
        afficherTaches();
      });
    } else {
      btn.innerHTML = "&#10007;";
      btn.title = "Annuler";
      btn.addEventListener("click", () => {
        taches[index].termine = false;
        enregistrerAction("Annulé", taches[index].titre);
        afficherHistorique();
        afficherTaches();
      });
    }

    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function passerEnEdition(li, index) {
  li.innerHTML = ""; 
  const inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = taches[index].titre;
  inputEdit.style.width = "300px";
  li.appendChild(inputEdit);
  inputEdit.focus();
  inputEdit.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const nouveauTitre = inputEdit.value.trim();
      if (nouveauTitre !== "") {
        editerTaches(index, nouveauTitre);
        afficherTaches();
      } else {
        alert("Le titre ne peut pas être vide.");
      }
    } else if (event.key === "Escape") {
      afficherTaches();
    }
  });
  inputEdit.addEventListener("blur", () => {
    afficherTaches();
  });
}



// Test
ajouterTaches("Acheter du pain");
ajouterTaches("Aller a la salle");
ajouterTaches("Faire les courses", "haute");
ajouterTaches("Faire du bois", "basse");
supprimerTaches(0);
terminerTaches(1);
editerTaches(0, "Promener le chien");
rechercherTaches("faire");
filtrerParEtat(false);

listerTaches();
console.table(taches)
afficherHistorique();
afficherTaches();

document.getElementById("formTache").addEventListener("submit", function(event) {
  event.preventDefault();
  const titre = document.getElementById("inputTitre").value;
  const priorite = document.getElementById("selectPriorite").value;
  ajouterTaches(titre, priorite);
  this.reset();
});

document.getElementById("btnSupprimer").addEventListener("click", function() {
  const input = document.getElementById("inputIndex");
  const index = parseInt(input.value, 10);

  if (isNaN(index)) {
    alert("Veuillez saisir un index valide.");
    return;
  }
  if (index < 0 || index >= taches.length) {
    alert("Index hors limites.");
    return;
  }
  supprimerTaches(index);
  afficherTaches();
  afficherHistorique();
  input.value = "";
});
