const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.allUser = (req, res) => {
    User.findAll().then(item=>res.send(item));
}


exports.store = (req, res) =>{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    User.findOrCreate({
        where: {
            email,
            password,
            name
        },
    }).then( ([user, created]) => {
        if(created) {
            const token = jwt.sign({ createdId: created.id}, 'my-secret-key')
            res.send({
                email,
                token
            })
        }else{
            res.send({
                message: "Email yang anda masukkan sudah digunakan"
            })
        }
    })
}