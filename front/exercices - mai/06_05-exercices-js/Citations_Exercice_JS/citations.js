// Tableau de citations avec texte et auteur
const citations = [
    { citation: "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.", auteur: "Winston Churchill" },
    { citation: "Croyez en vous et tout deviendra possible.", auteur: "Anonyme" },
    { citation: "La seule façon de faire du bon travail est d’aimer ce que vous faites.", auteur: "Steve Jobs" },
    { citation: "N’attendez pas. Le temps ne sera jamais juste.", auteur: "Napoleon Hill" },
    { citation: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu’un d’autre.", auteur: "Steve Jobs" },
    { citation: "L’imagination est plus importante que la connaissance.", auteur: "Albert Einstein" },
    { citation: "Tout ce dont vous avez besoin est déjà en vous.", auteur: "Ralph Waldo Emerson" },
    { citation: "Ne pleurez pas parce que c’est fini, souriez parce que cela s’est produit.", auteur: "Dr. Seuss" },
    { citation: "Celui qui déplace une montagne commence par enlever de petites pierres.", auteur: "Confucius" },
    { citation: "Le plus grand risque est de ne prendre aucun risque.", auteur: "Mark Zuckerberg" }
]

// Pour éviter d’avoir deux fois la même citation à la suite
let dernierIndex = -1;

// Fonction appelée quand on clique sur le bouton
function voirCitation() {
    let index = Math.floor(Math.random() * citations.length);
    if (index === dernierIndex) {
        index = (index + 1) % citations.length;
    }

    dernierIndex = index;

    // On met à jour le texte sur la page
    let citationChoisie = citations[index];
    let citationEl = document.getElementById("citation");
    let auteurEl = document.getElementById("auteur");

    citationEl.textContent = citationChoisie.citation;
    auteurEl.textContent = "— " + citationChoisie.auteur;
}

// Lancer une première citation dès que la page est prête
window.onload = function () {
    voirCitation();
};

// Fonction pour copier la citation dans le presse-papiers
function copierCitation() {
    let citationText = document.getElementById("citation").textContent + " " + document.getElementById("auteur").textContent;

// utilisation API Clipboard
navigator.clipboard.writeText(citationText)
.then(function() {
    alert("Citation copiée dans le presse-papiers !");
})
.catch(function(err) {
    alert("Erreur lors de la copie : " + err);
});
}

// Fonction pour ke bouton "tweeter cette citation"
function tweeterCitation() {
    let citationText = document.getElementById("citation").textContent;
    let auteurText = document.getElementById("auteur").textContent;
    let tweetText = encodeURIComponent(`"${citationText}" ${auteurText} #citation #inspiration`);/*  Format du texte à tweeter */
    let twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`; /* Créer l'URL du tweet */
    window.open(twitterUrl, "_blank"); /* Ouvrir le lien dans un nouvel onglet */
}
