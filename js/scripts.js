/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

const btn = document.querySelector('.btn-toggle');
btn.addEventListener('click', function() {
   var element = document.getElementById("SearchQuery");
   element.classList.toggle("dark-theme");
   // var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   var newatt = document.createAttribute("style");
   newatt.value = 'background-color: #343a40 !important;';
   // Then toggle (add/remove) the .dark-theme class to the body
   document.body.classList.toggle('dark-theme');
});
const btn2 = document.getElementById('ToggleNightMode2');
btn2.addEventListener('click', function() {
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   var newatt = document.createAttribute("style");
   newatt.value = 'background-color: #343a40 !important;';
   document.body.classList.toggle('dark-theme');
});
       $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip(); 
       });
  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  })

})(jQuery); // End of use strict
