import express from 'express'
import teamControllers from '../controllers/team.controllers.js'

const router = express.Router()

const teamController = new teamControllers()

router.get('/team/register', teamController.register)
router.post('/create', teamController.create)


export default router