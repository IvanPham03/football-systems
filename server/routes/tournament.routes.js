import express from "express";
import tournamentControllers from "../controllers/tournament.controllers.js";

const router = express.Router();
const tournamentController = new tournamentControllers();
router.get('/', tournamentController.getAlls)
router.post('/create', tournamentController.createTournament)
router.put('/:id', tournamentController.updateTournament)
router.delete('/:id', tournamentController.deleteTournament)
router.get('/:id', tournamentController.findTournament)
export default router