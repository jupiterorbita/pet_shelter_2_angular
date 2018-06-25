var petController = require('../controllers/petController.js')
console.log('SERVER > CONFIG > routes.js');

module.exports = function(app){
    //create
    app.post('/pets/new', petController.create);

    //read ALL
    app.get('/pets', petController.read);

    //read ONE
    app.get('/pets/:id', petController.readOne);

    //update
    app.put('/pets/:id/edit', petController.update);

    //delete
    app.delete('/delete/:id', petController.delete);
}
