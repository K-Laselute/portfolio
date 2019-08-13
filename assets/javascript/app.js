let $mainContainer = $('.main-container');
let $main = $('#main');
let $mainArticles = $main.children();
let $navLinks = $('nav li a');

$mainArticles.hide();

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