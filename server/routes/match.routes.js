import express from "express";
import middleware from "../middlewares/index.js";
import matchControllers from '../controllers/match.controllers.js';
const router = express.Router();
const match =  new matchControllers();
router.get('/getAll/:id',[middleware.authJWT.verifyToken], match.getAll)
router.post('/update',[middleware.authJWT.verifyToken], match.updateMatch)
router.get('/getById/:id',[middleware.authJWT.verifyToken], match.getById )
router.post('/finish',[middleware.authJWT.verifyToken], match.finishMatch)
export default router 