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
  10: [10, 10, 10],
};
//12 + 12 + 16= 40

/* el plan:

loop through each score
check for strike or spare
if not strike or spare just add the turns
if strike:
    recursively look for the next two turns
        if strike:
            recursive again
        if strike and is the last turn:
            return 10
        if it goes too far:
            return 0
        else:
            return the value
if spare:
    add 10 + next frame turn 1 

frame 10:
    i guess do a switch case or something idk

*/

function checkStrikeValue(history, frame, count) {
  // if (!count) {
  //     count = 1;
  // }

  // if (frame > Object.keys(history).length) {
  //     return 0;
  // }

  // if (history[frame][0] >= 10 && count <= 2) {
  //     return 10 + checkStrikeValue(history, frame + 1, count + 1);
  // }

  // return history[frame][0] + (history[frame][1] ? history[frame][1] : 0);

  if (frame == 10) {
    return history[frame][0] + (history[frame][1] ? history[frame][1] : 0);
  }

  if (frame > Object.keys(history).length) {
    return 0;
  }

  if (history[frame][0] >= 10) {
    if (frame + 1 > Object.keys(history).length) {
      return 10;
    }

    if (history[frame + 1][0] >= 10) {
      return 20;
    }
    return (
      10 +
      history[frame + 1][0] +
      (history[frame + 1][1] ? history[frame + 1][1] : 0)
    );
  }

  return history[frame][0] + history[frame][1];
}

function getScore(history) {
  let totalScore = 0;
  for (let frame = 1; frame <= 10; frame++) {
    console.log(totalScore);
    console.log("\n");

    if (frame == 10) {
      const turn1 = history[frame][0];
      const turn2 = history[frame][1];

      let accountForThirdTurn = false;

      if (turn1 == 10 || turn2 == 10) {
        accountForThirdTurn = true;
      }

      totalScore +=
        turn1 + turn2 + (accountForThirdTurn ? history[frame][2] : 0);

      break;
    }

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
