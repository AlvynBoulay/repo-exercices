document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const prenom = document.getElementById('prenom').value.trim();
        const nom = document.getElementById('nom').value.trim();
        const age = document.getElementById('age').value.trim();
        const email = document.getElementById('email').value.trim();
        const motdepasse = document.getElementById('motdepasse').value;

        if (!prenom || !nom || !age || !email || motdepasse.length < 6) {
            alert("Merci de remplir tous les champs correctement.\n(Mot de passe minimum 6 caractères)");
            e.preventDefault();
        }
    });
});