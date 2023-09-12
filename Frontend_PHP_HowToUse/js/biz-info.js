$(function () {
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      $('section.biz_intro > p').each(function () {
        var t = $(this).offset().top;
        if (scry > t - winh * 0.8) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      }); //each

      $('.biz_intro figure').each(function () {
        var t = $(this).offset().top;
        var h = $(this).innerHeight();
        var meta = 1 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.0005;
        if (meta < 0) meta = 0;
        $(this).css({
          transform: `scale(${meta})`,
          opacity: meta,
        });
      }); //each

      //code end
      isStartMotion = true;
    }); //requestAnimationFrame
  }; //scrollMotion
  scrollMotion();
  $(window)
    .scroll(function () {
      scrollMotion();
    })
    .resize(function () {
      scrollMotion();
    });
}); //ready
