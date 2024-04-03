import bcrypt from "bcryptjs";
import user from "../models/user.js";

export async function initialUser() {
  try {
    const count = await user.estimatedDocumentCount();
    const passwordAdmin = await bcrypt.hash("admin", 10);
    const passwordModerate = await bcrypt.hash("moderate", 10);
    const passwordUser = await bcrypt.hash("user", 10);
    if (count === 0) {
      await Promise.all([
        new user({
          username: "admin",
          email: "admin@gmail.com",
          role: "admin",
          password: passwordAdmin,
          team: [],
          tournament: [],
        }).save(),
        new user({
          username: "moderate",
          email: "moderate@gmail.com",
          role: "moderate",
          password: passwordModerate,
          team: [],
          tournament: [],
        }).save(),
        new user({
          username: "user",
          email: "user@gmail.com",
          role: "user",
          password: passwordUser,
          team: [],
          tournament: [],
        }).save(),
      ]);
      console.log("====================================");
      console.log("init seed data user");
      console.log("====================================");
    }
  } catch (error) {
    console.error("init seed data user:::" + error);
  }
}

export default initialUser;
