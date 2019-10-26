const models = require('../models')
const Episode = models.episode
const Page = models.page

exports.getPages = (req, res)=>{
    const webtoonId = req.params.id_webtoon
    const episodeId = req.params.id_episode

    Episode.findOne({
        where: { id_webtoon: webtoonId },
        // attributes: { exclude:["id", "id_episode"] }
    }).then((episode)=>{
        Page.findAll({
            where:{ id_episode: episodeId }
        }).then(page => res.send(page))
    })
};

exports.createPage = (req, res)=>{
    const{page, image} = req.body
    Page.create({
        id_episode: req.params.episode_id,
        page,
        image
    }).then(result=> res.send(result))
}

exports.deletePage = (req, res)=>{
    const { image_id } = req.params
    Page.destroy({
        where: {id:image_id}
    }).then(result =>
        res.send({
            id: image_id,
            message:'Episode Berhasil dihapus'
        })
    )
}