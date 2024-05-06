const express = require('express');
const router = express.Router();

let voitures = [
    {id:1,name:"clio"},
    {id:2,name:"megane"},
    {id:3,name:"range"}
];
//-creer un api pour ajouter une voiture au tableau voiture
router.post('/add', (req, res) => {
                                        const nouvelleVoiture = req.body;
                                        voitures.push(nouvelleVoiture);
                                        res.send("Voiture ajoutée!");
                                        });
//-creer un api pour lister tous les voitues 
router.get('/all', (req, res) => {
                                        res.json(voitures);
                                      });
    
//creer un api pour lister une voiture a traveres le parametre passer et un message not found s'il existe pas dans le tableau 
router.get('/all/:id', (req, res) => {
                                           const Id = parseInt(req.params.id);
                                           const voiture = voitures.find(v => v.id === Id);
                                           if (voiture) {
                                                res.json(voiture);
                                           } else {
                                                res.status(404).send("not found!");
                                           }
                                           });
//-creer un api pour modifier une voiture avec un id specifique avec une verification (existe ou non )
router.put('/edit/:id', (req, res) => {
                                      const Id = parseInt(req.params.id);
                                      const index = voitures.findIndex(v => v.id === Id);
                                      if (index !==-1) {
                                                           voitures[index] = req.body;
                                                           res.send("Voiture modifiée!");
                                                        } else {
                                                           res.status(404).send("not found!");
                                                        }
                                    });
//-creer un api pour supprimer une voiture avec un id specifiue avec une verification avant le supprimer
router.delete('/delete/:id', (req, res) => {
                                              const Id = parseInt(req.params.id);
                                              const index = voitures.findIndex(v => v.id === Id);
                                              if (index !== -1) {
                                                                 voitures.splice(index, 1);
                                                                 res.send("Voiture supprimée!");
                                                                 } else {
                                                                         res.status(404).send("not found!");
                                                                 }
                                             });
module.exports=router;