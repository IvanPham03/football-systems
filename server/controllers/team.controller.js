import teamServices from "../services/user.services.js"

const teamServices = new teamServices()

export default class teamControllers {
    async test(req, res){
      const t  = teamServices.test()
      return t
    }
}