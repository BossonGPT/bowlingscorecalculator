//const log = [10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const log = {
  1: [10],
  2: [10],
  3: [10],
  4: [10],
  5: [10],
  6: [10],
  7: [10],
  8: [10],
  9: [10],
  10: [10],
};
//12 + 12 + 16= 40

/* el plan:

loop through each score

*/

function checkStrikeValue(history, frame, count) {
  if (!count) {
    count = 1;
  }

  console.log(history[frame], "asdasdasda");

  if (count >= 2 || history[frame][0] == undefined) {
    return 10;
  }

  if (history[frame].at(0) >= 10) {
    return 10 + checkStrikeValue(history, frame + 1, count + 1);
  }

  return history[frame][0] + history[frame][1];
}

function getScore(history) {
  let totalScore = 0;
  for (let frame = 1; frame <= 10; frame++) {
    console.log(totalScore);
    console.log("\n");

    const turn1 = history[frame][0];
    const turn2 = history[frame][1];

    console.log(frame, turn1, turn2);

    if (turn1 >= 10) {
      console.log("strike");
      totalScore += checkStrikeValue(history, frame + 1) + 10;
      continue;
    }

    if (turn1 + turn2 >= 10) {
      console.log("spare");
      totalScore += 10 + history[frame + 1][0];
      continue;
    }

    totalScore += turn1 + turn2;
  }

  return totalScore;
}

console.log(getScore(log));
