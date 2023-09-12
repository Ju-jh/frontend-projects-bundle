  <script>
    $('body').css({'overflow':'hidden'})

    $(window).load(function(){
      setTimeout(function(){
        $('.preloader').fadeOut()
        $('body').css({'overflow':'auto'})
      })
      

    })
  </script>
  <div class="preloader">
    <div class="loader">a</div>
  </div>