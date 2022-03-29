"use strict";

$(document).ready(function() {

  $('.gaugeWrap').waypoint(function() {
    $('.gaugeWrap').addClass('is-animated');

      gaugeChart();
  }, {
    offset: '80%'
  });


  $('.goTop button').click(function() {
   $('body,html').stop().animate({ 'scrollTop' : 0 }, 1000, 'easeOutExpo');

  });

  // counter
  if($('._counter').length) $('._counter').yCounter({runTime:1000,delay:0});


  $('.modalNav ul li a').click(function() {
      $('header').removeClass('open');
      $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top }, 1000,'easeOutExpo');

  });


});;



/* reset */
$(window).on('load resize', function(){

let offset;

    $(function(){

       let win_height = $(window).height();
        if( $(window).width() + 20 > 991 ) {
            $('.page').height(win_height);
            $('.portfolio ul li').css('margin-bottom',30)
            $('.page').each(function( index ) {
               $(this).attr('data-offset', win_height * ($(this).index() - 1 ) );

               $('.goTop button').click(function() {
                $('body,html').stop().animate({ 'scrollTop' : 0 }, 1000, 'easeOutExpo');
                $('.goTop').hide()
               });
            });
            if( $(window).height() < 720 ){

                  $('.page').height(720);
                  $('.page').each(function( index ) {
                    $(this).attr('data-offset', 720 * ($(this).index() - 1 ) );
                  });


            }

            }else {
                $('.goTop').show();

                 let max_h=0;

                  $(".portfolio ul li").each(function(){
                  let h = parseInt($(this).find('.inner').innerHeight());
                     if(max_h<h){ max_h = h; }
                    });
                  $(".portfolio ul li").each(function(){
                    $(this).css({marginBottom:max_h});
                    });

            }
    });

});


/* modal */
$(function(){

    /* button */
    $('.topBtn').click(function(){
        var $header = $('header');
        if( $header.hasClass('open') ){
            $header.removeClass('open');
        }else{
            $header.addClass('open');
        };
    });
});


	$(function () {


	    $('.page').mousewheel(function (e, delta) {
	        if( $(window).width() > 991 ) {
	            if (delta > 0) {
                 let $prevPage = $(this).prev();
	               let up = $prevPage.attr('data-offset');

                 if(up==0){
                   $('.goTop').fadeOut();

                 }else  $('.goTop').fadeIn();
	               $('body,html').stop().animate({ 'scrollTop' : up }, 1200, 'easeOutExpo');


                 if( $prevPage.hasClass('first') ){
                     $('header').addClass('white');
                 }else{
                     $('header').removeClass('white');
                    if(up==undefined) $('header').addClass('white');
                 }

	            } else if (delta < 0) {

                 let $nextPage = $(this).next();
	               let down = $nextPage.attr('data-offset');
                 if(down==0){
                   $('.goTop').fadeOut();
                 }else  $('.goTop').fadeIn();


	               $('body,html').stop().animate({ 'scrollTop' : down }, 1200, 'easeOutExpo');

                 if( $nextPage.hasClass('last') ){
                     $('header').addClass('white');
                 }else{
                     $('header').removeClass('white');
                     if(down==undefined) $('header').addClass('white');

                 }


	            }

	        }
	    });
	});



  /* circle graph */
  function gaugeChart(){
    $('svg.radial-progress').each(function( index, value ) {
      let $this = $(this);
      let className = '.gaugeChartSeg';
      let percent = $(value).attr('data-score');
      Array.prototype.forEach.call(document.querySelectorAll(className), function(path){
      let strokeOffset =  $this.find('.gaugeChartSeg').attr('stroke-dashoffset')
        , pathSize 	 = path.getTotalLength()
        , division 	 = 100/percent
        , moveTo 	 	 = strokeOffset;
      if(percent > 0) moveTo = strokeOffset - pathSize/division;
        $this.find('.gaugeChartSeg').css('stroke-dashoffset', moveTo);


    });
  });
}
