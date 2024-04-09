import teamServices from "../services/team.services.js"

const teamService = new teamServices()

export default class teamControllers {
    async create(req, res){
      return await teamService.createTeam(req, res);
    }
    async findById(req, res){
      return await teamService.findById(req, res);
    }
    async getAlls(req, res){
      return await teamService.getAllTeams(req, res);
    }
    async findByKeyword(req, res){
      return await teamService.findByKeyword(req, res);
    }
    async createFormation(req, res){
      return await teamService.createFormation(req, res);
    }
    async findByEmail(req, res){
      return await teamService.findByEmail(req, res);
    }
    
}