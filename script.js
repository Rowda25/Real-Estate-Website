$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');
  
    $(document).ready(function(){
        $('#properties-slider').slick({
          infinite: true,           // Loop through the slides indefinitely
          slidesToShow: 1,          // Show 1 slide at a time
          slidesToScroll: 1,        // Scroll 1 slide at a time
          autoplay: true,           // Enable autoplay
          autoplaySpeed: 3000,      // Autoplay speed (3 seconds)
          dots: true,               // Show navigation dots
          arrows: true,             // Show next and previous arrows
          responsive: [
            {
              breakpoint: 768,      // For small screens (e.g., tablets, phones)
              settings: {
                slidesToShow: 1,    // Show 1 slide at a time
                slidesToScroll: 1
              }
            }
          ]
        });
      });
  
   $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
   });
  
   navToggle.on('click', () => {
       navMenu.css('right', '0');
   });
  
   $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
   });
  
   $(document).on('click', (e) => {
       let target = $(e.target);
       if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
           navMenu.css('right', '-100%');
       }
   });
  
   $(document).scroll(() => {
       let scrollTop = $(document).scrollTop();
  
       if (scrollTop > 0) {
           navMenu.addClass('is-sticky');
           logo.css('color', '#000');
           headerElem.css('background', '#fff');
           navToggle.css('border-color', '#000');
           navToggle.find('.strip').css('background-color', '#000');
       } else {
           navMenu.removeClass('is-sticky');
           logo.css('color', '#fff');
           headerElem.css('background', 'transparent');
           navToggle.css('bordre-color', '#fff');
           navToggle.find('.strip').css('background-color', '#fff');
       }
  
       headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
   });
  
   $(document).trigger('scroll');
  });
  