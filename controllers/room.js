const models = require('../models')
const Room = models.room

exports.index = (req, res) => {
    Room.findAll().then(item=>res.send(item));
}
exports.createRoom = (req, res) =>{
    const { name } = req.body
    Room.create({
        name,
        createdBy:req.params.user_id
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true,
            message: 'Gagal'
        })
    })
}