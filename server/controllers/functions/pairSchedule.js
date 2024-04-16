import * as _ from "lodash";

// [Team] -> [(Team, Team)]
function pairSchedule(teams) {
  return _.chunk(teams, 2);
}

export default pairSchedule;
