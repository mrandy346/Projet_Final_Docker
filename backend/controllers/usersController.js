const db = require('../models/db');

/**
 * Récupérer tous les utilisateurs
 * @route GET /users
 */
exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
  }
};

/**
 * Créer un nouvel utilisateur
 * @route POST /users
 */
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Vérification des champs requis
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    console.error('Erreur lors de la création de l’utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la création de l’utilisateur' });
  }
};

/**
 * Mettre à jour un utilisateur existant
 * @route PUT /users/:id
 */
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  // Vérification des champs requis
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
  }

  try {
    const [result] = await db.query(
      'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
      [name, email, password, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l’utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l’utilisateur' });
  }
};

/**
 * Supprimer un utilisateur
 * @route DELETE /users/:id
 */
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l’utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l’utilisateur' });
  }
};
