import React, { useState } from 'react';
import api from '../services/api';

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', { name, email, password });
      if (response.status === 201 || response.status === 200) {
        onUserAdded(); // Appel pour rafraîchir la liste des utilisateurs
        setName('');
        setEmail('');
        setPassword('');
        setError('');
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setError('Erreur lors de l’ajout de l’utilisateur.');
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Ajouter</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    margin: '20px auto',
    padding: '15px',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '12px',
    width: '100%',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};

export default UserForm;
