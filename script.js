for (var i=0; i<9; i++) {
  mydiv = '<div><h1 id="square' + i + '"></h1></div>';
  $('#board').append('<div><h1 id="square' + i + '"></div>');
  console.log(mydiv);
  $('#square'+i).html('X');
}