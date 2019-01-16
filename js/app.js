

/*FUNCION ANIMATION TITLE*/

$(function() {
  
  var $title = $('.title-wrapper'),
      $body  = $('body');
  
  // Insert duplicate directly on top to fake a
  // radial blur
  $title.clone().addClass('title-blurred').insertAfter($title);
  
  // Click to restart
  $body.bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
        
    $('html').one('click', function() {  
      
      $body.addClass('paused').removeClass('animate');
      $body[0].offsetHeight;
      $body.removeClass('paused').addClass('animate');
      
    });
  });
  
  // Logo/Level title toggle
  var $toggle = $('.toggle')
  
  $toggle.click(function(e) {
    
    e.preventDefault();
    
    $body.toggleClass('logo');
    redrawTitle();
  });
  
  var oldH2 = null,
      oldH1 = null;
  
  function redrawTitle() {
    
    if($body.hasClass('logo')) {
      
      oldH2 = $('h2').first().text();
      oldH1 = $('h1').first().text();
      
      setHeaders('Hitman', 'Absolution');
      
      $toggle.text('Toggle Level Title');
      
    } else {
      
      if(oldH2 !== null && oldH1 !== null) {
        
        setHeaders(oldH2, oldH1);
      }
      
      $toggle.text('Toggle Game Logo');
    }
  }
  
  function setHeaders(h2, h1) {
    
    $('h2').text(h2);
    $('h1').text(h1);
  }
  
  redrawTitle();
  
  // Execute contract!
  $body.addClass('animate');
  
});
/*FIN ANIMATION TITLE*/

/* inicio de  Scroll- section menu se torne granate*/

$(window).scroll(function () {
  if ($("#menu").offset().top > 160) {
    $("#menu").show("slow").addClass("granate");
  } else {
    $("#menu").removeClass("granate");
  }

}
)
/*funcion para que el hover  en fondo granate  sea blanco*/
$(window).scroll(function () {
  if ($("#caja").offset().top > 160) {
    $("#caja").show("slow").addClass("caja");
  } else {
    $("#caja").removeClass("caja");
  }

}
)
/*funcion para mostrar section oculta */

$(document).ready(function () {
  $("#more").on("click", function () {
    $('#display').show("slow"); //muestro mediante id
    $('.display').addClass("animation")
    $('.imagesImpacto').addClass('imagesEfect');
    $('#more').addClass('moreDisplay');

  });
  $("#hide").on("click", function () {
    $('#display').addClass("d-none").hide("slow"); //oculto mediante id
    $('#more').removeClass('moreDisplay');
  });
});


/*funicon de titulo impacto*/

var spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
  span.addEventListener('mouseover', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1))
});

//Ahijadas hover//

/*Pagina Life*/

/*iNTEGRANTES*/




