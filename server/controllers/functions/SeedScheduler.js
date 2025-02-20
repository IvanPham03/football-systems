import seedSchedule from "./seedSchedule";

class SeedScheduler {
    // (Team -> Team -> Number) -> Scheduler
    constructor(compareFunction) {
        this.compareFunction = compareFunction;
    }

    // SeedScheduler ~> [Team] -> [(Team, Team)]
    schedule(teams) {
        return seedSchedule(this.compareFunction, teams);
    }
}

export default SeedScheduler;
