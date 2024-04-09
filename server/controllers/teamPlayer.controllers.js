import createError from "http-errors";
import TeamPlayerServices from "../services/teamPlayer.services.js";

const TeamPlayerService = new TeamPlayerServices();
export default class TeamPlayerController {
  async create(req, res) {
    try {
      const {name,timeStart, timeEnd, venue, phoneNumber, numberPerTeam, numberTeam } = req.body;
      if (name && timeStart && timeEnd && venue && phoneNumber && numberPerTeam && numberTeam) {
        TeamPlayerService.createTeam(req, res);
      }
      else {
        return res.json(createError(400));
      }
    } catch (error) {
      return res.json(createError(500));
    }
  }
}
