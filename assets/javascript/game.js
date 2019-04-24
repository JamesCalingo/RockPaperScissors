

var choices = ["Rock", "Paper", "Scissors"];
var random = Math.floor(Math.random() * 3);
var player;
var opponent;
var result;
var wins = 0;
var losses = 0;
var ties = 0

$(".btn").on("click", function(event){
  event.preventDefault();
  player = $(this).attr("data-attribute");
  opponent = choices[random]
  $("#playerChoice").html("You Chose: " + player);
  $("#opponentChoice").html("Your opponent chose: " + opponent)
  if(player === opponent){
    $("#result").html("You tied!")
    ties++
  }
  if(player === "Rock" && opponent === "Scissors"){
    $("#result").html("You won!")
    wins++
  }
  if(player === "Paper" && opponent === "Rock"){
    $("#result").html("You won!")
    wins++
  }
  if(player === "Scissors" && opponent === "Paper"){
    $("#result").html("You won!")
    wins++
  }
  if(player === "Rock" && opponent === "Paper"){
    $("#result").html("You lost!")
    losses++
  }
  if(player === "Paper" && opponent === "Scissors"){
    $("#result").html("You lost!")
    losses++
  }
  if(player === "Scissors" && opponent === "Rock"){
    $("#result").html("You lost!")
    losses++
  }
})

