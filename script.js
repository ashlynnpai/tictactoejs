var state;

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



