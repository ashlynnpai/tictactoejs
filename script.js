for (var i=0; i<9; i++) {  
  mydiv = '<div class="eachsquare" id="square' + i + '"></div>';
  $('#board').append(mydiv);
  $('#square'+i).html('X');
}