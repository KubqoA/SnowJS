jQuery(document).ready(function ($) {
    var stop = false;
    var width = $(window).width();
    var height = $(window).height();
    var interval = 100;
    var startw = 0;
    var delay = 0;
    var fadeTime = 0;
    var b=0;

    //Flakes swing animation
    function swing(defaultWidth, element) {
        for(var i=0; i<6; i++) {
            $(element).animate({'left': defaultWidth-4},249).animate({'left': defaultWidth},249).animate({'left': defaultWidth+4},249).animate({'left': defaultWidth},249);
        }
    }

    //Handler function
    function snow() {
        if (stop) {
            return false;
        } else { //Else start snow
            var randomTime = 100 + Math.floor(Math.random() * interval);
            setTimeout(function() { //Generate one flake and after randomTime generate another
                one();
                snow();
            }, randomTime);
        }

    }

    var one = function() { //Creates one flake
            startw = 0 + Math.floor(Math.random() * width-18);
            var element = $('<div class="flake"></div>');
            element.appendTo($("body"));
            $(element).css('left', startw + 'px');
            $(element).animate({
                'top': height - 18
            }, {
                duration: 6000,
                easing: 'linear',
                queue: false
            });
            swing(startw, element);
            $(element).fadeOut(1000, function() {
                $(this).remove().detach();
            });
    };

    snow();

    $.fn.toggleSnow = function() {
        if(stop) {stop=false; snow();}
        else if(!stop) {stop=true;}
    };
});
