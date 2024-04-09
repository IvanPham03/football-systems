import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
const verifyToken = (req, res, next) => {
  // check exist access token
  if(!req.cookies['access-token']){
    // console.log(req.cookies['access-token']);
    return res.status(401).json(createHttpError.Unauthorized)
  }
  const token = req.cookies['access-token']
  console.log(token);
  jwt.verify(
    token, process.env.keyAccess, (err, payload) =>{
      if(err){
        return res.status(401).json(createHttpError.Unauthorized)
      }
      // payload có dạng như sau
      // {
      //   userId: 'Zl3cabzpwnecTBDOiQuBgXtAqCV2',
      //   iat: 1707884290,
      //   exp: 1708143490
      // }
      req.payload = payload //Attach payload to the request object
      next()
    }
  )
};
const verifyRefreshToken = (req, res, next) =>{
  // console.log('header', req.headers['authorization']);
  if(!req.headers['Authorization']){
    return next(createHttpError.Unauthorized)
  }
  const headerRefreshToken = req.headers['Authorization'].split(' ')
  const token = headerRefreshToken[1]
  console.log('token', token);
  jwt.verify(
    token, process.env.keyRefresh, (err, payload)=>{
      if(err)
      {
        return next(createHttpError.Unauthorized)
      }
      
      req.payload = payload
      next()
    }
  )
}
const authJWT = {
    verifyToken,
    verifyRefreshToken, 
}


export default authJWT 