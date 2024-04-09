import Team from "../models/team.js"
import TeamFormation from "../models/teamFormation.js"


export default class teamServices{

  async createTeam(req, res){
      try {
          let newModel = new Team({
              name: req.body.teamName,
              // logo: req.body.selectedImages[0],
              logo: req.body.logo,
              level: req.body.level,
              phone: req.body.phone,
              policy: req.body.policy,
              age: req.body.age,
              contact: req.body.contact,
              email: req.body.email,
              areaActive: req.body.areaActive,
              uniform: req.body.selectedImages.slice(1,4).name,
              introduce: req.body.introduce,
              timeActive: req.body.timeActive,

          });
          let rs = await newModel.save();
          if(rs){
              // return res.status(201).send("Team saved successfully!");
              return res.status(201).json({ success: true, message: 'Team created successfully', teamId: rs._id });
          }else{
            return res.status(400).send("Team saved failed!!!")
          }
      } catch (error) {
          console.error("save team:::" + error);
          return res.status(500).send("Team could not be saved");
      }
  }
  async getAllTeams(req, res){
    try {
      // Sử dụng phương thức find() của model Team để lấy tất cả các đối tượng "Team"
      const teams = await Team.find({});
      // return teams; // Trả về mảng chứa tất cả các đối tượng "Team"
      await res.json(teams).status(200);
    } catch (error) {
      console.error("Error getting all teams:", error);
      throw error; // Ném lỗi nếu có lỗi xảy ra
    }
  }
  async findById(req, res) {
      try {
        // console.log(`params: ${req.params.teamId}`);
        if (req.params.teamId) {
          const team = await Team.findById(req.params.teamId);
          console.log(team);
          return res.json(team).status(200);
        }
        return;
      } catch (error) {
        console.log("====================================");
        console.error("truy vấn bằng id team:::" + error);
        console.log("====================================");
        return;
      }

  }
  async findByKeyword(req, res){
    try {
      const {keyword} = req.params;
      // Sử dụng phương thức find() của model Team để lấy tất cả các đối tượng "Team"
      const teams = await Team.find(
        {name : { $regex: new RegExp(keyword, 'i') } })
      // return teams; // Trả về mảng chứa tất cả các đối tượng "Team"
      return res.json(teams).status(200);
    } catch (error) {
      console.log("====================================");
      console.error("truy vấn bằng keyword team:::" + error);
      console.log("====================================");
      return;
    }
  }
  async createFormation(req, res){
    try {
      let newModel = new TeamFormation({

          teamName: req.body.teamName,
          formationName: req.body.formationName,
          number: req.body.number,
          formation: req.body.formation,
          policy: req.body.policy,
          pitch: req.body.pitch,
          // imagePlayer: req.body.imagePlayer,
          players: req.body.players,

      });
      let rs = await newModel.save();
      if(rs){
          // return res.status(201).send("Team saved successfully!");
          return res.status(201).json({ success: true, message: 'Team created successfully', teamId: rs._id });
      }else{
        return res.status(400).send("Team saved failed!!!")
      }
  } catch (error) {
    console.error("save team formation:::" + error);
    return res.status(500).send("Team Formation could not be saved");
  }
  }
  async findByEmail(req, res){
    try {
      const { email } = req.params; // Lấy giá trị email từ req.params
      // Sử dụng phương thức find() của model Team để tìm tất cả các đối tượng có email tương ứng
      const teams = await Team.find({ email });
      // Kiểm tra xem có đối tượng "Team" nào được tìm thấy hay không
      if (!teams || teams.length === 0) {
        return res.status(404).json({ message: "No teams found with the provided email" });
      }
      // Trả về mảng các đối tượng "Team" nếu tìm thấy
      return res.json(teams).status(200);
    } catch (error) {
      console.log("====================================");
      console.error("truy vấn bằng email team:::" + error);
      console.log("====================================");
      return;
    }
  }

}