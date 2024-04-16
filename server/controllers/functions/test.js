import numberOfRounds from "./numberOfRounds.js";

let teams = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
];
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
generateMatches(teams, matches, 1);

let i = 1;
let round = numberOfRounds(teams.length);
while (i < teams.length) {
  matches.map((element) => {
    if (element[0].round === round) {
      element[0].order = i;
      i++;
      return element[0];
    }
  });
  round-- 
}

console.log(matches);