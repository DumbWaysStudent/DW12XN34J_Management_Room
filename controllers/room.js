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

exports.updateRoom = (req, res) => {
    const {name} = req.body
    Room.update({
        name
    },
    {
        where:{id: req.params.room_id}
    }
    ).then(result=>{
        if(result){
            res.send({
                id: req.params.room_id,
                name,
                message: 'Update Success'
            });
        } else{
            res.send('Update Failed')
        }
    });
}