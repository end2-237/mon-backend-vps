const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route principale
app.get('/', (req, res) => {
  res.json({ 
    status: "success", 
    message: "Mon backend est en ligne sur mon VPS à Douala !",
    project: "Buyticle API",
    timestamp: new Date()
  });
});

// Route de test pour vérifier le déploiement automatique
app.get('/test', (req, res) => {
  res.json({ 
    message: "Le GitHub Action fonctionne parfaitement !",
    deployed_at: new Date().toLocaleString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});