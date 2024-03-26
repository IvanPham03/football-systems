import { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import connect from "../config/db.config.js";

const user = new Schema(
  {
    username: String,
    role: String,
    password: String,
    team: [{ type: Schema.Types.ObjectId, ref: "team" }],
    tournament: [{ type: Schema.Types.ObjectId, ref: "tournament" }],
  },
  { timestamps: true }
);
// hash password user before save
user.pre("save", async function (next) {
  try {
    console.log("password before::: " + this.password);
    this.password = bcrypt.hash(this.password, 10);
    console.log("password after::: " + this.password);
    next();
  } catch (error) {
    throw new Error(error);
  }
});
const User = connect.model("user", user);
export default User;
