import numberOfRounds from "./numberOfRounds.js";
function generate(data, roundId) {
  const size = data.length
  const matches = [];
  function generateMatches(teams, matches, round) {
    if (teams.length <= 1) {
      return teams[0]; // Trả về đội chiến thắng duy nhất
    }
    const nextRoundMatches = [];
    const left = teams.splice(0, Math.ceil(teams.length / 2));
    const match = {
      team1: generateMatches(left, matches, round + 1),
      team2: generateMatches(teams, matches, round + 1),
      round: round,
    };

    nextRoundMatches.push(match);
    matches.push(nextRoundMatches);
    round;
  }
  generateMatches(data, matches, 1);

  let i = 1;
  let round = numberOfRounds(size);
  while (i < size) {
    matches.map((element) => {
      if (element[0].round === round) {
        element[0].order = i;
        element[0].round = roundId[round-1]
        i++;
        return element[0];
      }
    });
    round--;
  }

  return matches;
}

export default generate;
