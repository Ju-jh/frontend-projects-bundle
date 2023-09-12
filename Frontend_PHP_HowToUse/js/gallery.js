$(function () {
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      $('section.gallery li').each(function () {
        var t = $(this).offset().top;
        if (scry >= t - winh * 0.7) $(this).addClass('active');
        else $(this).removeClass('active');
      });
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
