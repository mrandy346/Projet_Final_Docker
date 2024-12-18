import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onUserUpdated }) => {
  return (
    <div style={styles.container}>
      {users.length > 0 ? (
        <div style={styles.grid}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} onUserUpdated={onUserUpdated} />
          ))}
        </div>
      ) : (
        <p style={styles.noUsers}>Aucun utilisateur trouvé.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '15px',
  },
  noUsers: {
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default UserList;
