import ScheduleServices from "../services/schedule.services.js";
import * as XLSX from "xlsx";
import MatchServices from "../services/match.services.js";
import TeamPlayerServices from "../services/teamPlayer.services.js";
const TeamPlayerService = new TeamPlayerServices();
const MatchService = new MatchServices();
const scheduleServices = new ScheduleServices();
export default class scheduleControllers {
  async createSchedule(req, res) {
    try {
      if (!req.body.idTournament) {
        return res.status(400).send("không truyền id tournament");
      } else {
        scheduleServices.createSchedule(req, res);
      }
    } catch (error) {
      console.log(error);
      return res.send("createSchedule::: " + req.body.idTournament).status(500);
    }
  }

  async exportFile(req, res) {
    const id = req.params.id;
    console.log("+++++=====================");
    try {
      console.log(req.params.id);
      if (!req.params.id) {
        return res.status(400).send("không truyền id tournament");
      } else {
        let rs = await MatchService.getToExport(id);
        let data = await Promise.all(
          rs.map(async (element) => {
            let teamA = await TeamPlayerService.getName(element.teamA);
            let teamB = await TeamPlayerService.getName(element.teamB);
            let row = {
              "Đội A": teamA[0].name,
              "Đội B": teamB[0].name,
              "Hiệu số": element.scoreA + "/" + element.scoreB,
              "Thẻ vàng": element.yellowCardsA + "/" + element.yellowCardsB,
              "Thẻ đỏ": element.redCardsA + "/" + element.redCardsB,
              "Ngày đấu": element.date,
            };

            return row;
          })
        );
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Employee Data");

        const buffer = XLSX.write(workbook, { type: "buffer" });

        // Set response headers
        res.set({
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": "attachment; filename=employee-data.xlsx",
          "Content-Length": buffer.length,
        });

        // Send the file content
        res.send(buffer);
      }
    } catch (error) {
      console.log(error);
      return res.send("createMatch::: " + req.body.idTournament).status(500);
    }
  }
}
