import { Schema } from "mongoose"
import connect from "../config/db.config.js"

const player  = new Schema ({
    name: String,
    birth:Date,
    jerseyNumber: String,
    position: String,
    email: String,
    phone: String,
    introduce: String,
    // team: {type: Schema.Types.ObjectId, ref: "team"}
    team: { type: String }
},{
    timestamps: true
})

const Player = connect.model('player', player)
export default Player