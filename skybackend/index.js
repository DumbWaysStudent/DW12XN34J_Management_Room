const express =require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 7000

const AuthController = require('./controllers/auth')
const RoomController = require('./controllers/room')
const CustomerController = require('./controllers/customer')
const OrderController = require('./controllers/order')

const { authenticated } = require('./middleware')

app.use(bodyParser.json())

app.group('/api/v2', (router)=>{
    
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    // Room
    router.get('/rooms', authenticated, RoomController.index)
    router.post('/room', authenticated, RoomController.createRoom)
    router.put('/room/:room_id', authenticated, RoomController.updateRoom)

    //Customer
    router.get('/customers', authenticated, CustomerController.index)
    router.post('/customer', authenticated, CustomerController.createCustomer)
    router.put('/customer/:customer_id', authenticated, CustomerController.updateCustomer)

    //Order
    router.get('/checkin' ,authenticated, OrderController.index)
    router.post('/checkin', authenticated, OrderController.createOrder)
    router.put('/checkin/:order_id', authenticated, OrderController.updateOrder)
})

app.listen(port, () => console.log('Listening o Port ${7000}'))