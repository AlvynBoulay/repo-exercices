/* Code de départ */
// On récupère le nombre total de personnages
let totalPersonnages;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

// On récupère le bouton et la zone d'affichage avec leur ID
let bouton = document.getElementById("btn-rm");
let zoneAffichage = document.getElementById("character");


// On écoute le clic sur le bouton
bouton.addEventListener("click", async function () {
    if (!totalPersonnages) return;

    let id = Math.floor(Math.random() * totalPersonnages) + 1;

    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) throw new Error("Erreur API");
        let data = await response.json();
        let html = `
              <img src="${data.image}" alt="${data.name}">
      <h3>${data.name}</h3>
      <p><strong>Espèce :</strong> ${data.species}</p>
      <p><strong>Statut :</strong> ${data.status}</p>
      `;
      
      zoneAffichage.innerHTML = html;
    } catch (error) {
        zoneAffichage.innerHTML = "<p>Erreur lors du chargement du personnage.</p>";
        console.error(error);
    }
});