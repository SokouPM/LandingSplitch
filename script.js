//////////// Forms toggle visible ////////////
$('#meetButton').click(function (e) {
    e.preventDefault();
    $('#meetForm').toggleClass('none');
    $(this).parent().toggleClass('none');
    setTimeout(function () {
        $('#meetForm>*').toggleClass('max');
    }, 5);
});

$('#testButton').click(function (e) {
    e.preventDefault();
    $('#testForm').toggleClass('none');
    $(this).parent().toggleClass('none');
    setTimeout(function () {
        $('#testForm>*').toggleClass('max');
    }, 5);
});

//////////// Tags toggle style ////////////
$('.lineTags').delegate('p', 'click', function () {
    $(this).toggleClass('selectedTag');
});

//////////// Phone1 toggle anim + play ////////////
$(document).scroll(function () {

    const screenHeight = $(window).innerHeight();
    let reveal = $('#phoneVideo')[0].getBoundingClientRect().bottom;

    if (reveal < screenHeight / 4 || reveal > screenHeight * 1.5) {
        $('#phoneVideo').removeClass('phone1OnScreen');
        $('#phoneVideo').addClass('phone1NotOnScreen');
        setTimeout(function () {
            $('#phoneVideo>video').trigger('pause');
        }, 1000);
    } else {
        $('#phoneVideo').removeClass('phone1NotOnScreen');
        $('#phoneVideo').addClass('phone1OnScreen');
        setTimeout(function () {
            $('#phoneVideo>video').trigger('play');
        }, 1000);
    }
});

//////////// Phone2 toggle anim + play ////////////
$(document).scroll(function () {

    const screenHeight = $(window).innerHeight();
    let reveal = $('#phoneVideo2')[0].getBoundingClientRect().bottom;

    if (reveal < screenHeight / 4 || reveal > screenHeight * 1.5) {
        $('#phoneVideo2').removeClass('phone2OnScreen');
        $('#phoneVideo2').addClass('phone2NotOnScreen');
        setTimeout(function () {
            $('#phoneVideo2>video').trigger('pause');
        }, 1000);
    } else {
        $('#phoneVideo2').removeClass('phone2NotOnScreen');
        $('#phoneVideo2').addClass('phone2OnScreen');
        setTimeout(function () {
            $('#phoneVideo2>video').trigger('play');
        }, 1000);
    }
});

//////////// Connect messages anim ////////////
$(document).scroll(function () {

    let screenPositionTop = $(document).scrollTop();
    let screenPositionBottom = $(document).scrollTop() + $(window).innerHeight();


    //let reveal = $('#messages').position().top;

    console.log('ScrollTop : ' + screenPositionTop);
    console.log('ScrollBottom : ' + screenPositionBottom);

    // const screenHeight = $(window).innerHeight();
    // let reveal = $('#messages')[0].getBoundingClientRect().top;
    // let messTab = $('#messages>*');

    // if (reveal < screenHeight + (screenHeight / 10)) {
    //     messTab.each(function (i) {
    //         setTimeout(function () {
    //             console.log("ok")
    //             $(this).addClass("messOnScreen");
    //             $(this).removeClass("messNotOnScreen");
    //         }, 500);
    //     });
    // } else {

    // }
})
// console.log($(window).innerHeight());
// console.log($('#phoneVideo').position().bottom);
// console.log($('#phoneVideo').height());
