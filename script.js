/************ Forms toggle visible ************/
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

/************ Tags toggle style ************/
$('.lineTags').delegate('p', 'click', function () {
    $(this).toggleClass('selectedTag');
});

/************ Phone1 toggle anim + play ************/
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

/************ Connect messages anim  ************/
window.addEventListener('scroll', receiveMessage);
function receiveMessage() {

    const messages = document.querySelectorAll('#messages div');
    const messagesParent = document.getElementById('messages');

    const windowheight = window.innerHeight;
    const revealfromtopimg = messagesParent.getBoundingClientRect().top;
    const revealpoint = 200;


    if (revealfromtopimg < windowheight - revealpoint) {
        messages[0].classList.add('messOnScreen');
        messages[0].classList.remove('messNotOnScreen');
        setTimeout(function () {
            messages[1].classList.add('messOnScreen');
            messages[1].classList.remove('messNotOnScreen');
            setTimeout(function () {
                messages[2].classList.add('messOnScreen');
                messages[2].classList.remove('messNotOnScreen');
            }, 250);
        }, 250);
    }

}

/************ Connect icon anim ************/
window.addEventListener('scroll', revealCircleIcon);
function revealCircleIcon() {

    const iconfind = document.getElementById('connectIcon');

    const windowheight = window.innerHeight;
    const revealfromtopimg = iconfind.getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealfromtopimg < windowheight - revealpoint) {
        iconfind.classList.add('iconOnScreen');
        iconfind.classList.remove('iconNotOnScreen');
    }
}

/************ Phone2 toggle anim + play ************/
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

/************ Find img anim ************/
window.addEventListener('scroll', reveal);
function reveal() {
    const revealfind = document.getElementById('find1');
    const revealfind2 = document.getElementById('find2');
    const revealfind3 = document.getElementById('find3');

    const windowheight = window.innerHeight;
    const revealfromtop = revealfind.getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealfromtop < windowheight - revealpoint) {
        revealfind.classList.add('active');
        revealfind2.classList.add('active2');
        revealfind3.classList.add('active3');
        // imgstatfind.classList.add('activeimg'); 
    } else {

    }
}

/************ Stat img anim ************/
window.addEventListener('scroll', revealimg);
function revealimg() {
    const imgstatfind = document.getElementById('imgstat');

    const windowheight = window.innerHeight;
    const revealfromtopimg = imgstatfind.getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealfromtopimg < windowheight - revealpoint) {
        imgstatfind.classList.add('activeimg');
    }

}

/************ Test icon anim ************/
window.addEventListener('scroll', revealsquare);
function revealsquare() {
    const squarefind = document.getElementById('squaresplitch');

    const windowheight = window.innerHeight;
    const revealfromtopimg = squarefind.getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealfromtopimg < windowheight - revealpoint) {
        squarefind.classList.add('squareactive');
    }

}

/************ Meet paralax img anim ************/
window.addEventListener('scroll', parralax);
function parralax() {

    let coeurs = document.getElementById('coeurs');
    let question4 = document.getElementById('question4');
    let doigts = document.getElementById('doigts');
    let sourire = document.getElementById('sourire');

    let actualScrollPos = window.scrollY;
    sourire.style.top = 75 + actualScrollPos * -0.1 + '%';
    sourire.style.left = 2 + actualScrollPos * -0.02 + '%';

    coeurs.style.top = 40 + actualScrollPos * -0.1 + '%';
    coeurs.style.right = actualScrollPos * -0.02 + '%';

    question4.style.top = 75 + actualScrollPos * -0.08 + '%';
    question4.style.right = 5 + actualScrollPos * -0.1 + '%';

    doigts.style.top = 30 + actualScrollPos * -0.1 + '%';
    doigts.style.right = 10 + actualScrollPos * -0.02 + '%';

}

// console.log($(window).innerHeight());
// console.log($('#phoneVideo').position().bottom);
// console.log($('#phoneVideo').height());
