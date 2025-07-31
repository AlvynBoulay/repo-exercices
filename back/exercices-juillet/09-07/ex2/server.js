const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Charger les fichiers de données
const films = require('./data/films.json');
const projections = require('./data/projections.json');
const realisateurs = require('./data/realisateurs.json');

// Route d'accueil
app.get('/', (req, res) => {
res.end('Bienvenue au cinéclub !')
});

// GET /films — tous les films
app.get('/films', (req, res) => {
    res.json(films);
});


// GET /realisateurs
app.get('/real', (req, res) => {
    res.json(realisateurs);
});


// GET /films/:id — détail d'un film
app.get('/films/:id', (req, res) => {
    const filmId = parseInt(req.params.id);
    const film = films.find(f => f.id === filmId);
    if (!film) {
        return res.status(404).send('Film non trouvé');
    }
    res.json(film);
});


//DELETE /film/:id - Supression d'un film
app.delete('/film/:id', (req, res) => {
    const filmId = parseInt(req.params.id);
    const index = films.findIndex(f => f.id === filmId);
    if (index === -1) {
        return res.status(404).send('Film non trouvé');
    }
    films.splice(index, 1);
    try {
        fs.writeFileSync(path.join(__dirname, 'data/films.json'), JSON.stringify(films, null, 2));
        res.status(204).end();
    } catch (err) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});


// POST /film - Ajout d'un film 
newFilm = {
    "id": 6,
    "titre": "Le Parfum de la Dame en Noir",
    "annee_sortie": 2005,
    "duree_minutes": 115,
    "note_critique": 7.4,
    "pays_origine": "France",
    "id_realisateur": 3
}

app.post('/film', (req, res) => {
  const newFilm = req.body;
  if (!newFilm || Object.keys(newFilm).length === 0) {
    return res.status(400).send('Donnés manquantes dans la requête');
  }
  let maxId = 0;
  films.forEach(f => {
    if (f.id > maxId) maxId = f.id;
  });
  newFilm.id = maxId + 1;
  films.push(newFilm);
  try {
    fs.writeFileSync('./data/films.json', JSON.stringify(films, null, 2));
    res.status(201).json({ message: 'Film ajouté', film: newFilm });
  } catch (error) {
    res.status(500).send('Erreur lors de la sauvegarde');
  }
});


// PATCH /films/:id - Modification d'un titre de film 
const titre = 
{
    "titre": "Nouveau Titre du Film"
};

app.patch('/films/:id', (req, res) => {
    const filmId = parseInt(req.params.id);
    const newTitle = req.body.titre;
    if (!newTitle || newTitle.trim() === '') {
        return res.status(400).send('Donnés manquantes dans la requête');
    }
    const index = films.findIndex(f => f.id === filmId);
    if (index === -1) {
        return res.status(404).send('Film non trouvé');
    }
    films[index].titre = newTitle;
    try {
        fs.writeFileSync('./data/films.json', JSON.stringify(films));
        res.status(201).json({message: 'Titre changé', film: films[index]});
    } catch (error) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});


// BONUS 

// POST : réalisateur
app.post('/real', (req, res) => {
  const newReal = req.body;
  if (!newReal || Object.keys(newReal).length === 0) {
    return res.status(400).send('Donnés manquantes dans la requête');
  }
  let maxId = 0;
  realisateurs.forEach(r => {
    if (r.id > maxId) maxId = r.id;
  });
  newReal.id = maxId + 1;
  realisateurs.push(newReal);
  try {
    fs.writeFileSync('./data/realisateurs.json', JSON.stringify(realisateurs, null, 2));
    res.status(201).json({ message: 'Réalisateur ajouté', realisateur: newReal });
  } catch (error) {
    res.status(500).send('Erreur lors de la sauvegarde');
  }
});

// POST : réalisateur
app.post('/projections', (req, res) => {
  const newProjection = req.body;
  if (!newProjection || Object.keys(newProjection).length === 0) {
    return res.status(400).send('Donnés manquantes dans la requête');
  }
  let maxId = 0;
  projections.forEach(p => {
    if (p.id > maxId) maxId = p.id;
  });
  newProjection.id = maxId + 1;
  projections.push(newProjection);
  try {
    fs.writeFileSync('./data/projections.json', JSON.stringify(projections, null, 2));
    res.status(201).json({ message: 'Projection ajouté', projections: newProjection });
  } catch (error) {
    res.status(500).send('Erreur lors de la sauvegarde');
  }
});

// GET : projection
app.get('/projection', (req, res) => {
    res.json(projections);
});

// GET : real/id
app.get('/real/:id', (req, res) => {
    const realId = parseInt(req.params.id);
    const realisateur = realisateurs.find(r => r.id === realId);
    if (!realisateur) {
        return res.status(404).send('Réalisateur non trouvé');
    }
    res.json(realisateur);
});

// GET : projection/id
app.get('/projection/:id', (req, res) => {
    const projectionId = parseInt(req.params.id);
    const projection = projections.find(r => r.id === projectionId);
    if (!projections) {
        return res.status(404).send('Réalisateur non trouvé');
    }
    res.json(projection);
});

// DELETE : réalisateur
app.delete('/real/:id', (req, res) => {
    const realId = parseInt(req.params.id);
    const index = realisateurs.findIndex(r => r.id === realId);
    if (index === -1) {
        return res.status(404).send('Réalisateur non trouvé');
    }
    realisateurs.splice(index, 1);
    try {
        fs.writeFileSync(path.join(__dirname, 'data/realisateurs.json'), JSON.stringify(realisateurs, null, 2));
        res.status(204).end();
    } catch (err) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});

// DELETE : projection
app.delete('/projection/:id', (req, res) => {
    const projectionId = parseInt(req.params.id);
    const index = projections.findIndex(p => p.id === projectionId);
    if (index === -1) {
        return res.status(404).send('Projection non trouvé');
    }
    projections.splice(index, 1);
    try {
        fs.writeFileSync(path.join(__dirname, 'data/projections.json'), JSON.stringify(projections, null, 2));
        res.status(204).end();
    } catch (err) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});

// PATCH : réalisateur
const nomComplet = 
{
    "nomComplet": "Nouveau nom pour le réalisateur"
};
app.patch('/real/:id', (req, res) => {
    const realId = parseInt(req.params.id);
    const newNomComplet = req.body.nomComplet;
    if (!newNomComplet || newNomComplet.trim() === '') {
        return res.status(400).send('Donnés manquantes dans la requête');
    }
    const index = realisateurs.findIndex(r => r.id === realId);
    if (index === -1) {
        return res.status(404).send('Réalisateur non trouvé');
    }
    realisateurs[index].nomComplet = newNomComplet;
    try {
        fs.writeFileSync('./data/realisateurs.json', JSON.stringify(realisateurs));
        res.status(201).json({message: 'Réalisateur changé', realisateur: realisateurs[index]});
    } catch (error) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});

// PATCH : projection
const newProjection = 
{
    "newProjection": "Nouvelle projection"
};
app.patch('/projection/:id', (req, res) => {
    const projectionId = parseInt(req.params.id);
    const newNewProjection = req.body.newProjection;
    if (!newNewProjection || newNewProjection.trim() === '') {
        return res.status(400).send('Donnés manquantes dans la requête');
    }
    const index = projections.findIndex(r => r.id === projectionId);
    if (index === -1) {
        return res.status(404).send('Projection non trouvé');
    }
    projections[index].newProjection = newNewProjection;
    try {
        fs.writeFileSync('./data/projections.json', JSON.stringify(projections));
        res.status(201).json({message: 'Projection changé', projection: projections[index]});
    } catch (error) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});

// PUT : réalisateur
app.put('/real/:id', (req, res) => {
    const realId = parseInt(req.params.id);
    const newData = req.body;
    if (!newData || Object.keys(newData).length === 0) {
        return res.status(400).send('Données manquantes dans la requête');
    }
    const indexReal = realisateurs.findIndex(r => r.id === realId);
    if (indexReal === -1) {
        return res.status(404).send('Réalisateur non trouvé');
    }
    newData.id = realId;
    realisateurs[indexReal] = newData;
    try {
        fs.writeFileSync('./data/realisateurs.json', JSON.stringify(realisateurs, null, 2));
        res.status(200).json({ message: 'Réalisateur mis à jour', realisateur: newData });
    } catch (error) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});

// PUT : projection
app.put('/projection/:id', (req, res) => {
    const projectionId = parseInt(req.params.id);
    const newData2 = req.body;
    if (!newData2 || Object.keys(newData2).length === 0) {
        return res.status(400).send('Données manquantes dans la requête');
    }
    const indexProjection = projections.findIndex(p => p.id === projectionId);
    if (indexProjection === -1) {
        return res.status(404).send('Projection non trouvé');
    }
    newData2.id = projectionId;
    projections[indexProjection] = newData2;
    try {
        fs.writeFileSync('./data/projections.json', JSON.stringify(projections, null, 2));
        res.status(200).json({ message: 'Projection mis à jour', projection: newData2 });
    } catch (error) {
        res.status(500).send('Erreur lors de la sauvegarde');
    }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🎥 Serveur CineClub démarré sur http://localhost:${PORT}`);
});
