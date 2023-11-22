// code for RPS
alert("welcome to Rock Paper Scissors!!!");
var move = ["r", "p", "s"];

// var computerChoice = move[Math.floor(3 * Math.random())];

var userStats = {
  wins: 0,
  ties: 0,
  losses: 0,
};

var playAgain = true;

while (playAgain === true) {
  var userChoice = prompt("choose your move (r, p, or s)");
  var computerChoice = move[Math.floor(3 * Math.random())];
  if (userChoice === computerChoice) {
    alert("System chooses...  " + computerChoice + ",  Tie!");
    userStats.ties++;
  } else if (userChoice === "r" && computerChoice === "s") {
    alert("system chooses...  " + computerChoice + ",  You Win!");
    userStats.wins++;
  } else if (userChoice === "p" && computerChoice === "r") {
    alert("system chooses...  " + computerChoice + ",  You Win!");
    userStats.wins++;
  } else if (userChoice === "s" && computerChoice === "p") {
    alert("system chooses...  " + computerChoice + ",  You Win!");
    userStats.wins++;
  } else if (userChoice === "r" && computerChoice === "p") {
    alert("system chooses...  " + computerChoice + ",  You Loose");
    userStats.losses++;
  } else if (userChoice === "p" && computerChoice === "s") {
    alert("system chooses...  " + computerChoice + ",  You Loose");
    userStats.losses++;
  } else if (userChoice === "s" && computerChoice === "r") {
    alert("system chooses...  " + computerChoice + ",  You Loose");
    userStats.losses++;
  }
  alert(
    " wins: " +
      userStats.wins +
      " losses: " +
      userStats.losses +
      " Ties: " +
      userStats.ties
  );
  playAgain = confirm("play again?");
}
