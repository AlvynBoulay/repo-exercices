const typeColors = {
    Bug: '#94BC4A',
    dark: '#736C75',
    dragon: '#6A7BAF',
    electric: "#E5C531",
    fairy: "#E397D1",
    fighting: "#CB5F48",
    fire: "#EA7A3C",
    flying: "#7DA6DE",
    ghost: "#846AB6",
    grass: "#71C5558",
    ground: "#CC9F4F",
    ice: "#70CBD4",
    normal: "#AAB09F",
    poison: "#B468B7",
    psychic: "#E5709B",
    rock: '#B2A061',
    steel: "#89A1B0",
    water: "#539AE2",
}

document.getElementById("btn-pokemon").addEventListener("click", function () {
    const id = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const image = data.sprites.front_default;
        const types = data.types.map(item => item.type.name);
        const typeNames = types.join(", ");
        const mainType = types[0];
        const number = `#${String(data.id).padStart(3, '0')}`;
        const bgColor = typeColors[mainType] || "#333";

        document.getElementById("pokemon").innerHTML = `
                <h3>${number} - ${name}</h3>
        <img src="${image}" alt="${name}" />
        <p>Type : ${typeNames}</p>
        `;

        document.getElementById("pokemon").style.backgroundColor = bgColor;
    })

    .catch(error => {
        document.getElementById("pokemon").innerHTML = "Erreur lors du chargement du Pokemon.";
        console.error(error);
    });
});