const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
    }
    
    getPeople(res) {
        // To be implemented!
        let status = 200;
        let body = {};

        try {
            let people = await fs.readFile('people.json');

            body = {
                people,
                'message' : 'People list'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }

    getPerson(req, res) {
        // To be implemented!
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let person =  await fs.readFile('people.json');

            body = {
                person,
                'message' : 'Person details'
            };
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return res.status(status).json(body);
    }
}
