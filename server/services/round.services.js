import Round from "../models/round.js";
import Tournament from "../models/tournament.js";
export default class roundServices {
  // vấn toàn bộ vòng đấu
  async getAll(req, res) {
    const idTournament = req.params.id;
    const idUser = req.payload.userId;
    let tournament = await Tournament.findById(idTournament);
    if (!tournament) {
      return res.status(404).send("not found!");
    }
    try {
      let rs = await Round.find({ tournament: idTournament });
      if (rs) {
        return res.json(rs).status(200);
      } else {
        return res.send("not found").status(400);
      }
    } catch (error) {
      return res.send("error server").status(500);
    }
  }
}
