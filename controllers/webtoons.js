const models = require('../models')
const Webtoon = models.webtoon
const User = models.user

exports.index = (req, res) => {
    Webtoon.findAll().then(item=>res.send(item));
}


// exports.showFavorite = (req, res)=>{
//     Webtoon.findAll({
//         where:{is_favorite: true},
//     }).then(result=>res.send(result))
// }


exports.showTitle = (req, res)=>{
    Webtoon.findAll({
        where: {title: req.params.title}
    }).then(result=>res.send(result))
}

// exports.searchByTitle = (req, res)=>{
//     const title = req.query.title
//     if(title){
//         Webtoon.findAll({
//             where:{title: title},
//             include:[{
//                 model:User,
//                 as: 'userID',
//                 attributes: ['name'],
//             },
//         ],
//         }).then(result=>res.send(result))
//     }else{
//         Webtoon.findAll({
//             include:[
//                 {
//                     model: User,
//                     as: 'UserID',
//                     attributes: ['name'],
//                 },
//             ],
//         }).then(result=>res.send(result))
//     }
// }

exports.showMyWebtoon = (req, res)=>{
    Webtoon.findAll({
        where:{
            created_by: req.params.user_id
        },
        include:[{
            model: User,
            as:'createdBy',
            attributes:['name']
        }]
    }).then(result=>res.send(result));
}


exports.createToon = (req, res) =>{
    const { title, genre, is_favorite, image, created_by } = req.body
    Webtoon.create({
        title,
        genre,
        is_favorite,
        image,
        created_by: req.params.user_id
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true,
            message: 'Gagal'
        })
    })
}

exports.updateToon = (req, res) => {
    const {title, genre, is_favorite, image} = req.body;
    Webtoon.update({
        title,
        genre,
        is_favorite,
        image
    },
    {
        where:{id: req.params.webtoon_id,created_by: req.params.user_id},
    }
    ).then(res.send(req.body));
}

exports.deleteToon = (req, res)=>{
    const { user_id, webtoon_id} = req.params
    Webtoon.destroy({
        where: {id:webtoon_id, created_by: user_id}
    }).then(result =>
        res.send({
            id: webtoon_id,
            message:'Webtoon Berhasil dihapus'
        })
    )
}