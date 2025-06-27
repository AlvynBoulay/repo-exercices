/* Quand on clique sur "Ajouter au sac" */
document.getElementById("ajouterBtn").onclick = ajouterObjet;
function ajouterObjet() {
const select = document.getElementById("objetSelect");
const objetNom = select.options[select.selectedIndex].text;


/* Créer une boite (div) */
const boite = document.createElement("div");
boite.style.border = "2px solid black";
boite.style.margin = "5px";
boite.style.padding = "5px";
boite.style.backgroundColor = "lightgreen";
boite.style.display = "inline-block";
boite.style.fontSize = "19px";

/* Ajouter le nom de l'objet */
const texte = document.createElement("span");
texte.textContent = objetNom;
boite.appendChild(texte);

/* Bouton Supprimer */
const boutonSupprimer = document.createElement("button");
boutonSupprimer.textContent = "Supprimer";
boutonSupprimer.style.marginLeft = "10px";
boutonSupprimer.style.backgroundColor = "#FF7F7F";

boutonSupprimer.onclick = ()  => {
    boite.remove();
};
boite.appendChild(boutonSupprimer);

/* Bouton déplacer */
const boutonDeplacer = document.createElement("button");
boutonDeplacer.textContent = "Déplacer";
boutonDeplacer.style.marginLeft = "5px";
boutonDeplacer.style.backgroundColor = "lightblue";
boutonDeplacer.onclick = () => {
    const parent = boite.parentElement;
    const destination = parent.id === "sac" ? document.getElementById("camp") : document.getElementById("sac");
    destination.appendChild(boite);
};
boite.appendChild(boutonDeplacer);

/*  Ajouter cette boite dans la zone du sac */
document.getElementById("sac").appendChild(boite);
}