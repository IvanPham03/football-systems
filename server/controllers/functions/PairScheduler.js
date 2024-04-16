import pairScheduler from "./pairSchedule";
import * as _ from "lodash";

class PairScheduler {
    // PairScheduler ~> [Team] -> [(Team, Team)]
    schedule(teams) {
        return _
            .chunk(teams, 2)
            .filter((pair) => pair.length === 2);
    }
}
export default PairScheduler;
