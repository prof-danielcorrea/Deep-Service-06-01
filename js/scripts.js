$( document ).ready(function() {

 

  // Parallax


  
  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
  $('.parallax-container').parallax({imageSrc: 'img/parallax.jpg'});
  
  }, 200);

  // Filtro portfólio

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções

  // let navBtn = $('.nav-item');

  
  // let contactSection = $('#contact-area');

  // let scrollTo = '';

  // $(navBtn).click(function() {

  // let btnId = $(this).attr('id');

  //    if(btnId == 'contact-menu') {
  //      scrollTo = contactSection;
  //    } 
  

  // $([document.documentElement, document.body]).animate({
  //        scrollTop: $(scrollTo).offset().top - 70
  //    }, 1500);
  //  });

});
 


