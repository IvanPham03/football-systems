import Team from "../models/team.js"
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
                return res.status(201).send("Team saved successfully!");
            }else{
              return res.status(400).send("Team saved failed!!!")
            }
        } catch (error) {
            console.error("save team:::" + error);
            return res.status(500).send("Team could not be saved");
        }
    }
    async findById(req, res) {
        try {
          if (req.id) {
            return await Team.findById(req.id);
          }
          return;
        } catch (error) {
          console.log("====================================");
          console.error("truy vấn bằng id team:::" + error);
          console.log("====================================");
          return;
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

}