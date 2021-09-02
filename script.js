/************ Forms toggle visible ************/
$('#meetButton').click(function (e) {
    e.preventDefault();
    $('#meetForm').toggleClass('none');
    $(this).parent().toggleClass('none');
    setTimeout(function () {
        $('#meetForm').toggleClass('formApper');
    }, 5);
});

$('#testButton').click(function (e) {
    e.preventDefault();
    $('#testForm').toggleClass('none');
    $(this).parent().toggleClass('none');
    setTimeout(function () {
        $('#testForm').toggleClass('formApper');
    }, 5);
});

/************ Tags toggle style ************/
$('.circleTags').delegate('p', 'click', function () {
    $(this).toggleClass('selectedTag');
});

/************ Meet paralax img anim ************/
$(document).ready(function () {
    setTimeout(function () {
        $('.imgpara').removeClass("imgParaNotVisible").addClass("imgParaEnter");
        $('.imgparaleft').removeClass("imgParaNotVisible").addClass("imgParaEnterleft");
    }, 500);
});

window.addEventListener('scroll', parralax);
function parralax() {

    let coeurs = document.getElementById('coeurs');
    let question4 = document.getElementById('question4');
    let doigts = document.getElementById('doigts');
    let sourire = document.getElementById('sourire');

    let actualScrollPos = window.scrollY;

    if (window.screen.width > 1220) {
        sourire.style.top = 75 + actualScrollPos * -0.1 + '%';
        sourire.style.left = 2 + actualScrollPos * -0.02 + '%';

        coeurs.style.top = 40 + actualScrollPos * -0.1 + '%';
        coeurs.style.right = -2 + actualScrollPos * -0.02 + '%';

        question4.style.top = 75 + actualScrollPos * -0.08 + '%';
        question4.style.right = 5 + actualScrollPos * -0.1 + '%';

        doigts.style.top = 30 + actualScrollPos * -0.1 + '%';
        doigts.style.right = 10 + actualScrollPos * -0.02 + '%';

    } else if (window.screen.width <= 1220 && window.screen.width > 965) {

        sourire.style.top = 75 + actualScrollPos * -0.1 + '%';
        sourire.style.left = 2 + actualScrollPos * -0.02 + '%';

        coeurs.style.top = 45 + actualScrollPos * -0.1 + '%';
        coeurs.style.right = -2 + actualScrollPos * -0.02 + '%';

        question4.style.top = 75 + actualScrollPos * -0.08 + '%';
        question4.style.right = 5 + actualScrollPos * -0.1 + '%';

        doigts.style.top = 25 + actualScrollPos * -0.1 + '%';
        doigts.style.right = 5 + actualScrollPos * -0.02 + '%';

    } else {

        sourire.style.top = 44 + actualScrollPos * -0.1 + '%';
        sourire.style.left = 0 + actualScrollPos * -0.02 + '%';

        coeurs.style.top = 32 + actualScrollPos * -0.1 + '%';
        coeurs.style.right = 0 + actualScrollPos * -0.02 + '%';

        question4.style.top = 25 + actualScrollPos * -0.08 + '%';
        question4.style.right = 3 + actualScrollPos * -0.1 + '%';

        doigts.style.top = 10 + actualScrollPos * -0.1 + '%';
        doigts.style.right = 10 + actualScrollPos * -0.02 + '%';
    }


}

/************ Phone1 toggle anim + play ************/
$(document).scroll(function () {

    const screenHeight = $(window).innerHeight();
    let revealFromTop = $('#phoneVideo')[0].getBoundingClientRect().top;
    let revealFromBottom = $('#phoneVideo')[0].getBoundingClientRect().bottom;

    if (window.screen.width > 965) {
        var revealpoint = 150;
    } else {
        var revealpoint = -200;
    }

    if (revealFromBottom > revealpoint) {
        $('#phoneVideo').removeClass('phone1NotOnScreen');
        $('#phoneVideo').addClass('phone1OnScreen');
        setTimeout(function () {
            $('#phoneVideo>video').trigger('play');
        }, 1000);
    } else {
        $('#phoneVideo').removeClass('phone1OnScreen');
        $('#phoneVideo').addClass('phone1NotOnScreen');
        setTimeout(function () {
            $('#phoneVideo>video').trigger('pause');
        }, 1000);
    }
});

/************ Slide anim ************/
// $(document).ready(function () {
//     $('#shareSlider').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1180,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 965,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ]
//     });
// });

/************ Slide background anim ************/
$(document).scroll(function () {

    const screenHeight = $(window).innerHeight();
    let revealFromTop = $('#share')[0].getBoundingClientRect().top;

    if (revealFromTop < screenHeight - 500) {
        $('#backgroundShare1').removeClass('shareBackgroundNotOnScreen');
        $('#backgroundShare1').addClass('shareBackgroundOnScreen');
        setTimeout(function () {
            $('#backgroundShare2').removeClass('shareBackgroundNotOnScreen');
            $('#backgroundShare2').addClass('shareBackgroundOnScreen');
        }, 250);
    }
});

/************ connect background anim ************/
$(document).scroll(function () {

    const screenHeight = $(window).innerHeight();
    let revealFromTop = $('#connect')[0].getBoundingClientRect().top;

    if (revealFromTop < screenHeight - 200) {
        $('#backgroundConnect1').removeClass('connectBackgroundNotOnScreen');
        $('#backgroundConnect1').addClass('connectBackgroundOnScreen');
        setTimeout(function () {
            $('#backgroundConnect2').removeClass('connectBackgroundNotOnScreen');
            $('#backgroundConnect2').addClass('connectBackgroundOnScreen');
        }, 250);
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
    let revealFromTop = $('#phoneVideo2')[0].getBoundingClientRect().top;
    let revealFromBottom = $('#phoneVideo2')[0].getBoundingClientRect().bottom;

    if (revealFromTop < screenHeight - 150 && revealFromBottom > 150) {
        $('#phoneVideo2').removeClass('phone2NotOnScreen');
        $('#phoneVideo2').addClass('phone2OnScreen');
        setTimeout(function () {
            $('#phoneVideo2>video').trigger('play');
        }, 1000);
    } else {
        $('#phoneVideo2').removeClass('phone2OnScreen');
        $('#phoneVideo2').addClass('phone2NotOnScreen');
        setTimeout(function () {
            $('#phoneVideo2>video').trigger('pause');
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
$(window).scroll(function () {
    const squarefind = $('#squaresplitch');

    const windowheight = window.innerHeight;
    const revealfromtopimg = squarefind[0].getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealfromtopimg < windowheight - revealpoint) {
        squarefind.removeClass('squareNotActive');
        squarefind.addClass('squareActive');
    }
});


/************ Text change ************/
$(document).ready(function () {

    if (window.screen.width < 965) {
        $('#WhatTalk>h1').html('<img class="iconquest" src="/img/icon_question.png"> De quoi as-tu envie <br> de parler ?');
        $('#connect>h1').html('Connecte-toi avec des<br> gens qui te ressemblent.');
        $('#exchText>p').html('Plutôt d’humeur à discuter, faire une sortie<br> ou lancer un jeu ? À toi de choisir !');
        $('#statText>p').html('Parce que nous concevons une safe place<br> avec des gens ultra cool, tu rencontreras<br> des gens authentiques avec qui tu pourras<br> partager tous tes centres d’intérêts.');
        $('#testText>p').html('Soit le premier à tester l’app et reçoit un<br> badge exclusif “Précurseur” dès le<br> lancement ! Le badge sera valable à vie.');
        $('#findText>p').html('Flash avec des gens avec qui tu as plein<br> de points communs, après à toi de choisir :<br> pote de sortie, meilleur(e) ami(e), double<br> de jeu, ...');
    }
    if (window.screen.width < 400) {
        $('#WhatTag>h1').html('<img class="iconquest" src="/img/icon_question.png"> Plutot quel tag<br> pour toi ?');
    }
});