import express from 'express'
import teamControllers from '../controllers/team.controllers.js'

const router = express.Router()

const teamController = new teamControllers()

router.get('/', teamController.getAlls)
router.post('/create', teamController.create)
router.get('/:teamId', teamController.findById)
router.get('/search/:keyword', teamController.findByKeyword)
router.get('/searchEmail/:email', teamController.findByEmail)
router.post('/createFormation', teamController.createFormation)



export default router