$(document).scroll(function () {
    console.log($(document).scrollTop());
});


// Tags toggle style
$(".lineTags").delegate('p', 'click', function () {
    $(this).toggleClass('selectedTag');
});