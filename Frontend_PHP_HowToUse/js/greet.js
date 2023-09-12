$(function () {
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      $('.greet_section > *').each(function () {
        var t = $(this).offset().top;
        if (scry >= t - winh * 0.8) {
          $(this).addClass('active');
        } else if (scry <= t - winh * 0.8) {
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
