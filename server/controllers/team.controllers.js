import teamServices from "../services/user.services.js"

const teamService = new teamServices()

export default class teamControllers {
    async register(req, res){
      const t  = teamService.test()
      return t.send("he")
    }
    async create(req, res){
      return await teamService.create(req, res);
    }
}