let $mainContainer = $('.main-container');
let $main = $('#main');
let $mainArticles = $main.children();
let $navLinks = $('nav li a');

$mainArticles.hide();

$(document).mouseup(function(e) 
{
    var container = $($mainArticles);

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        $mainContainer.fadeIn();
    }
});

$($navLinks).on('click', function () {
    if($(this).text() === 'Work') {
        $('#work').show("slow");
        $('.main-container').slideUp();
        $('footer').hide();
    }
    if($(this).text() === 'Skills') {
        $('#skills').show("slow");
        $('.main-container').slideUp();
        $('footer').hide();
    }
    if($(this).text() === 'About') {
        $('#about').show("slow");
        $('.main-container').slideUp();
        $('footer').hide();
    }
    if($(this).text() === 'Contact') {
        $('#contact').show("slow");
        $('.main-container').slideUp();
        $('footer').hide();
    }
});