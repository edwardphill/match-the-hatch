// generate a random number to be matched

var targetNumber = Math.floor(Math.random() * 100 + 1);
var caddis = Math.floor(Math.random() * 10 + 1);
var olive = Math.floor(Math.random() * 10 + 1);
var wooly = Math.floor(Math.random() * 10 + 1);
var tail = Math.floor(Math.random() * 10 + 1);
var wins = 0;
var losses = 0;
var totalScore = 0;

function gamePlay() {
  if (totalScore === targetNumber) {
    wins++;
    $("#wins").text(wins);
    alert("You matched the hatch and caught the fish!");
    $("#score").text(Math.floor(Math.random() * 100 + 1));
    totalScore = 0;

    // caddis / all vars reset, total score = 0
  } else if (totalScore > targetNumber) {
    losses++;
    $("#losses").text(losses);
    alert("Ah, dang! You spooked the fish with the wrong fly combination.");
    $("#score").text(Math.floor(Math.random() * 100 + 1));

    totalScore = 0;
  }
}

// display that random number to <div class="scoreboard..."></div> (push)

$("#score").html(targetNumber);

// display wins to <id="wins">

$("#wins").html(wins);

// start showing 0

// display losses <id=#losses">

$("#losses").html(losses);

// start showing 0

// assign random value to 4 flies
// create an array of elkhair bwo, wb, pt and loop through that array to generate a random number for each html elemnts

// $("#elkHairCaddis").html(caddis);
console.log("caddis", caddis);
// $("#blueWingedOlive").html(olive);
console.log("olive", olive);
// $("#woolyBugger").html(wooly);
console.log("wooly", wooly);
// $("#pheasantTail").html(tail);
console.log("tail", tail);

// if click fly 1 add value to total score, add event listener click()

/* $("#elkHairCaddis").on("click", function() {
  $("#totalScore").html(caddis);
});
*/
// provide with funtion to increment score to .click()

/*
$("#elkHairCaddis").on("click", function() {
  $("#totalScore").html(totalScore + caddis);
  console.log(totalScore + caddis);
});

*/

$("#elkHairCaddis").on("click", function() {
  totalScore += caddis;
  $("#totalScore").html(totalScore);
  console.log(totalScore);
  gamePlay();
});

// save that score
// then add the next click value to the value of the saved score
// add the sum of all clicks to the totalScore id

// if you click fly 2 add value to total score, add event listener click()

$("#blueWingedOlive").on("click", function() {
  totalScore += olive;
  $("#totalScore").html(totalScore);
  console.log(totalScore);
  gamePlay();
});

// if click fly 3 add value to total score, add event listener click()
$("#woolyBugger").on("click", function() {
  totalScore += wooly;
  $("#totalScore").html(totalScore);
  console.log(totalScore);
  gamePlay();
});

// if click fly 4 add value to total score, add event listener click()
$("#pheasantTail").on("click", function() {
  totalScore += tail;
  $("#totalScore").html(totalScore);
  console.log(totalScore);
  gamePlay();
});

// if score is greater than random number, you lose, write loss to Losses <p>

/* if ("#score" > i) {
  alert("you lose!");
} */

// if score = random number, you win, write win to Win <p>

// if win OR lose, randomize number again and randomize flies

// document.location.reload();
// else (totalScore > targetNumber) {
//console.log("Aw, shucks. You spooked the fish! Try again on the next fish.");
//$("#losses").html(losses + 1);}

// document.location.reload()
