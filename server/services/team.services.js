import Team from "../models/team.js"
export default class teamServices{
    async CreateTeam(req, res){
        try {
            let newModel = new Team({
                name: req.teamName,
                logo: req.selectedImages[0],
                age: req.age,
                level: req.level,
                policy: req.policy,
                email: req.email,
                phone: req.phone,
                area: req.area,
                uniform: [req.selectedImages[1],
                        req.selectedImages[2],
                    req.selectedImages[3]],
                introduce: req.introduce,
                period: req.period,

            });
            let rs = await newModel.save();
            if(rs.ok === 1){
                return res.status(201).send("Team saved successfully!");
            }else return res.status(400).send("Team saved failed!!0!")
        } catch (error) {
            console.error("save team:::" + error);
            return res.status(500).send("Team could not be saved");
        }
    }

}