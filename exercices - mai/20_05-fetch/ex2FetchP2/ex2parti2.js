// On récupère le nombre total de personnages
let totalPersonnages;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

let galerie = document.getElementById("galerie");
let boutonMulti = document.getElementById("btn-multi");

boutonMulti.addEventListener("click", async function () {
  galerie.innerHTML = ""; // On vide la galerie

  for (let i = 0; i < 10; i++) {
    // Ton code ici (y compris promise, then, catch)
    let id = Math.floor(Math.random() * totalPersonnages) + 1;

    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) throw new Error("Erreur API");

        let data = await response.json();
        let carte = document.createElement("div");
        carte.classList.add("carte");
        carte.innerHTML = `
        <img src="${data.image}" alt="${data.name}">
        <h4>${data.name}</h4>
        <p>${data.species}</p>
        `;

        galerie.appendChild(carte);
    } catch (error) {
        console.error("Erreur lors du chargement d'un personnage :", error);
    }
  }
});