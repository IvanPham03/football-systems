import Tournament from "../models/tournament.js";
import User from '../models/user.js'
export async function initTournament() {
  try {
    const countUser = await User.estimatedDocumentCount();
    console.log(countUser);
    if (countUser > 2) {
      let users = await User.find({})
      const count = await Tournament.estimatedDocumentCount();
      if (count === 0) {
        await Promise.all([
          new Tournament({
            name: "Giải đấu Bóng đá 2024",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động quận 7",
            phoneNumber: "0987654321",
            ownerId: users[0]._id,
            numberPerTeam: 7,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá Mini 2025",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động Thống Nhất",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[0]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá Mini 2026",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động Thống Nhất",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[0]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá Mini 2027",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động Thống Nhất",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[0]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá Mini 2024",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động quận 7",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[1]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá 2025",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động quận 7",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[0]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá 2026",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động quận 7",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[1]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
          new Tournament({
            name: "Giải đấu Bóng đá 2027",
            timeStart: "2024-05-01T08:00:00.000Z",
            timeEnd: "2024-05-15T18:00:00.000Z",
            venue: "Sân vận động quận 7",
            phoneNumber: "0987654321",
            numberPerTeam: 7,
            ownerId: users[1]._id,
            registrationDeadline: "2024-04-20T23:59:59.000Z",
            numberTeam: 16,
          }).save(),
        ]);
        console.log("====================================");
        console.log("init seed data tournament");
        console.log("====================================");
      }
    }
  } catch (error) {
    console.error("init seed data tournament:::" + error);
  }
}

export default initTournament;
