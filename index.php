<?php include "header.php" ?>
<script src="./js/home.js" type="module"></script>

<section class="home-visual">
  <div class="swiper-wrapper">

  </div>
  <button class="next"></button>
  <butotn class="prev"></butotn>

  <button class="wheel-btn">
    <i class="fa-solid fa-arrow-down"></i>
  </button>
</section>

<main class="home-content">
  <section class="common-section movie-grid-section swiper-section popular-section">
    <h2>
      <i class="fa-solid fa-clapperboard"></i>
      <em>현재 인기 영화</em>
    </h2>
    <div class="carousel grid-container">
      <div class="swiper-wrapper">

      </div>
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </section>

  <section class="common-section movie-grid-section swiper-section upcoming-section">
    <h2>
      <i class="fa-solid fa-calendar-days"></i>
      <em>최신, 개봉 예정 영화</em>
    </h2>
    <div class="carousel grid-container">
      <div class="swiper-wrapper">

      </div>
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </section>

  <section class="common-section movie-grid-section swiper-section rated-section">
    <h2>
      <i class="fa-solid fa-square-poll-vertical"></i>
      <em>평점이 높은 영화</em>
    </h2>
    <div class="carousel grid-container">
      <div class="swiper-wrapper">

      </div>
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </section>

  <section class="common-section movie-grid-section swiper-section trend-section">
    <h2>
      <i class="fa-solid fa-comments"></i>
      <em>주간 화제의 영화들</em>
    </h2>
    <div class="carousel grid-container">
      <div class="swiper-wrapper">

      </div>
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </section>
</main>

<!-- 
<i class="fa-solid fa-clapperboard"></i>
<i class="fa-solid fa-calendar-days"></i>
<i class="fa-solid fa-square-poll-vertical"></i>
<i class="fa-solid fa-comments"></i>
 -->

<?php include "video-modal.php" ?>
<?php include "footer.php" ?>