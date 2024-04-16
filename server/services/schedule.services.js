import Tournament from "../models/tournament.js";
import numberOfRounds from "../controllers/functions/numberOfRounds.js";
import TeamPlayer from "../models/teamPlayer.js";
import Round from "../models/round.js";
import Match from "../models/match.js";
import generateMatches from "../controllers/functions/generateMatches.js";
export default class scheduleServices {
  async createSchedule(req, res) {
    try {
      const idTournament = req.body.idTournament;
      const idUser = req.payload.userId;
      let tournament = await Tournament.findById(idTournament);
      if (!tournament) {
        return res.status(404).send("not found!");
      }
      const { team, numberTeam, numberPerTeam } = tournament;

      // loading team list
      const teamPlayerList = await Promise.all(
        team.map(async (element) => {
          const teamPlayer = await TeamPlayer.findById(element);
          return teamPlayer;
        })
      );

      teamPlayerList.forEach((element) => {
        if (element.players.length != numberPerTeam) {
          return res
            .status(403)
            .send(element.name + " : Không đủ thành viên trong đội");
        }
      });
      const roundName = [
        { name: "Chung kết", number: 1 },
        { name: "Bán kết", number: 2 },
        { name: "Tứ kết", number: 3 },
        { name: "1/16", number: 4 },
        { name: "1/32", number: 5 },
        { name: "1/64", number: 6 },
        { name: "1/128", number: 7 },
      ];

      // tính số vòng để lấy tên vòng
      const numberRound = numberOfRounds(team.length);
      const roundOfTournament = roundName.slice(0, numberRound);
      // tạo vòng cho giải đấu
      const createdRounds = await Promise.all(
        roundOfTournament.map(async (element) => {
          try {
            const newRound = new Round({
              name: element.name,
              tournament: idTournament,
              number: element.number
            });
            await newRound.save();
            return newRound._id.toString(); // Return the created Round object
          } catch (error) {
            console.log(error);
            return res.status(500).send("Tạo lịch đấu thất bại");
          }
        })
      );

      // tạo trận đấu cho từng vòng, kèm theo đó là thứ tự của từng trận
      const listMatch = generateMatches(team, createdRounds);
      const createMatch = await Promise.all(
        listMatch.map(async (element) => {
          try {
            const newMatch = new Match({
              round_Id: element[0].round,
              tournamentId: idTournament,
              teamA: element[0].team1,
              teamB: element[0].team2,
              ordinalNumber: element[0].order,
            });
            await newMatch.save();
            return newMatch;
          } catch (error) {
            console.log(error);
            return res.status(500).send("Tạo lịch đấu thất bại");
          } // Return the created Round object
        })
      );

      const updateRound = await Promise.all(
        createMatch.map(async (e) => {
          try {
            return await Round.findOneAndUpdate(
              { _id: e.round_Id },
              {
                $push: { matches: e._id }, // Add
              }
            );
          } catch (error) {
            console.log(error);
            return res.status(500).send("Tạo lịch đấu thất bại");
          }
        })
      );

      if (createdRounds && updateRound) {
        let updateTournament = await Tournament.findByIdAndUpdate(
          idTournament,
          { rounds: createdRounds, status: "active" }
        );
      }
      return res.status(200).send("Tạo thành công lịch đấu::: " + idTournament);
    } catch (error) {
      return res.status(500).send("Tạo lịch đấu thất bại");
    }
  }
}
