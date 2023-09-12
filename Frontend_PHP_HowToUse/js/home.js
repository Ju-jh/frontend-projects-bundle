$(function () {
  // $('.rolling').clone().appendTo('.rolling_container');
  var clone = document.querySelector('.rolling').cloneNode(true);
  document.querySelector('.rolling_container').append(clone);

  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;

    rafId = requestAnimationFrame(function () {
      //code start
      $('.feature figure').each(function () {
        var t = $(this).offset().top;
        if (scry >= t - winh * 0.9) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });

      var t = $('.feature figure div').offset().top;
      var h = $('.feature figure div').innerHeight();
      var meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * 0.1;
      if (meta > 10) meta = 10;
      if (meta < -10) meta = -10;
      $('.feature figure div img').css({
        transform: `scale(1.3) translateY(${meta}%)`,
      });

      //code end
      isStartMotion = true;
    });
  };
  scrollMotion();
  $(window)
    .scroll(function () {
      scrollMotion();
    })
    .resize(function () {
      scrollMotion();
    });
});
