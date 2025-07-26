const express = require('express');
const router = express.Router();
const db = require('../config/db');
const giftSchema = require('../schemas/gift.schema');

// Lister les cadeaux (avec filtres)
router.get('/', async (req, res, next) => {
    try {
        let query = 'SELECT * FROM gifts';
        const params = [];

        if (req.query.reserved === 'true') {
            query += ' WHERE reserved = true';
        }

        if (req.query.sort === 'asc') {
            query += ' ORDER BY price ASC';
        } else if (req.query.sort === 'desc') {
            query += ' ORDER BY price DESC';
        } else {
            query += ' ORDER BY id DESC';
        }

        const [gifts] = await db.query(query, params);
        res.json(gifts);
    } catch (err) {
        next(err);
    }
});

// Ajouter un cadeau
router.post('/', async (req, res, next) => {
    try {
        const { error, value } = giftSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });
        
        const { title, description, price, reserved = false } = value;
        const [result] = await db.query(
            'INSERT INTO gifts (title, description, price, reserved) VALUES (?, ?, ?, ?)',
            [title, description, price, reserved]
        );
        res.status(201).json({ id: result.insertId, ...value });
    } catch (err) {
        next(err);
    }
});

// Modifier un cadeau
router.patch('/:id', async (req, res, next) => {
    try {
        const { error, value } = giftSchema.validate(req.body, { presence: 'optional' });
        if (error) return res.status(400).json({ error: error.details[0].message });
        const [result] = await db.query(
            'UPDATE gifts SET title = ?, description = ?, price = ?, reserved = ? WHERE id = ?',
            [value.title, value.description, value.price, value.reserved, req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Cadeau non trouvé' });
        res.json({ message: 'Cadeau mis à jour' });
    } catch (err) {
        next(err);
    }
});

// Marquer comme réservé (bonus)
router.patch('/:id/reserve', async (req, res, next) => {
    try {
        const [result] = await db.query(
            'UPDATE gifts SET reserved = true WHERE id = ?',
            [req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Cadeau non trouvé' });
        res.json({ message: 'Cadeau réservé' });
    } catch (err) {
        next(err);
    }
});

// Supprimer un cadeau
router.delete('/:id', async (req, res, next) => {
    try {
        const [result] = await db.query('DELETE FROM gifts WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Cadeau non trouvé' });
        res.json({ message: 'Cadeau supprimé' });
    } catch (err) {
        next(err);
    }
});



module.exports = router;
