import React, { useState } from 'react';
import api from '../services/api';

const UserCard = ({ user, onUserUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // Fonction pour supprimer un utilisateur
  const handleDelete = async () => {
    try {
      await api.delete(`/users/${user.id}`);
      onUserUpdated();
    } catch (err) {
      alert('Erreur lors de la suppression de l’utilisateur.');
    }
  };

  // Fonction pour mettre à jour un utilisateur
  const handleEdit = async () => {
    try {
      // Ajoutez un mot de passe ou modifiez le backend pour le rendre optionnel
      const updatedUser = { name, email, password: user.password || 'defaultPassword' };
      await api.put(`/users/${user.id}`, updatedUser);
      setIsEditing(false);
      onUserUpdated();
    } catch (err) {
      alert('Erreur lors de la mise à jour de l’utilisateur.');
    }
  };
  
  return (
    <div style={styles.card} className="user-card">
      {!isEditing ? (
        <>
          <h3 style={styles.name}>{user.name}</h3>
          <p style={styles.email}>{user.email}</p>
          <div style={styles.buttonContainer}>
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>
              Editer
            </button>
            <button onClick={handleDelete} style={styles.deleteButton}>
              Supprimer
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            placeholder="Nom"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Email"
          />
          <div style={styles.buttonContainer}>
            <button onClick={handleEdit} style={styles.saveButton}>
              Enregistrer
            </button>
            <button onClick={() => setIsEditing(false)} style={styles.cancelButton}>
              Annuler
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px auto',
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '5px',
    textAlign: 'center',
    color: '#333',
  },
  email: {
    color: '#555',
    fontSize: '0.9rem',
    marginBottom: '15px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '8px 12px',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  editButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 12px',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  saveButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '8px 12px',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '8px 12px',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
};

// Responsive Media Queries
const responsiveStyles = `
  @media (max-width: 768px) {
    .user-card {
      width: 90%;
      margin: 10px auto;
    }
  }
  @media (max-width: 480px) {
    .user-card {
      width: 100%;
      margin: 5px auto;
    }
    .edit-button, .delete-button {
      padding: 8px 12px;
      font-size: 0.8rem;
    }
  }
`;

// Inject responsive styles
const styleTag = document.createElement('style');
styleTag.textContent = responsiveStyles;
document.head.appendChild(styleTag);

export default UserCard;
