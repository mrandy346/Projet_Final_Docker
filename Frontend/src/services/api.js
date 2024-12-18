import axios from 'axios';

// Détecter si nous sommes dans Docker ou en dehors
const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000' // Navigateur, en dehors de Docker
  : 'http://backend:4000';  // Conteneur Docker

// Créer une instance axios avec la bonne baseURL
const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
