import createError from "http-errors";
import path from "path";
import TeamPlayerServices from "../services/teamPlayer.services.js";
const TeamPlayerService = new TeamPlayerServices();
export default class TeamPlayerController {
  async create(req, res) {
    try {
      const {
        name,
        timeStart,
        timeEnd,
        venue,
        phoneNumber,
        numberPerTeam,
        numberTeam,
      } = req.body;
      if (
        name &&
        timeStart &&
        timeEnd &&
        venue &&
        phoneNumber &&
        numberPerTeam &&
        numberTeam
      ) {
        TeamPlayerService.createTeam(req, res);
      } else {
        return res.json(createError(400));
      }
    } catch (error) {
      return res.json(createError(500));
    }
  }
  // get by id
  async getById(req, res) {
    try {
      console.log(req.params.id);
      if (req.params.id) {
        await TeamPlayerService.getTeamById(req, res);
      } else {
        return res.json(createError(400));
      }
    } catch (error) {
      console.log(error);
      return res.json(createError(500));
    }
  }
  async getFile(req, res) {
    // Xác định đường dẫn đến file
    const __dirname = path.resolve(path.dirname(""));
    console.log(__dirname);
    const filePath = path.join(__dirname, "/seed-data/team-player.xlsx");
    // Đọc file và gửi về client
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Lỗi khi lấy file");
      } else {
        console.log("File đã được gửi thành công");
      }
    });
  }
}
