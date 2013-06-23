/* Big Top Avatar */
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


/* Input Helpers */
$(document).ready(function(){	
	$('input, textarea').focus(function(){
	    var elm = $(this),
	        value = elm.val(),
	        old = elm.data("placeholder");       
	    if (typeof old === "undefined"){
	        elm.data("placeholder", value);
	        old = value;
	    }
	    if (old == value){
	        elm.val("");
	    }
	}).blur(function() {
	    var elm = $(this);
	    if(elm.val() == ""){
	        elm.val(elm.data("placeholder"));
	    }
	});
});

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