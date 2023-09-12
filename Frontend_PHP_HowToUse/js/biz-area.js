$(function () {
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      $('.sub_area p, .sub_area figure').each(function () {
        var t = $(this).offset().top;
        if (scry >= t - winh * 0.4) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
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
