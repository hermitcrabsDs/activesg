$('.cst-accor-well-item .cst-accordion-tab-grp').click(function(){
   $(this).parent().siblings().removeClass('acc-togg');
   $(this).parent().siblings().children('.cst-con-acc-grp').slideUp(300);
   $(this).parent().toggleClass('acc-togg');
   $(this).next().slideToggle(300);
});