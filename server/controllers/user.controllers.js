import userServices from "../services/user.services.js"

const userSer = new userServices()

export default class userControllers {
    async test(req, res){
      const t  = userSer.test()
      return t
    }
}