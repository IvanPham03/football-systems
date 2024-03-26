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
          role: "admin",
          password: passwordAdmin,
          team: [],
          tournament: [],
        }).save(),
        new user({
          username: "Moderate",
          role: "Moderate",
          password: passwordModerate,
          team: [],
          tournament: [],
        }).save(),
        new user({
          username: "User",
          role: "User",
          password: passwordUser,
          team: [],
          tournament: [],
        }).save(),
      ]);
    }
    console.log('====================================');
    console.log('init seed data');
    console.log('====================================');
  } catch (error) {
    console.error("init seed data user:::" + error);
  }
}


export default initialUser