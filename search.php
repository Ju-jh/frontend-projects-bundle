<?php include "header.php" ?>
<script src="./js/search.js" type="module"></script>
<figure class="slide"><!-- 동적 추가 --></figure>

<main class="search-content">
  <form class="search-form">

    <fieldset class="search-keyword">
      <span class="search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <input list="keyword-list" class="search-input" type="text" placeholder="영화 제목을 입력하세요">
      <datalist id="keyword-list">
        <!-- option 동적 생성 -->
      </datalist>
      <button class="delete-btn" title="검색 기록 삭제" type="button">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </fieldset>
    <!--  -->

    <fieldset>
      버튼 검색 기능
    </fieldset>
  </form>

  <section class="common-section movie-grid-section wrap-section search-result-section">
    <h2>
      <i class="fa-solid fa-square-poll-vertical"></i>
      <em>검색결과</em>
    </h2>
    <div class="grid-container">
      <!-- 검색 결과 동적 생성 -->
    </div>
  </section>
</main>

<?php include "footer.php" ?>