let $wrapper = $('#wrapper');
let $mainContainer = $('.main-container');
let $main = $('#main');
let $mainArticles = $main.children();
let $navLinks = $('nav li a');

// fade in content
document.addEventListener("DOMContentLoaded", function (e) {
    document.body.className = 'fade';
});

$(document).mouseup(function(e) 
{
    var container = $($mainArticles);

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        $mainContainer.fadeIn();
        $('footer').fadeIn();
    }
});

$($navLinks).on('click', function () {
    if($(this).text() === 'Work') {
        $main.addClass('show');
        $('#work').fadeIn();
        $mainContainer.hide();
        $('footer').hide();
    }
    if($(this).text() === 'Skills') {
        $main.addClass('show');
        $('#skills').fadeIn();
        $('.main-container').hide();
        $('footer').hide();
    }
    if($(this).text() === 'About') {
        $main.addClass('show');
        $('#about').fadeIn();
        $('.main-container').hide();
        $('footer').hide();
    }
    if($(this).text() === 'Contact') {
        $main.addClass('show');
        $('#contact').fadeIn();
        $('.main-container').hide();
        $('footer').hide();
    }
});