<?php include "header.php" ?>
<script src="./js/home.js"></script>

<nav class="scroll-spy">
  <button value='1' class="btn1"></button>
  <button value='2' class="btn2"></button>
  <button value='3' class="btn3"></button>
  <button value='4' class="btn4"></button>
  <button value='5' class="btn5"></button>
  <button value='6' class="btn6"></button>
</nav>
<main class="home-content">

  <section class="home-visual home-section1">
    <!-- particles.js container -->
    <script src="js/particles.js"></script>
    <script src="js/app_particle_default.js"></script>
    <div id="particles-js"></div>

    <div class="textbox">
      <h2>
        <em><b>싸고</b></em>
        <em><b>빠르고</b></em>
        <em><b>아름답게</b></em>
      </h2>
      <p>
        웹사이트, 온라인 스토어 또는 포트폴리오로
        당신의 브랜드를 돋보이게 만들어 보세요.<br>
        당신의 생각을 의미있는 콘텐츠로 만듭니다.
      </p>
      <button>
        자세히보기
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div><!--textbox-->
  </section><!-- home-visual -->

  <section class="home-feature home-section2">
    <div class="center">
      <div class="section-summary">
        <h2>
          <b><i>콘텐츠를</i></b><br>
          <b><i>보기좋게 보여주는</i></b><br>
          <b><i>우리 회사 사이트</i></b>
        </h2>
        <p>다양한 템플릿과 위젯</p>
        <div class="counter">
          <span>
            <em class="count1">000+</em>
            <small>웹디자인 템플릿</small>
          </span>
          <span>
            <em class="count2">000+</em>
            <small>맞춤 UI 위젯</small>
          </span>
        </div>
      </div>

      <figure>
        <img src="./img/home/service.png" alt="">
      </figure>
    </div>
  </section>

  <section class="home-works home-section3"><!-- home-works.. -->
    <div class="center">
      <div class="section-summary">
        <h2>
          <b><i>아름다움에 대한</i></b><br>
          <b><i>기능적 접근</i></b><br>
          <b><i>웨블러와 함께 하세요</i></b>
        </h2>
        <p>
          웨블러에서 제작된 사이트를 확인해보세요.
        </p>
      </div>
      <a class="more" href="./works.php">
        제작사례 전체보기
      </a>
    </div>
  </section>

  <section class="home-service home-section4">
    <div class="center">
      <div class="section-summary">
        <h2>
          <b><i>기획부터</i></b><br>
          <b><i>디자인, 개발까지</i></b>
        </h2>
        <p>
          사이트는 목적에 맞게 콘텐츠가 잘 마련되어야 하고,
          콘텐츠는 UI와 함께 전략적으로 설계되어야 하고,
          편리한 사용성을 고려하여 개발되어야 합니다.
        </P>
      </div>
      <div class="service-carousel">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./img/home/feature1.png" alt=""></div>
          <div class="swiper-slide"><img src="./img/home/feature2.png" alt=""></div>
          <div class="swiper-slide"><img src="./img/home/feature3.png" alt=""></div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-promotion home-section5"><!-- home-promotion -->
    <video src="./video/bg.mp4" muted autoplay loop playsinline></video>
    <div class="center">

    </div><!-- center -->
  </section>

  <section class="home-process home-section6">
    <div class="center">
      <div class="section-summary">
        <h2>
          <b><i>5단계 과정을 거쳐</i></b><br>
          <b><i>사이트는 만들어집니다.</i></b>
        </h2>
        <p>
          기획자, 디자이너, 개발자 그리고 의뢰인 모두가
          함께 소통하며 재밌게 웹사이트를 만들어봐요.
        </P>
      </div>

      <div class="carousel">
        <div class="swiper-wrapper"><!-- 넓이x -->
        </div>
        <div class="indicator"></div>
      </div>
    </div>
  </section>

  <section class="home-price">
    <div class="center">
      <div class="section-summary">
        <h2>
          <b><i>제작비용은</i></b> <br>
          <b><i>200만원부터</i></b>
        </h2>
        <p>
          사이트 제작을 위해 기획, 디자인, 개발 담당자를 고용해야 하는 대신 한 명의 최저 임금 비용으로 사이트를 만들어보세요.
        </p>
        <a href="./price.php">자세히보기</a>
      </div>
    </div>
  </section>
</main>
<?php include "footer.php" ?>