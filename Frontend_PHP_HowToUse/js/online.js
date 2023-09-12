$(function () {
  $('.online input[type=tel]').bind('input', function () {
    var digit = parseInt($(this).attr('maxlength'));
    var leng = $(this).val().length;
    if (leng >= digit) $(this).next().focus();
  });

  $('.online form').change(function () {
    // if ($('.online form')[0].checkValidity())
    //   $('.online form button[type=submit]').attr('disabled', false);
    // else$('.online form button[type=submit]').attr('disabled', true);
    var validity = $('.online form')[0].checkValidity() ? false : true;
    $('.online form button[type=submit]').attr('disabled', validity);
  });
});
