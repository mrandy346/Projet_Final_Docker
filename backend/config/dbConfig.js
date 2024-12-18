const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'mysql',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'crudprojet',
  port: 3306, // Port MySQL à l'intérieur du conteneur
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Erreur de connexion MySQL:', err.message);
    process.exit(1);
  } else {
    console.log('Connecté à la base de données MySQL');
    connection.release();
  }
});

module.exports = db;
