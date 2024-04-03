import jwt from "jsonwebtoken";

const KEY_ACCESS_TOKEN = "process.env.keyAccess";
const KEY_REFRESH_TOKEN = "process.env.keyAccess" // key này nên gen sinh key để có tính bảo mật cao, trong trường hợp này set
const signAccessToken = async (userId) => {
  return new Promise((resovle, reject) => {
    const payload = {
      userId,
    };
    const secret = KEY_ACCESS_TOKEN;
    const options = {
      expiresIn: "3d"
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (token) resovle(token);
      reject(err);
    });
  });
};

const signRefreshToken = async (userId) => {
  return new Promise((resovle, reject) => {
    const payload = {
      userId,
    };
    const secret = KEY_REFRESH_TOKEN;
    const options = {
      expiresIn: "30d"
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (token) resovle(token);
      reject(err);
    });
  });
};

const jwt_service = {
  signAccessToken,
  signRefreshToken
};

export default jwt_service;
