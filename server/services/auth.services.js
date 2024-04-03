import { Error } from "mongoose";
import User from "../models/user.js";
import jwt_service from "../config/jwt.js";
export default class authServices {
  async signUp(req, res) {
    try {
      const { email, password, name } = req.body;
      
    } catch (error) {
      console.log("error = " + error);
      return res.status(500).send("createHttpError.InternalServerError()");
    }
  }
  async signIn(email, password) {
    try {
      let user = new User();

      // Using await with User.findOne() waits for the promise to be resolved and receives the actual user document or null.
      // Not using await with user.findOne() returns a query object, not the actual user document.
      if (email) {
        user = await User.findOne({ email : email});
      }
      if (!user) {
        return;
      }
      try {
        let checkPassword = await user.isCheckPassword(password) 

        // nếu trả về true thì xác thực thành công đúng password
        if (checkPassword) {
          const accessToken = await jwt_service.signAccessToken(
            user._id
          );
          const refreshToken = await jwt_service.signRefreshToken(
            user._id
          );
          return [
            {
              accessToken: accessToken,
              refreshToken: refreshToken,
              userId: user._id,
              name: user.username,
            },
          ];
        }
      } catch (error) {
        console.error("login signInWithEmailAndPassword failed:::" + error);
        return;
      }
      return;
    } catch (error) {
      console.log('====================================');
      console.log("error login services:::" + error);
      console.log('====================================');
      throw new Error(error);
    }
  }
}
