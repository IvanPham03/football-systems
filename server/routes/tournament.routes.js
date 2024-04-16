import express from "express";
import tournamentControllers from "../controllers/tournament.controllers.js";
import middleware from '../middlewares/index.js'
const router = express.Router();
const tournamentController = new tournamentControllers();
router.get('/', tournamentController.getAlls)
router.get('/user',  [middleware.authJWT.verifyToken], tournamentController.getAll)
router.post('/create', [middleware.authJWT.verifyToken], tournamentController.createTournament)
router.put('/:id', tournamentController.updateTournament)
router.delete('/:id', tournamentController.deleteTournament)
router.get('/:id', tournamentController.findTournament)
// router.get('/find-by-name/:name',tournamentController.createTournament)
export default router