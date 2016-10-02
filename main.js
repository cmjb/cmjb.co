$(window).on('resize', function(){
    var win = $(this);
    $('#wrapper').height = win.height();
    $('#wrapper').width = win.width();
});

$(window).scroll(function() {
    if($(this).scrollTop() > 1)
    {
        $('.scroll-down').fadeOut(200);
        $('.sodoff').fadeOut(200);
    }
    else
    {
        $('.scroll-down').fadeIn(200);
        $('.sodoff').fadeIn(200);
    }
});

$(document).ready(function() {
    $('.project-sect').hide();
    $('.project-sect').opacity = 0;
    var once = 0;
    $(window).scroll(function() {
        var hT = $('.project-sect').offset().top,
            hH = $('.project-sect').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT-wH) , wS);
        if (wS > (hT+hH-wH)){
            if(once == 0) {
                //$('.project-sect').animate({width: 'toggle', opacity: 1}, 1350);
                $(".project-sect")
                    .css('opacity', 0)
                    .show("slide", {direction: "right"}, 1000)
                    .animate({opacity: 1}, {queue:false, duration: 4000});
                once++;
            }
        }
    });

    $("#anim-arrow").animate({
        opacity: 0,
        height: "toggle"
    }, 1500, function() {
        // Animation complete.
        $("#anim-arrow").animate({
            opacity: 1,
            height: "toggle"
        }, 1500, function() {
            // Animation complete.
            doAgain();
        });
    });
});


function doAgain()
{
    $("#anim-arrow").animate({
        opacity: 0,
        height: "toggle"
    }, 1500, function() {
        // Animation complete.
        $("#anim-arrow").animate({
            opacity: 1,
            height: "toggle"
        }, 1500, function() {
            // Animation complete.
            doAgain();
        });
    });
}

