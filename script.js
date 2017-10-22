var state;
var playerMove = [];
var computerMove = [];
var piece;
var computerPiece;
WINS = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

$( document ).ready(function() {
  startGame();
  $('.eachsquare').click(function(){
  if (state == 0) {
    $(this).html(piece);
    if (piece = 'X') {
      computerPiece = 'O';
    }
    else {
      computerPiece = 'X';
    }
    var num = parseInt(this.id.slice(-1));
    playerMove.push(num);
    checkWins(playerMove);
    state = 1;
    setTimeout(function() {
      computerTurn();
      }, 3000);
    checkWins(computerMove);
  }
  });
});

function checkWins(arr) {
  var count = 0;
  for (var i=0; i<WINS.length; i++) {
    for (var j=0; j<WINS[i].length; j++) {  
      if (arr.includes(WINS[i][j])) {
        count++;
      }
    }
    if (count == 3) {
      console.log("win");
    }
    else {
      count = 0;
    }
  }
};
  
function computerTurn() {
  var computerOrder = [5, 1, 9, 3, 7, 2, 4, 6, 8];
  console.log(playerMove);
  for (var i=0; i<computerOrder.length; i++) {
    if (!playerMove.includes(computerOrder[i]) &&  !computerMove.includes(computerOrder[i])) 
    {
      computerMove.push(computerOrder[i]);
      console.log(computerOrder[i]);
      $('#square' + [computerOrder[i]]).html("O");
      break;
    }
  }
  state = 0;
}
