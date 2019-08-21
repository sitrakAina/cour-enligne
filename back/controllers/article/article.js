const Article = require('../../models/article.model');
// const UserCuisiner = require('../../models/User')
const fs = require('fs')

//Create new Article
exports.create = (req, res) => {
        Article.find()
        .then(user => {
            var id;
            if (user.length == 0) {
                id = 0
            } else {
                id = parseInt(user[user.length - 1]._id) + 1
            }
            let imageFile = req.files.image;
            let nomImage = id
            res.setHeader('Content-Type', 'text/plain');
        
            imageFile.mv(`${__dirname}/public/${nomImage}.jpg`, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            const article = new Article({
                _id: id,
                idUser:req.body.idUser,
                titre: req.body.titre,
                prix: req.body.prix,
                description: req.body.description,
                image:nomImage + '.jpg',
            });
            article.save()
                .then(() => {
                    Article.find()
                        .then(data => {
                            res.send(data);
                        })
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the profil."
                    });
                });
        })
    
};

//Get un par un image
exports.findOneArticle =(req, res) =>{ 
    try { 
        let picture = fs.readFileSync('./controllers/atelier/public/'+req.params.image)
        console.log('params: ',req.params.image);
        res.write(picture) 
        res.end() 
    } 
    catch (e) { console.log("envoie erroné: ", e); } }


    
exports.findAllArticle = (req, res) => {
    Article.find()
        .then(atel => {
            res.send(atel);
        }).catch(err => {
            res.status(500).send(atel => {
                message: err.message || "Something wrong while retrieving profils."
            });
        });
};

// Find a single article with a articleID
exports.findOne = (req, res) => {
    Article.find({idUser:req.params.idUser})
        .then(profilchoix => {
            //console.log(unprofil)
            if (!profilchoix) {
                return res.status(404).send({
                    message: "profil not found with id" + req.params.idUser
                });
            }
            else {
                res.send(profilchoix);
            }


        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "profil not found with id " + req.params.idUser
                });
            }
            return res.status(500).send({
                message: "Something wrong retrieving profil with id " + req.params.idUser
            });
        });
};

//update

exports.update = (req, res) => {
    // Validate Request()
    console.log('ity ny requete'+req.body.nom)
    if(!req.body.titre || !req.body.description) {
        return res.status(400).send({
            message: "eleve content can not be empty"
        });
    }
    console.log('ity n params'+req.params.articleId)
    let imageFile = req.files.image;
        //console.log('inona ny ato o!'+imageFile)
        let nomImage = req.params.articleId
        res.setHeader('Content-Type', 'text/plain');

        imageFile.mv(`${__dirname}/public/${nomImage }.jpg`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
        });
        console.log('tonga eto v nw')
    // Find and update eleve with the request body
    Article.findByIdAndUpdate(req.params.articleId, {
                titre: req.body.titre,
                idUser:req.body.idUser,
                prix: req.body.prix,
                description: req.body.description,
                image:nomImage + '.jpg',
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.articleId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "eleve not found with id " + req.params.articleId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.articleId
        });
    });
};