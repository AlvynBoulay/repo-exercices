// import des modules
const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Chemin vers le fichier
const journalPath = path.join(__dirname, 'journal.txt');

// Poser une question
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Votre message : ", (answer) => {
  console.log("Vous avez écrit :", answer);

  // Ajouter le message
  const message = `[${getTimeSamp()}] ${answer}\n`;
  fs.appendFile(journalPath, message, (err) => {
      if (err) {
          console.error('Erreur lors de l\'ajout au fichier :', err);
          rl.close();
      } else {
          console.log('Le message a bien été ajouté au fichier journal.txt');
          readJournal();
      }
      rl.close();
  });
});

// Lire le journal
async function readJournal(){
    try {
        const data = await fs.promises.readFile(journalPath, 'utf-8');
        console.log('\nContenu complet du journal :');
        console.log(data);
    } catch (err) {
        console.error('Erreur lors de la lecture du fichier :', err);
    } finally {
        rl.close();
    }
}

// Date et heure
function getTimeSamp() {
  const now = new Date();
  return now.toLocaleString();
}