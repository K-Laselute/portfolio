let $work = $('#work');
let $skills = $('#skills');
let $about = $('#about');
let $contact = $('#contact');

$($work).hide();
$($skills).hide();
$($about).hide();
$($contact).hide();

let $navLinks = $('nav li a');

$($navLinks).on('click', function () {
    if($(this).text() === 'Work') {
        $work.show("slow");
        $('.main-container').hide();
    }
});