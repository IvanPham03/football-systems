import Tournament from "../models/tournament.js";
export default class tournamentServices {
  //get all
  async getAlls(req, res) {
    try {
      let role = "user";
      let userId = "6607c0f995fa0e629690bbda";
      let temp = null;
      // chỉ return về tournament public và của chính user đó
      // role admin thì return hết kể cả public hay private
      if (role === "admin") {
        temp = await Tournament.find({});
      } else {
        // truy vấn với 2 điều kiện 1 là giải đấu công khai, 2 là giải đấu do người đó tạo kể cả có private
        temp = await Tournament.find({
          $or: [
            {
              privacy: "public",
            },
            {
              ownerId: { $eq: userId },
            },
          ],
        });
      }
      return await res.json(temp).status(200);
    } catch (error) {
      console.warn("Error find all tournament::: " + error);
      await res.send("Error find all tournament").status(500);
    }
  }
  // xoá giải đấu
  async deleteById(req, res) {
    try {
      if (req.id) {
        let temp = await Tournament.findByIdAndDelete(id);
        return temp !== undefined ? res.status(200) : res.status(400);
      }
    } catch (error) {
      console.error("xoá giải đấu:::" + error);
      return res.status(500);
    }
  }

  // truy vấn bằng id
  async findById(req, res) {
    try {
      if (req.id) {
        return await Tournament.findById(req.id);
      }
      return;
    } catch (error) {
      console.log("====================================");
      console.error("truy vấn bằng id tournament:::" + error);
      console.log("====================================");
      return;
    }
  }

  // cập nhật
  async findAndUpdateById(req, res) {
    try {
      if (req.id) {
        let temp = Tournament.findByIdAndUpdate(req.id, req.update);
        return temp !== undefined ? res.status(200) : res.status(400);
      }
    } catch (error) {
      console.error("tim va cap nhat giải đấu bang id:::" + error);
      return res.status(500);
    }
  }
  async createTournament(req, res) {
    try {
      let newModel = new Tournament({
        name: req.name,
        timeStart: req.timeStart,
        timeEnd: req.timeEnd,
        venue: req.venue,
        phoneNumber: req.phoneNumber,
        ownerId: req.ownerId,
        numberPerTeam: req.numberPerTeam,
        registrationDeadline: req.registrationDeadline,
        numberTeam: req.numberTeam,
      });
      let rs = await newModel.save();
      if (rs.ok === 1) {
        return res.status(201).send("Tournament saved successfully!");
      } else return res.status(400).send("Tournament could not be saved.");
    } catch (error) {
      console.error("save tournament:::" + error);
      return res.status(500).send("Tournament could not be saved.");
    }
  }
}
