# Utiliser une image Node.js comme base
FROM node:18-alpine

# Installer le client MySQL et bash (utile pour déboguer si nécessaire)
RUN apk --no-cache add mysql-client bash

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package.json  ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port utilisé par le backend
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
