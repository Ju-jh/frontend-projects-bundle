$(function () {
  var rafId;
  var isMotionStart = true;
  var rafId2;
  var isQuickStart = true;

  var fnHeaderMotion = function () {
    if (!isMotionStart) return;
    isMotionStart = false;
    rafId = requestAnimationFrame(function () {
      if (scry >= 40) {
        $('header').addClass('active');
      } else {
        $('header').removeClass('active');
      }
      isMotionStart = true;
    });
  }; //fnHeaderMotion

  var fnQucikMenu = function () {
    if (!isQuickStart) return;
    isQuickStart = false;
    rafId2 = requestAnimationFrame(function () {
      var h = $('.quick').innerHeight();
      $('.quick').css({ top: scry + winh * 0.5 - h * 0.5 });
      if (scry >= 300) $('.quick').addClass('active');
      else $('.quick').removeClass('active');
      isQuickStart = true;
    }); //rafId2
  }; //fnQuickMenu

  fnQucikMenu();

  $(window)
    .scroll(function () {
      fnQucikMenu();
    })
    .resize(function () {
      fnQucikMenu();
    });

  $('.quick .top').click(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  fnHeaderMotion();

  $(window)
    .scroll(function () {
      fnHeaderMotion();
    })
    .resize(function () {
      fnHeaderMotion();
    });

  $('.gnb > ul > li').mouseenter(function () {
    $(this).children('ul').slideDown(200);
  }); //mouseenter
  $('.gnb > ul > li').mouseleave(function () {
    $(this).children('ul').slideUp(200);
  }); //mouseenter
}); //ready
