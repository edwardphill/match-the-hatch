// generate a random number to be matched

var randomNumber = Math.floor(Math.random() * 100 + 1);
var caddis = Math.floor(Math.random() * 10 + 1);
var olive = Math.floor(Math.random() * 10 + 1);
var wooly = Math.floor(Math.random() * 10 + 1);
var tail = Math.floor(Math.random() * 10 + 1);
var wins;
var losses;
var totalScore;

// display that random number to <div class="scoreboard..."></div> (push)

$("#score").html(randomNumber);

// display wins to <id="wins">

$("#wins").html(wins);

// start showing 0

// display losses <id=#losses">

$("#losses").html(losses);

// start showing 0

// assign random value to 4 flies
// create an array of elkhair bwo, wb, pt and loop through that array to generate a random number for each html elemnts

// $("#elkHairCaddis").html(caddis);
console.log(caddis);
// $("#blueWingedOlive").html(olive);
console.log(olive);
// $("#woolyBugger").html(wooly);
console.log(wooly);
// $("#pheasantTail").html(tail);
console.log(tail);

// if click fly 1 add value to total score, add event listener click()

// if I click elkhaircaddis, add the caddis value to id=totalScore

// provide with funtion to increment score to .click()

/*function increaseScore() {
    if (click)
}*/

$("#elkHairCaddis").on("click", function() {
  $("#totalScore").html(caddis);
  console.log("click");
});

// if you click fly 2 add value to total score, add event listener click()

$("#blueWingedOlive").on("click", function() {
  $("#totalScore").html(olive);
  console.log("click");
});

// if click fly 3 add value to total score, add event listener click()
$("#woolyBugger").on("click", function() {
  $("#totalScore").html(wooly);
  console.log("click");
});
// if click fly 4 add value to total score, add event listener click()
$("#pheasantTail").on("click", function() {
  $("#totalScore").html(tail);
  console.log("click");
});

// if score is greater than random number, you lose, write loss to Losses <p>

/* if ("#score" > i) {
  alert("you lose!");
} */

// if score = random number, you win, write win to Win <p>

// if win OR lose, randomize number again and randomize flies
