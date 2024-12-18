import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm'; // Vérifiez ce chemin
import UserList from '../components/UserList';
import api from '../services/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
      setError('');
    } catch (err) {
      setError('Impossible de charger les utilisateurs. Vérifiez si le backend est en ligne.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-management">
      <h1>Gestion des utilisateurs</h1>
      <UserForm onUserAdded={fetchUsers} /> {/* Le formulaire est ici */}
      {error && <p className="error">{error}</p>}
      <UserList users={users} onUserUpdated={fetchUsers} />
    </div>
  );
};

export default UserManagement;
