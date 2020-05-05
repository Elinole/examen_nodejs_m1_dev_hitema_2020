const express = require('express');
const bodyParser = require('body-parser');
const v1 = express.Router();

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

// To be implemented!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.get('/people', async (response) => {
    const people = await peopleService.getPeople();
    response.send(people);
});

v1.get('/people/:id', async (request, response) => {
    // recupérer la citation qui correspond à l'id transmis
    const id = request.params.id;
    try {
        const people = await peopleService.getPerson(id);
        // ternaire
        people ? response.send(people) : response.sendStatus('404');
    } catch(e) {
        response.sendStatus('400');
    }
});

v1.put('/people/:id', async (request, response) => {
    // recupérer la citation qui correspond à l'id transmis
    const id = request.params.id;
    try {
        const people = await peopleService.getPeople(id);
        // ternaire
        people ? response.send(people) : response.sendStatus('404');
    } catch(e) {
        response.sendStatus('400');
    }
});

module.exports = app;
