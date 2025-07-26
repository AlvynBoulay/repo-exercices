const express = require('express');
const router = express.Router();
const db = require('../db');
const validateBody = require('../middlewares/validateBody');
const filmSchema = require('../validations/filmsSchema');

// 1. GET / : liste complète
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM films');
  res.json(rows);
});

// 2. GET /:id : film par ID
router.get('/:id', async (req, res) => {
  const filmId = req.params.id;
  const [rows] = await db.execute('SELECT * FROM films WHERE id = ?', [filmId]);
  if (rows.length === 0) return res.status(404).send('Film non trouvé');
  res.json(rows[0]);
});

// 3. POST / : ajout d’un film
router.post('/', validateBody(filmSchema), async (req, res) => {
  const { titre, duree_minutes, annee_sortie, note, realisateur_id, acteurs_id } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO films (titre, duree_minutes, annee_sortie, note, realisateur_id, acteurs_id) VALUES (?, ?, ?, ?, ?, ?)',
      [titre, duree_minutes, annee_sortie, note || null, realisateur_id, acteurs_id]
    );

    res.status(201).send('Film ajouté avec id : ' + result.insertId);
  } catch (err) {
    res.status(500).send('Erreur : ' + err.message);
  }
});

// 4. PATCH /:id : modification du titre
router.patch('/:id', async (req, res) => {
  const { titre } = req.body;
  const filmId = req.params.id;
  if (!titre) return res.status(400).send('Nouveau titre requis');
    
const [result] = await db.execute(
  'UPDATE films SET titre = ? WHERE id = ?',
  [titre, filmId]
);
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Titre mis à jour');
});

// 5. DELETE /:id : suppression
router.delete('/:id', async (req, res) => {
  const [result] = await db.execute('DELETE FROM films WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Film supprimé');
});


module.exports = router;
