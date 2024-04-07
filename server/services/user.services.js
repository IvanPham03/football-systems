import db from "../models/index.js";
// const user = db.user
export default class userServices {
  // get detail user buy userid from token
  async test() {
    try {
      return "user service test";
    } catch (error) {
      throw new Error(error);
    }
  }

}
