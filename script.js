$(document).scroll(function () {
    //console.log($(document).scrollTop());
});

// Forms toggle visible
$('#meetButton').click(function (e) {
    e.preventDefault();
    $('#meetForm').toggleClass('none');
    $(this).parent().toggleClass('none');
    setTimeout(function(){
        $('#meetForm>*').toggleClass('max');
    },5); 
});

$('#testButton').click(function (e) {
    e.preventDefault();
    $('#testForm').toggleClass('none');
    $(this).parent().toggleClass('none');
    setTimeout(function(){
        $('#testForm>*').toggleClass('max');
    },5); 
});

// Tags toggle style
$('.lineTags').delegate('p', 'click', function () {
    $(this).toggleClass('selectedTag');
});