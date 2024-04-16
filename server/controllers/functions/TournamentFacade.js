const RandomScheduler = require("./RandomScheduler");
const Tournament = require("./Tournament");
const Round = require("./Round");
const SortScheduler = require("./SortScheduler");
const SeedScheduler = require("./SeedScheduler");
const PairScheduler = require("./PairScheduler");

class TournamentFacade {
    // (Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) -> Match) -> TournamentFacade
    constructor(getWinner, getLoser, createMatch) {
        this.getWinner = getWinner;
        this.getLoser = getLoser;
        this.createMatch = createMatch;

        this.Tournament = Tournament;
        this.Round = Round;
        this.SortScheduler = SortScheduler;
        this.SeedScheduler = SeedScheduler;
        this.PairScheduler = PairScheduler;
        this.RandomScheduler = RandomScheduler;
    }

    // TournamentFacade ~> [Team] -> String -> Tournament
    createRandomTournament(teams, seed) {
        const scheduler = new RandomScheduler(seed);

        const tournament = new Tournament(
            this.getWinner,
            this.getLoser,
            this.createMatch,
            x => scheduler,
            teams
        );

        return tournament;
    }
}

export default TournamentFacade;
