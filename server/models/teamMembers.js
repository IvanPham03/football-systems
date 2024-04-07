import { Schema } from "mongoose"
import connect from "../config/db.config.js"

const teamMembers  = new Schema ({
    player: {type: Schema.Types.ObjectId, ref: "player"},
    teamFormation: {type: Schema.Types.ObjectId, ref: "teamFormation"},
    position: String
},{
    timestamps: true
})

const TeamMembers = connect.model('teamMembers', teamMembers)
export default TeamMembers