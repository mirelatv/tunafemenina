var words = [
  'ABA',
  'ABACATE',
  'ABACATEIRO',
  'ABACAXI',
  'ABACO',
  'ABADE',
  'ABADESSA'
]

function randomWord() {
  var randWord = words[Math.floor(Math.random() * words.length)];
  return $('#result').text(randWord);
}

// Generate first random word
randomWord();

// When KeyDown
$(document).bind('keydown', function() {
  $('#result').addClass('active');
});

// When KeyUp
$(document).bind('keyup', function() {
  $('#result').removeClass('active');
  randomWord();
});

// When ClickDown
$('#result').bind('mousedown', function() {
  $('#result').addClass('active');
});

// When ClickUp
$('#result').bind('mouseup', function() {
  $('#result').removeClass('active');
  randomWord();
});

// Change Color
$('#changecolor').click(function() {
  $('#container').toggleClass('black', 'white');
  $('#changecolor').toggleClass('cblack', 'cwhite');
  $(this).blur();
});