$(document).ready(function(){

   $('ul.tabs > li.tab-link').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs > li.tab-link').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
   });
   $('ul.tabs2 > li.tab-links').click(function(){
      var tabber_id = $(this).attr('data-target');

      $('ul.tabs2 > li.tab-links').removeClass('active');
      $('.tabb-content').removeClass('active');

      $(this).addClass('active');
      $("#"+tabber_id).addClass('active');
   });

})