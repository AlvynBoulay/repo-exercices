const Joi = require('joi');

const filmsSchema = Joi.object({
  titre: Joi.string().min(1).max(255).required(),
  duree_minutes: Joi.number().integer().min(1).required(),
  annee_sortie: Joi.number().integer().min(1888).max(new Date().getFullYear()).required(),
  note: Joi.number().min(0).max(10).precision(1).optional(),
  realisateur_id: Joi.number().integer().required(),
  acteurs_id: Joi.number().integer().required()
});

module.exports = filmsSchema;