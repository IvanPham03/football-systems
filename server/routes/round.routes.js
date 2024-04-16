import express from "express";
import middleware from "../middlewares/index.js";
import roundControllers from '../controllers/round.controllers.js';
const router = express.Router();
const round =  new roundControllers();
router.get('/getAll/:id',[middleware.authJWT.verifyToken], round.getAll)


export default router 