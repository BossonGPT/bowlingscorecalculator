const log = [10, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//11 + 11 + 12 + 16= 30

/* el plan:

loop through each score

*/

function getScore(history) {
  let totalScore = 0;
  for (let frame = 1; frame <= 10; frame++) {
    const turn1 = history[frame * 2 - 2];
    const turn2 = history[frame * 2 - 1];
    console.log(turn1, turn2);

    if (turn1 >= 10) {
      totalScore += turn2 + history[frame * 2] + 10;
      if (history[frame * 2 + 1] >= 10) {
        totalScore += history[frame * 2 + 2];
      }
      continue;
    }

    if (turn1 + turn2 >= 10) {
      totalScore += 10 + history[frame * 2];
      continue;
    }

    totalScore += turn1 + turn2;
  }

  return totalScore;
}

console.log(getScore(log));
