const models = require('../models')
const Favorite = models.favorite

exports.getFav = (req, res) =>{
    const favorite = req.query.is_favorite
    const user = req.params.id

    if(favorite == 'true'){
        Favorite.findAll({
            where: {is_favorite: 1, user_id: user},
        }).then(result => res.send(result));
    }else{
        Favorite.findAll({
            where:{is_favorite:0, user_id: user},
        }).then(result => res.send(result))
    }
}
