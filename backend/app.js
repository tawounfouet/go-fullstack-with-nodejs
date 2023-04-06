const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requete recu!');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requete à bien été recu!' })
    next();
});

app.use((req, res) => {
    console.log('Reponse envoyé avec succes!');
});


module.exports = app;