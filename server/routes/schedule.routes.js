import express from "express";
import middleware from "../middlewares/index.js";
import ScheduleControllers from '../controllers/schedule.controllers.js';
const router = express.Router();
const scheduleControllers =  new ScheduleControllers();
router.post('/create',[middleware.authJWT.verifyToken], scheduleControllers.createSchedule)
router.get('/exportFile/:id',[middleware.authJWT.verifyToken], scheduleControllers.exportFile)
export default router 