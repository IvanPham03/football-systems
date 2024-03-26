import express from 'express'
import userControllers from '../controllers/user.controllers.js'

const router = express.Router()

const user = new userControllers()

router.get('/', user.test)


export default router