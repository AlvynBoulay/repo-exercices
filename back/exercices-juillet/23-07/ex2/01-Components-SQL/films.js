const express = require('express');
const router = express.Router();
const db = require('./db');

// 1. GET / : liste complète
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM films');
  res.json(rows);
});

// 2. GET /:id : film par ID
router.get('/:id', async (req, res) => {
  //TODO : ECRIRE LA REQUETE PREPAREE
  // const [rows] = 
  if (rows.length === 0) return res.status(404).send('Film non trouvé');
  res.json(rows[0]);
});

// 3. POST / : ajout d’un film
router.post('/', async (req, res) => {
  const { id, titre } = req.body;
  if (!id || !titre) return res.status(400).send('id et titre requis');

  try {
    //TODO : ECRIRE LA REQUETE PREPAREE
    res.status(201).send('Film ajouté');
  } catch (err) {
    res.status(500).send('Erreur : ' + err.message);
  }
});

// 4. PATCH /:id : modification du titre
router.patch('/:id', async (req, res) => {
  const { titre } = req.body;
  if (!titre) return res.status(400).send('Nouveau titre requis');
    
  //TODO : ECRIRE LA REQUETE PREPAREE
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Titre mis à jour');
});

// 5. DELETE /:id : suppression
router.delete('/:id', async (req, res) => {
  const [result] = await db.execute('DELETE FROM films WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) return res.status(404).send('Film non trouvé');
  res.send('Film supprimé');
});

const Joi = require('joi');

const filmsSchema = Joi.object({
  titre: Joi.string().min(1).max(255).required(),
  duree_minutes: Joi.number().integer().min(1).required(),
  annee_sortie: Joi.number().integer().min(1888).max(new Date().getFullYear()).required(),
  note: Joi.number().min(0).max(10).precision(1).optional(),
  realisateur_id: Joi.number().integer().required(),
  acteurs_id: Joi.array().items(Joi.number().integer()).min(1).required()
});

const { error, value } = filmsSchema.validate(req.body.user);

if (error) {
  res.send('Erreur lors de la validation des données : ' + error.details[0].message);
}


module.exports = router;
