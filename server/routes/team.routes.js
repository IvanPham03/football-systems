import express from 'express'
import teamControllers from '../controllers/team.controllers.js'

const router = express.Router()

const teamController = new teamControllers()

// router.get('/register', teamController.register)
router.get('/', teamController.getAlls)
router.post('/create', teamController.create)
router.get('/:teamId', teamController.findById)
// router.post('/createFormation', teamController.createFormation)
// router.get('/', teamController.register);

export default router