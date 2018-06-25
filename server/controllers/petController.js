const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {

    create: function(req, res) {
        console.log('\n> petController > create > req.body =>', req.body);
        var petInstance = new Pet(req.body);
        petInstance.save(function(err) {
            if (err){
                console.log('\n > petCntoller > create > err =>', err);
                res.json({message: '> petController > create > petInstance.save() >> error >', error_create: err});
            }
            else{
                console.log("\n > petController > create > success");
                res.json({message: '> petController > create > petInstance.save() >> SUCCESS!'});
            }
        });
    },

    read: function(req, res) {
        console.log('\n> petController > read ');
        Pet.find({}, function(err, pet_arr) {
            if (err){
                console.log('\n > petController > read > Pet.find() >> ERR =>', err);
                res.json({message: '> petController > read > Pet.find() >> ERROR >', error: err});
            }
            else {
                console.log("\n > petController > read > Pet.find() >> SUCCESS! =>", pet_arr);
                res.json({message: '> petController > read > Pet.find() >> SUCCESS', data: pet_arr});
            }
        });
    },

    readOne: function(req, res) {
        console.log('\n> petController > readOne ');
        Pet.findOne({_id: req.params.id}, function(err, return_pet) {
            if (err) {
                console.log('\n> petController > readOne > ERROR', err);
                res.json({message: '>petController > ERROR', error: err});
            }
            else {
                console.log('\n> petController > readOne > OK > return_pet =>', return_pet);
                res.json({message:'>petController > readOne >OK >', data: return_pet});
            }
        })
    },

    update: function(req, res) {
        Pet.findOne({_id: req.params.id}, function(err, petUpdated) {
            petUpdated.name = req.body.name;
            petUpdated.type = req.body.type;
            petUpdated.description = req.body.description;
            petUpdated.skill1 = req.body.skill1;
            petUpdated.skill2 = req.body.skill2;
            petUpdated.skill3 = req.body.skill3;
            petUpdated.save(function(err){
                if (err){
                    console.log('> petController > update > Pet.findOne > ERR', err);
                    res.json({message: 'petController > update > pet.findOne > ERR =>', error: err})
                }
                else {
                    console.log("> petController > update > Pet.findOne > success UPDATE!");
                    res.json({ message: "Success updated!" });
                }
            })
        })
    },

    delete: function(req, res) {
        Pet.remove({_id: req.params.id}, function(err) {
            console.log("DELETEING PET =>", req.params.id);
            if (err) {
                console.log('cannot DELETE > ERR =>', err);
                res.json({message:"ERROR cannot delete", error:err});
            }
            else {
                console.log('SUCCESS DELETE')
                res.json({ message: "Success deleted"});
            }
        })
    }


}