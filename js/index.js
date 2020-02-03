  
$(document).ready(()=>{

  

 


  
  //scroll suave até as respectivas sessões
  $('.scroll').on('click', function(e) {
    
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset 
    }, 900);
  });


  $('.scroll1').on('click', function(e) {
    
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset 
    }, 900);
  });


  $('.scroll2').on('click', function(e) {
    
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset 
    }, 900);
  });

  $('.cnt').on('click', function(e) {
    e.preventDefault();
    var scroll = $('#sec3'),
        targetOffset = $(scroll).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset 
    }, 900);
  });



//slide carousel
$(".regular").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 0,
        slidesToScroll: 0
      }
    }
  ]
});

$(window).on('resize', function() {
  $('.regular').slick('resize');
});







})
