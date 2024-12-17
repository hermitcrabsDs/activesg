$('.menu_trigger').click(function(){
   $('.custom-menu-primary').slideToggle();
});

$(".menu-child-toggle").click(function() {
   $(this).parent().siblings(".menu-item--has-submenu").find(".menu-child-toggle").removeClass("child-open")
   $(this).parent().siblings(".menu-item--has-submenu").find(".menu-submenu").slideUp()
   $(this).next(".menu-submenu").slideToggle()
   $(this).next(".menu-submenu").children(".menu-item--has-submenu").find(".menu-submenu").slideUp()
   $(this).next(".menu-submenu").children(".menu-item--has-submenu").find(".menu-child-toggle").removeClass("child-open")
   $(this).toggleClass("child-open")
});
AOS.init({
   duration: 1200,
})

$('.searchButton').click(function(){
   $('.searchDesktop').toggleClass('active')
})

$(window).load(function(){
   $('body').addClass('show-body');
}); 


$(function() {
   $('.header_buttons .button_wrapper a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
            $('html,body').animate({
               scrollTop: target.offset().top 
            }, 1000);
            return false;
         }
      }
   });
});   

