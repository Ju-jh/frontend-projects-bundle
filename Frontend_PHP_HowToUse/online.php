<?php include "sub-header.php"?>
      <script src="./js/online.js"></script>
      <h2 class="sub_title">온라인문의</h2>
      <section class="online">
            <div class="sub_summary">
                  <p class="emphasis">궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요.</p>
                  <p>담당자가 확인후 빠른 회신을 약속합니다.</p>
            </div>
            <form>
                  <div>
                        <label for="id1">성명</label>
                        <p>
                              <input required id="id1" type="text">
                        </p>
                  </div><!-- 1 -->
                  <div>
                        <label>휴대전화</label>
                        <p class="tel">
                              <input required data-digit="3" maxlength="3" type="tel" title="연락처 첫번째 세자리"> -
                              <input required data-digit="4" maxlength="4" type="tel" title="연락처 두번째 네자리"> -
                              <input required data-digit="4" maxlength="4" type="tel" title="연락처 세번째 네자리"> 
                        </p>
                  </div><!-- 2 -->
                  <div>
                        <label for="id2">이메일</label>
                        <p>
                              <input required id="id2" type="email">
                        </p>
                  </div><!-- 3 -->
                  <div>
                        <label for="id3">제목</label>
                        <p>
                              <input required id="id3" type="text">
                        </p>
                  </div><!-- 4 -->
                  <div>
                        <label for="id4">설명</label>
                        <p>
                              <textarea required id="id4"></textarea>
                        </p>
                  </div><!-- 5 -->
                  <div>
                        <label for="id5">첨부파일</label>
                        <p>
                              <input id="id5" type="file">
                        </p>
                  </div><!-- 6 -->
                  <p>
                        <button type="submit" disabled>전송</button>
                        <button type="reset">취소</button>
                  </p><!-- 7 -->
            </form>
      </section>
      
<?php include "sub-footer.php"?>