/* 
	Website Name: Claws - Tom Claus	
	Website URL: http://tomclaus.be - http://claws.be;
	Author: Tom Claus
	Author URI: http://tomclaus.be
	Version: 1.0
*/

/* My fancy Avatar */
$(document).ready(function() {		
	$(".avatar-wink").hover(
		function(){hover=true;},
		function(){hover=false}
	);
	$('.avatar-happy').hover(
		function(){$('.avatar').css('background-position','-422px 0px')},
		function(){$('.avatar').css('background-position','0px 0px')}
	);
	$('.avatar-surprised').hover(
		function(){$('.avatar').css('background-position','-633px 0px')},
		function(){$('.avatar').css('background-position','0px 0px')}
	);
	$('.avatar-wink').hover(
		function(){$('.avatar').css('background-position','-844px 0px')},
		function(){$('.avatar').css('background-position','0px 0px')}
	);
	$('.avatar-brow').hover(
		function(){$('.avatar').css('background-position','-1055px 0px')},
		function(){$('.avatar').css('background-position','0px 0px')}
	);
	$('.avatar-cross').hover(
		function(){$('.avatar').css('background-position','-1266px 0px')},
		function(){$('.avatar').css('background-position','0px 0px')}
	);
	// Make the avatar blink
	hover = false;
	closeEyes();
});
function closeEyes(){
	if(hover == false){
		$('.avatar').css('background-position','-211px 0px');
	}
	setTimeout('openEyes()',500);
}
function openEyes(){
	if(hover == false){
		$('.avatar').css('background-position','0px 0px');
	}
	setTimeout('closeEyes()',6000);
}

/* Smooth Scoll */
$(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 700);
                return false;
            }
        }
    });
});