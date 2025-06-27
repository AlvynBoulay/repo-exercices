// Objet film de départ
let film = {
    titre: "Inception",
    realisateur: "Christopher Nolan",
    annee: 2010,
    duree: 148,
    vu: false
  };

// fonction pour demander à l'utilisateur si il a vu le film et pour ajouter la note si oui
  function demanderFilm() {
    let reponse = prompt("As-tu déjà vu ce film ? (oui/non) : " + film.titre).toLowerCase();

    if (reponse === "oui") {
        film.vu = true;
        let note = Number(prompt("Quelle note donnerais-tu à ce film ? (1 à 5)"));
        if (!isNaN(note) && note >= 1 && note <= 5) {
            film.note = note;
        } else {
            alert("Note invalide. Aucune note ajoutée.");
        }
    } else if (reponse === "non") {
        alert("Le film est affiché sans note.");
    } else {
        alert("Réponse non valide.");
    }
    afficherFiche();
  }

// fonction pour afficher la fiche du film dans la page HTML
function afficherFiche() {
    let ficheHTML = `
    <h2>Fiche Technique du Film</h2>
    <p><strong>Titre:</strong> ${film.titre}</p>
    <p><strong>Réalisateur:</strong> ${film.realisateur}</p>
    <p><strong>Année:</strong> ${film.annee}</p>
    <p><strong>Durée:</strong> ${film.duree} minutes</p>
    <p><strong>Vu:</strong> ${film.vu ? "Oui" : "Non"}</p>
    `;
    document.body.insertAdjacentHTML('beforeend', ficheHTML);
}
demanderFilm();