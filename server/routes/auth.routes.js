import express from "express";
import authControllers from "../controllers/auth.controller.js";
import middleware from "../middlewares/index.js";
const authUser = express.Router();

const auth = new authControllers();
authUser.post(
  `/signup`,
  [middleware.verifySignUp.checkDuplicateEmailOrNumberphone],
  auth.signUp
);
authUser.post(`/login`, auth.signIn);
authUser.post(`/logout`, [middleware.authJWT.verifyToken], auth.logOut)
authUser.get('/test', auth.test)

export default authUser;
