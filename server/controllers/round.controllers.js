import roundServices from "../services/round.services.js";

const roundService = new roundServices();
export default class RoundControllers {
  // all bằng id tournament
  async getAll(req, res) {
    try {
      console.log(req.params.id);
      if (!req.params.id) {
        return res.status(400).send("không truyền id tournament");
      } else {
        roundService.getAll(req, res);
      }
    } catch (error) {
      console.log(error);
      return res.send("createRound::: " + req.body.idTournament).status(500);
    }
  }
}
