$(function () {
  $(".mbtn").click(function () {
    $(this).toggleClass("active");
    $(".gnb-sm").stop().fadeToggle();
    $(".gnb-video")[0].play();
  });

  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      $(".section-summary h2").each(function () {
        var t = $(this).offset().top;
        if (scry >= t - winh * 0.8) $(this).addClass("active");
        else $(this).removeClass("active");
      });

      if (scry >= 200) $(".top-btn").addClass("active");
      else $(".top-btn").removeClass("active");
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

  $(".top-btn").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}); //ready
