import { Schema } from "mongoose"
import connect from "../config/db.config.js"

const player  = new Schema ({
    name: String
},{
    timestamps: true
})

const Player = connect.model('player', player)
export default Player