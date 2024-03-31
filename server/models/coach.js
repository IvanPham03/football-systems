import { Schema } from "mongoose";
import connect from "../config/db.config.js";


const coach = new Schema(
    {
        name: String,
        birth: Date,
        email: String,
        phone: String,
        introduce: String,
        team: {type: Schema.Types.ObjectId, ref: "team"}
    },
    { timestamps: true }

)
const Coach = connect.model("coach", coach);
export default Coach;
