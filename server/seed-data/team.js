import Team from "../models/teamPlayer.js";
import User from "../models/user.js";
export async function initTournament() {
  try {
    const countUser = await User.estimatedDocumentCount();
    console.log(countUser);
    if (countUser > 2) {
      let users = await User.find({});
      const count = await Team.estimatedDocumentCount();
      if (count === 0) {
        await Promise.all([
          new Team({
            name: "team 01 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 02 - 1",
            ownerId: users[0]._id,
          }).save(),new Team({
            name: "team 03 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 04 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 05 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 06 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 07 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 08 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 09 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 10 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 11 - 1",
            ownerId: users[0]._id,
          }).save(),
          new Team({
            name: "team 01 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 02 - 2",
            ownerId: users[1]._id,
          }).save(),new Team({
            name: "team 03 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 04 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 05 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 06 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 07 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 08 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 09 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 10 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 11 - 2",
            ownerId: users[1]._id,
          }).save(),
          new Team({
            name: "team 01 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 02 - 3",
            ownerId: users[2]._id,
          }).save(),new Team({
            name: "team 03 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 04 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 05 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 06 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 07 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 08 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 09 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({
            name: "team 10 - 3",
            ownerId: users[2]._id,
          }).save(),
          new Team({  
            name: "team 11 - 3",
            ownerId: users[2]._id,
          }).save(),
          
        ]);
        console.log("====================================");
        console.log("init seed data team");
        console.log("====================================");
      }
    }
  } catch (error) {
    console.error("init seed data team:::" + error);
  }
}

export default initTournament;
