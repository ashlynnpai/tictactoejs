var state;
var playerMove = [];
WINS = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

for (var i=0; i<9; i++) {  
  mydiv = '<div class="eachsquare" id="square' + i + '"></div>';
  $('#board').append(mydiv);
}

$('.eachsquare').click(function() {
  if (state != 1) {
    $(this).html('X');
  }
  state = 1;
})

function checkWins() {
  var count = 0;
    for (var i=0; i<WINS.length; i++) {
      for (var j=0; j<WINS[i].length; j++) {  
        if (playerMove.includes(WINS[i][j])) {
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


