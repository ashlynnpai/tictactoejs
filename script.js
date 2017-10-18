for (var i=0; i<9; i++) {  
  mydiv = '<h1 style="height: 50px; width: 50px; border-style: dotted solid;" id="square' + i + '"></h1>';
  $('#board').append(mydiv);
  $('#square'+i).html('X');
}