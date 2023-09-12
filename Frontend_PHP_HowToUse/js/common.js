$(function () {
  var fnGetWinInfo = function () {
    window.scry = $(window).scrollTop();
    window.scrx = $(window).scrollLeft();
    window.winh = $(window).height();
    window.winw = $(window).width();
  }; //fnGetWinInfo

  fnGetWinInfo();

  $(window)
    .scroll(function () {
      fnGetWinInfo();
    })
    .resize(function () {
      fnGetWinInfo();
    });
}); //ready
