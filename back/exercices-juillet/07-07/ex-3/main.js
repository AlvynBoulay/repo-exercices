// import
import { fetchTaches, ajouterTache, marquerCommeFaite, marquerCommeUrgent } from './api.js';

// Creer une fonction afficherTaches
async function afficherTaches() {
    try {
        const taches = await fetchTaches();
        console.table(taches);
    } catch (err) {
        console.error("Erreur lors de la récupération des tâches :", err);
    }
}

// Creer une fonction ajouterEtAfficher
async function ajouterEtAfficher() {
    try {
        await ajouterTache("Nouvelle tâche");
        await afficherTaches();
    } catch (err) {
        console.error("Erreur lors de l'ajout de la tâche ou de l'affichage :", err);
    }
}

// Creer  une fonction ValiderTache(id)
async function validerTache(id) {
    try {
        await marquerCommeFaite(id);
        console.log(`Tâche ${id} marquée comme faite`);
    } catch (err) {
        console.error(`Erreur lors de la validation de la tâche ${id} :`, err);
    }
}

// Creer une fonction main
async function main() {
    try {
        console.log("Affichage des initiales :");
        await afficherTaches();
        console.log("Ajout d'une nouvelle tâche...");
        await ajouterEtAfficher("Nouvelle tâche");
        console.log("Marquage de la tâche id=1 comme faite");
        await validerTache(1);
        console.log("Affichage des tâches après modifications :");
        await afficherTaches();
    } catch (err) {
        console.error("Erreur dans main() :", err);
    }
}

// BONUS
const App = {
  tasks: [],

  init() {
    const nouvelleTache = prompt("Entrez une nouvelle tâche :");
    if (nouvelleTache && nouvelleTache.trim() !== '') {
      this.ajouterTache(nouvelleTache.trim());
    }
    this.afficherTaches();
  },

  ajouterTache(description) {
    const id = this.tasks.length + 1;
    this.tasks.push({ id, description, urgent: false });
  },

  async marquerTacheUrgente(id) {
    const result = await marquerCommeUrgent(id);
    const tache = this.tasks.find(t => t.id === id);
    if (tache && result.urgent) {
      tache.urgent = true;
    }
    this.afficherTaches();
  },

  afficherTaches() {
    const container = document.getElementById('task-list');
    container.innerHTML = '';

    if (this.tasks.length === 0) {
      container.textContent = "Aucune tâche n'est présente.";
      return;
    }

    this.tasks.forEach(tache => {
      const li = document.createElement('li');
      li.textContent = tache.description + (tache.urgent ? "  > URGENT" : "");

      const btnUrgent = document.createElement('button');
      btnUrgent.textContent = "Marquer comme urgent";
      btnUrgent.onclick = () => this.marquerTacheUrgente(tache.id);

      li.appendChild(btnUrgent);
      container.appendChild(li);
    });
  }
};

window.onload = () => App.init();


main();
