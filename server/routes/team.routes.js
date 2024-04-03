import express from 'express'
import teamControllers from '../controllers/team.controllers.js'

const router = express.Router()

const team = new teamControllers()

router.get('/team/register', team.register)


export default router