import { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import connect from "../config/db.config.js";

const user = new Schema(
  {
    username: String,
    email: {type: String, required: true},
    role: String,
    password: String,
    team: [{ type: String }], // danh sách đội đã tạo
    tournament: [{ type: String }], // danh sách giải đấu đã tạo
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

// check password for login
user.method(`isCheckPassword`, async function(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
});
const User = connect.model("user", user);
export default User;
