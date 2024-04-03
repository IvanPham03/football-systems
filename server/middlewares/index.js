import verifySignUp from "./verifySignUp.js";
import authJWT from "./authJWT.js";

const middleware = {};
middleware.verifySignUp = verifySignUp;
middleware.authJWT = authJWT;
export default middleware;
