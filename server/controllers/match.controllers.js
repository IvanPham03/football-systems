import MatchServices from "../services/match.services.js";

const MatchService = new MatchServices();
export default class MatchControllers {
  // all bằng id tournament
  async getAll(req, res) {
    try {
      console.log(req.params.id);
      if (!req.params.id) {
        return res.status(400).send("không truyền id tournament");
      } else {
        MatchService.getAll(req, res);
      }
    } catch (error) {
      console.log(error);
      return res.send("createMatch::: " + req.body.idTournament).status(500);
    }
  }

  async getById(req, res) {
    let id = req.params.id;
    if (!id) {
      return res.send("Not found id").status(400);
    }
    await MatchService.getById(req, res);
  }

  // Update a match
  async updateMatch(req, res) {
    const id = req.body.id; // Extract the match ID from the request parameter

    if (!id) {
      return res.status(400).send("Missing match ID in request parameter");
    }

    try {
      await MatchService.updateMatch(req, res); // Delegate to service
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error updating match");
    }
  }

  //
  async finishMatch(req, res) {
    const id = req.body.id; // Extract the match ID from the request parameter

    if (!id) {
      return res.status(400).send("Missing match ID in request parameter");
    }

    try {
      await MatchService.finishMatch(req, res); // Delegate to service
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error updating match");
    }
  }
}
