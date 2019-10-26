const models = require('../models')
const Room = models.room
const Customer = models.customer
const Order = models.order

exports.index = (req, res) => {
    Room.findAll({
        include: [
            {
                model: Customer,
                as: 'customers',
                attributes:{exclude: ['createdAt', 'updatedAt']},
                through:{
                    model:Order,
                    where: {is_done: false},
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                }
            }
        ],
        attributes: {exclude: ['createdAt', 'updatedAt']}
    }).then(result=>{
        res.send(result)
    })
}
const getOrder = data => {
    const datas = {
        id:data.id,
        is_done: data.is_done,
        is_booked: data.is_booked,
        duration: data.duration,
        order_end_time: data.order_end_time,
        customer_id: data.customer_id,
        room_id: data.room_id
    }
    return datas
}

exports.createOrder = (req, res) => {
    const {is_done, is_booked, duration, order_end_time, customer_id, room_id} = req.body
    const time = new Date(order_end_time)
    Order.create({
        is_done,
        is_booked,
        duration,
        order_end_time:time,
        customer_id,
        room_id
    }).then(result => {
        res.send(getOrder(result))
    })
}

exports.updateOrder = (req, res) => {
    const {is_done, is_booked, duration, order_end_time, customer_id, room_id} = req.body
    const {order_id} = req.params
    const time = new Date(order_end_time)

    Order.findOne({
        where:{
            id:order_id,
            is_done: false,
            is_booked: true,
            customer_id,
            room_id
        }.then(item => {
            if(item){
                Order.update({
                    is_done,
                    is_booked,
                    duration,
                    order_end_time,
                    customer_id,
                    room_id
                },
                {
                where: {id: order_id}
                }
                ).then(()=> {
                    Order.findOne({
                        where: {id:order_id},
                    }).then(result => {
                        res.send(getOrder(result))
                    })
                })
            }else{
                res.json({
                    message: "Room Tersedia"
                })
            }
        })
    })
}