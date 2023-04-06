const mongoose = require('mongoose');

  // Création du schéma de données
const thingSchema = mongoose.Schema({ 
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
}); 
// Création du modèle de données
module.exports = mongoose.model('Thing', thingSchema); // Exportation du modèle de données  // Exportation du modèle de données 

