import teamServices from "../services/team.services.js"

const teamService = new teamServices()

export default class teamControllers {
    async register(req, res){
      // const data = { message: "Success!", details: "Data retrieved successfully." };
      // return res.status(200).json(data);
      res.send('Get all teams')
    }
    async create(req, res){
      return await teamService.createTeam(req, res);
    }
    async findById(req, res){
      try {
        const team = await team.findById(req.params.teamId);
        res.json(team);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
    async getAlls(req, res){
      return await teamService.getAllTeams(req, res);
    }
    
}