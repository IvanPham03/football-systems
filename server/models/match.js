import { Schema } from "mongoose"
import connect from "../config/db.config.js"

const match  = new Schema ({
    name: String,
    homeTeam: String, 
    awayTeam: String,
    score: String
},{
    timestamps: true
})

const Match = connect.model('match', match)
export default Match