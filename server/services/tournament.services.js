import Tournament from "../models/tournament.js";
import createHttpError from "http-errors";
export default class tournamentServices {
  //get alls
  // không làm admin nên truy vấn tạm load all public và private nếu tồn tại userid
  async getAlls(req, res) {
    try {
      let userId = req.payload?.userId;
      if (userId) {
        let temp = await Tournament.find({
          $or: [
            {
              privacy: "public",
            },
            {
              ownerId: { $eq: userId },
            },
          ],
        });
        return res.json(temp).status(200);
      } else {
        let temp = await Tournament.find({
          privacy: "public",
        });
        return res.json(temp).status(200);
      }
    } catch (error) {
      console.warn("Error find all tournament::: " + error);
      await res.send("Error find all tournament").status(500);
    }
  }

  async getAll(req, res) {
    try {
      // return all tournament of user
      let userId = req.payload?.userId;
      if (userId) {
        let temp = await Tournament.find({ ownerId: userId });
        console.log(temp);
        if (temp) {
          return res.json(temp).status(200);
        }
        return res.send("not found").status(404);
      } else {
        return res.send("not found").status(404);
      }
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
      if (req.params.id) {
        let rs = await Tournament.findById(req.params.id);
        if (rs) {
          return res.json(rs).status(200);
        }
      }
      return res.json(createHttpError.NotFound());
    } catch (error) {
      console.error("truy vấn bằng id tournament:::" + error);
      return res.json(createHttpError.InternalServerError());
    }
  }

  // Về mặt kỹ thuật, giải đấu có thể có tên trùng nhau.
  // trong thực tế, việc trùng tên giải đấu có thể dẫn đến một số vấn đề
  // Nhầm lẫn, Khó khăn trong việc tìm kiếm thông tin, ....
  async findByName(name) {
    try {
      if (name) {
        return await Tournament.find({ name: req.name });
      }
      return res.json(createHttpError.NotFound());
    } catch (error) {
      console.log("====================================");
      console.error("truy vấn bằng name tournament:::" + error);
      console.log("====================================");
      return res.json(createHttpError.InternalServerError());
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
        name: req.body.name,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        venue: req.body.venue,
        phoneNumber: req.body.phoneNumber,
        ownerId: req.payload.userId,
        numberPerTeam: req.body.numberPerTeam,
        registrationDeadline: req.body.registrationDeadline,
        numberTeam: req.body.numberTeam,
        privacy: req.body.privacy,
        pathImage: req.body.pathImage,
      });
      let rs = await newModel.save();
      if (rs) {
        return res.status(201).send("Tournament saved successfully!");
      } else return res.status(400).send("Tournament could not be saved.");
    } catch (error) {
      console.error("save tournament:::" + error);
      return res.status(500).send("Tournament could not be saved.");
    }
  }
}
