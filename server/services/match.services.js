import Match from "../models/match.js";
import Tournament from "../models/tournament.js";
import Team from "../models/teamPlayer.js";
import Round from "../models/round.js";
export default class MatchServices {
  // vấn toàn bộ vòng đấu
  async getAll(req, res) {
    const idTournament = req.params.id;
    const idUser = req.payload.userId;
    let tournament = await Tournament.findById(idTournament);
    if (!tournament) {
      return res.status(404).send("not found!");
    }
    try {
      let rs = await Match.find({ tournamentId: idTournament });
      // console.log(rs);
      if (rs) {
        return res.json(rs).status(200);
      } else {
        return res.send("not found").status(400);
      }
    } catch (error) {
      return res.send("error server").status(500);
    }
  }

  //
  async getById(req, res) {
    const id = req.params.id;
    console.log(id);
    try {
      let rs = await Match.findById(id);
      if (rs) {
        let teamA = await Team.findById(rs.teamA);
        let teamB = await Team.findById(rs.teamB);
        if (teamA && teamB) {
          return res.json({ rs, teamA, teamB }).status(200);
        }
        return res.send("not found").status(400);
      } else {
        return res.send("not found").status(400);
      }
    } catch (error) {
      return res.send("error server").status(500);
    }
  }
  async updateMatch(req, res) {
    const { id, scoreA, scoreB, date } = req.body; // Get the match ID from the request parameter

    try {
      const updatedMatch = await Match.findByIdAndUpdate(id, {
        scoreA: scoreA,
        scoreB: scoreB,
        date: date,
      });

      if (!updatedMatch) {
        return res.status(404).send("Match not found");
      }

      return res.json(updatedMatch).status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error updating match");
    }
  }
  async finishMatch(req, res) {
    const id = req.body.id;
    console.log(id);
    try {
      let match = await Match.findById(id);
      // console.log(match);
      let differNumber = match.scoreA - match.scoreB;
      if (differNumber === 0) {
        return res.json("Tỷ số hòa không thể xếp hạng").status(400);
      } else {
        if (differNumber > 0) {
          await Match.findByIdAndUpdate(id, {
            winner: match.teamA,
          });
        } else {
          await Match.findByIdAndUpdate(id, {
            winner: match.teamB,
          });
        }
      }
      let round_Id = match.round_Id;
      const rounds = await Round.findById(round_Id);
      const countRounds = await Match.find({
        round_Id,
        winner: { $ne: "_" },
      });

      // nếu như các trận trong vòng đã kết thúc thì cập nhật win trong vòng tiếp theo
      // console.log(rounds.matches?.length);
      // console.log(countRounds.length);
      if (rounds.matches?.length === countRounds.length) {
        let tournamentId = rounds.tournament;
        let nextRoundNumber = rounds.number - 1;

        if (nextRoundNumber !== 0) {
          let matchsCurrent = await Match.find({
            _id: { $in: rounds.matches },
          });

          let nextRound = await Round.find({
            tournament: tournamentId,
            number: { $eq: nextRoundNumber },
          });

          let matchsNext = await Match.find({
            _id: { $in: nextRound[0]?.matches },
          });
          console.log(matchsNext[0]);
          console.log(matchsCurrent[0]);
          let indexCurrentMatch = 0;
          // lấy id win hiện tại cập nhật vòng tiếp
          for (let index = 0; index < matchsNext.length; index++) {
            await Match.findOneAndUpdate(matchsNext[index]._id, {
              teamA: matchsCurrent[indexCurrentMatch].winner,
              teamB: matchsCurrent[indexCurrentMatch + 1].winner,
            });
            indexCurrentMatch += 2;
          }
        }
      }
      return res.json("Trận đấu đã được xếp hạng").status(200);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error updating match");
    }
  }
  async getToExport(id) {
    try {
      return await Match.find({ tournamentId: id });
    } catch (error) {
      console.log(error);
    }
  }
}
