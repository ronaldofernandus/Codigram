const userRoute=require('express').Router()
const userController = require('../controller/userController')


userRoute.get('/',userController.getUsers)
userRoute.post('/register',userController.register)
userRoute.post('/login',userController.login)

module.exports=userRoute