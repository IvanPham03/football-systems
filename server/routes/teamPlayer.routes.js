import express from "express";
import middleware from "../middlewares/index.js";
import TeamPlayerController from "../controllers/teamPlayer.controllers.js";
const router = express.Router();
const teamPlayerController =  new TeamPlayerController();
router.post('/create',[middleware.authJWT.verifyToken], teamPlayerController.create)

export default router 