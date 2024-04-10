import TeamPlayer from "../models/teamPlayer.js";
import createError from "http-errors";
import moment from "moment";
import Tournament from "../models/tournament.js";
export default class TeamPlayerServices {
  async createTeam(req, res) {
    try {
      const {
        name,
        timeStart,
        timeEnd,
        venue,
        phoneNumber,
        numberPerTeam,
        numberTeam,
        pathImage,
        privacy,
        data,
        registrationDeadline,
        dataDetails,
        formatTour,
      } = req.body;
      const user = req.payload;

      if (
        !data ||
        !name ||
        !timeStart ||
        !timeEnd ||
        !venue ||
        !phoneNumber ||
        !registrationDeadline ||
        !numberTeam ||
        !numberPerTeam ||
        !privacy ||
        !formatTour
      ) {
        return res.json(createError.BadRequest("Lỗi dữ liệu xử lý"));
      }
      const nameTour = await Tournament.findOne({ name: name });
      if (nameTour) {
        return res.json(createError.BadRequest("Tên giải đấu đã tồn tại"));
      }
      const savePromises = data.map(async (e) => {
        let rs = await new TeamPlayer({
          name: e.name,
          ownerId: user.userId,
          phoneNumber: e.phoneNumber,
          email: e.email,
          timeActive: "",
          areaActive: "",
          contact: e.contact,
          pathImg: "",
          players: e.players,
          age: e.age,
        }).save();

        if (!rs) {
          return res.json(createError(400, "Lỗi tạo teamplayer"));
        }
        return rs._id.toString();
      });
      //

      const teamIds = await Promise.all(savePromises);
      console.log(teamIds);

      const create = await new Tournament({
        name: name,
        ownerId: user.userId,
        timeStart:  new Date(timeStart),
        timeEnd:  new Date(timeEnd),
        venue: venue,
        phoneNumber: phoneNumber,
        numberPerTeam: numberPerTeam,
        registrationDeadline: registrationDeadline,
        numberTeam: numberTeam,
        privacy: privacy,
        pathImage: pathImage,
        team: teamIds,
        formatTour: formatTour,
        formatDetails: dataDetails,
      }).save();

      if (!create) {
        return res.json(createError(300, "Thông tin đội không hợp lệ"));
      }
      return res.status(201).send("success");
    } catch (error) {
      console.log(error);
      return res.json(createError(500));
    }
  }

  async deleteTeam() {}

  async updateTeam() {}

  async getTeamById() {}

  async getAll() {}
}
