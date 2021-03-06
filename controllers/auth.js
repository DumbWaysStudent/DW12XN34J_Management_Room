const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res) =>{
    const email = req.body.email
    const password = req.body.password

    User.findOne({where: {email, password}}).then(user=>{

        if(user){
            const token = 'Bearer ' + jwt.sign({ userId: user.id}, 'my-secret-key')
            res.send({
                email,
                token,
                message:  'Login Sukses!!'
            })
        }else{
            res.send({
                error:true,
                message: "Email yang anda masukkan salah!"
            })
        }
    })
}
exports.register = (req, res) =>{
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