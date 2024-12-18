# Utiliser une image Node.js officielle
FROM node:18-alpine

# Créer un répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code de l'application dans le conteneur
COPY . .

# Construire l'application React pour la production
RUN npm run build

# Servir l'application avec un serveur statique (serve est une dépendance pour ça)
RUN npm install -g serve

# Exposer le port 80
EXPOSE 80

# Démarrer l'application avec le serveur statique
CMD ["serve", "-s", "build", "-l", "80"]
