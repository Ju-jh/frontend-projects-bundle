$(function () {
  let url = new URL(location.href);
  let params = new URLSearchParams(url.search);
  let paramId = parseInt(params.get('id'));
  let dataObj = prjArr.find((v) => v.id === paramId);
  let { id, title, desc, slogun, definition, client, type, scope } = dataObj;
  $('.mockup-img').attr('src', `./img/details${id}/mockup.jpg`);
  $('.detail-img').attr('src', `./img/details${id}/detail.jpg`);
  $('.screen-img').attr('src', `./img/details${id}/screen.jpg`);
  $('section.detail .slogun').html(slogun);
  $('section.detail .definition').html(definition);
  $('section.detail .client').html(client);
  $('section.detail .type').html(type);
  $('section.detail .scope').html(scope);
  $('.section-summary .desc').html(desc);
  title.forEach((v) => {
    $('.section-summary h2').append(`
      <b><i>${v}</i></b> <br>
    `);
  });
  console.log(dataObj);
}); //ready

$(function () {
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      var t = $('section.detail .textbox').offset().top;
      if (scry >= t - winh * 0.7)
        $('section.detail .textbox').addClass('active');
      else $('section.detail .textbox').removeClass('active');
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
