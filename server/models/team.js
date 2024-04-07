import { Schema } from "mongoose";
import connect from "../config/db.config.js";
const team = new Schema(
  {
    name: String,
    logo:{
      type:String,
      default:""
    },
    level: String,
    phone: String,
    policy: String,
    age: Number,
    contact: String,
    email: String,
    areaActive: String,
    uniform:{
      // type:String,
      // default:""
      type: [{
        type: String,
        default: ""
      }],
      validate: [arrayLimit, '{PATH} exceeds the limit of 3']
    },
    introduce: String,
<<<<<<< HEAD
    timeActive: String,
    // player: [{ type: Schema.Types.ObjectId, ref: "player" }],
    // teamFormation: [{ type: Schema.Types.ObjectId, ref: "teamFormation" }],
    // coach: {type: Schema.Types.ObjectId, ref: "coach"}
    player: { type : String },
    teamFormation: [ { type : String}],
    coach : { type : String}

=======
    period: String,
    teamFormation: [{ type: Schema.Types.ObjectId, ref: "teamFormation" }],
    coach: {type: Schema.Types.ObjectId, ref: "coach"},
    player: [{ type: String }] // lưu danh sách id cầu thủ 
>>>>>>> d8e41043a762a23376ac8be803f89b99899db560
  },
  { timestamps: true }
);
function arrayLimit(val) {
  return val.length <= 3;
}

const Team = connect.model("team", team);
export default Team;
