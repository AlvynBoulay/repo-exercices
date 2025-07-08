export async function fetchTaches() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, titre: "Apprendre JS", done: false },
        { id: 2, titre: "Faire les courses", done: true },
      ]);
    }, 1000);
  });
}

export async function ajouterTache(titre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), titre, done: false });
    }, 800);
  });
}

export async function marquerCommeFaite(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) reject("ID invalide");
      else resolve({ id, done: true });
    }, 500);
  });
}




// BONUS 
export function marquerCommeUrgent(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ urgent: true });
    }, 200);
  });
}

