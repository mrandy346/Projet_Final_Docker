import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import api from '../services/api';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      if (Array.isArray(response.data)) {
        setUsers(response.data);
        setError('');
      } else {
        setError('Les données reçues ne sont pas valides.');
      }
    } catch (err) {
      console.error('Erreur lors de la récupération des utilisateurs :', err);
      setError('Impossible de charger les utilisateurs. Vérifiez le backend.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Gestion des utilisateurs</h1>
      <UserForm onUserAdded={fetchUsers} />
      {error && <p style={styles.error}>{error}</p>}
      <UserList users={users} onUserUpdated={fetchUsers} />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: '1rem',
    margin: '20px 0',
  },
};

export default Home;
