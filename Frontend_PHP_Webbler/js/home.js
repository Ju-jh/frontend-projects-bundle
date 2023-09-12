$(function () {
  //section1
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      var t = $("section.home-feature").offset().top;
      if (scry >= t - winh * 0.5) {
        $("section.home-visual .textbox, .home-visual").removeClass("active");
      } else {
        $("section.home-visual .textbox, .home-visual").addClass("active");
      }
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
    }); //window event
}); //ready

$(function () {
  //section2
  c1 = 0;
  t1 = 0;
  c2 = 0;
  t2 = 0;
  setInterval(function () {
    c1 += (t1 - c1) * 0.2;
    c2 += (t2 - c2) * 0.2;
    $(".count1").text(`${Math.round(c1)}+`);
    $(".count2").text(`${Math.round(c2)}+`);
  }, 50);

  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      var t = $(".counter").offset().top;
      if (scry > t - winh * 0.9) {
        t1 = 200;
        t2 = 100;
      } else {
        t1 = 0;
        t2 = 0;
      }
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

$(function () {
  //home-works
  var data = [
    { id: 1, title: "엠피알 브레인", img: "site1.jpg" },
    { id: 2, title: "수퍼게이트", img: "site2.jpg" },
    { id: 3, title: "디자인하우스 전시사업본부", img: "site3.jpg" },
    { id: 4, title: "서울리빙디자인페어", img: "site4.jpg" },
    { id: 5, title: "서울 디자인 페스티벌", img: "site5.jpg" },
    { id: 6, title: "리트빅", img: "site6.jpg" },
  ];
  document.querySelector(".home-works .section-summary").insertAdjacentHTML(
    "afterend",
    `
    <ul></ul>
  `
  );
  data.forEach((v) => {
    document.querySelector(".home-works ul").insertAdjacentHTML(
      "beforeend",
      `
    <li>
      <a href="./detail.php?id=${v.id}">
        <figure>
          <img src="./img/home/${v.img}" alt="">
          <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
        </figure>
        <h3>${v.title}</h3>
      </a>
    </li>
    `
    );
  });
  $(window).load(function () {
    $(".home-works ul").masonry({ itemSelector: ".home-works ul li" });
  });
});

$(function () {
  //home-promotion

  var data = [
    {
      img: "promotion1.png",
      title: ["내 브랜드와", "어울리는 사이트"],
      desc: "내 브랜드 철학과 스토리가 돋보일 수 있는 사이트를 만들어보세요. 제작 유형에 따라 다양한 템플릿 사이트와 방법들이 준비되어 있습니다.",
    },
    {
      img: "promotion2.png",
      title: ["사이트에 맞는", "콘텐츠 디자인"],
      desc: "내 브랜드를 돋보이게 하는 콘텐츠를 만들기 위해서는 다양한 접근이 필요합니다. 마땅한 이미지가 없다면 보정, 리터칭, 함성의 디자인 업무를 거쳐 퀼리티 있는 사이트를 만들 수 있습니다.",
    },
    {
      img: "promotion3.png",
      title: ["추가 비용없는", "디자인 소스"],
      desc: "사이트 제작에 쓸만한 이미지가 없어서 고민이신가요? 디지털 콘텐츠 디자인에 필요한 다양한 소스들을 추가 비용없이 사용할 수 있습니다.",
    },
    {
      img: "promotion4.png",
      title: ["편리한 관리를 위한", "다양한 기능"],
      desc: "채널톡, 카카오맵, 폼메일, 뉴스레터와 같이 다양한 기능이 필요하세요? 사이트 운영자가 편리하게 사용할 수 있는 맞춤 개발 환경을 제공하고, 관리 교육까지 받아볼 수 있어요.",
    },
  ]; //data

  data.forEach(function (v) {
    $(".home-promotion .center").append(`
      <figure>
        <div class="inner">
          <div class="imgbox">
            <img src="./img/home/${v.img}" alt>
          </div>
          <figcaption class="section-summary">
            <h2>
              <b><i>${v.title[0]}</i></b><br>
              <b><i>${v.title[1]}</i></b>
            </h2>
            <p>${v.desc}</p>
          </figcaption>
        </div>
      </figure>
    `);
  }); //forEach

  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;

    rafId = requestAnimationFrame(function () {
      //code start
      $(".home-promotion figure").each(function () {
        var t = $(this).offset().top;
        var h = $(this).innerHeight();
        var meta = 1 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.0007;
        if (meta < 0) meta = 0;
        $(this)
          .children(".inner")
          .css({
            transform: `scale(${meta})`,
            opacity: meta,
          });
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
}); //ready

$(function () {
  //home-service
  const swiper = new Swiper(".service-carousel", {
    autoplay: false,
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
  });
}); //ready

$(function () {
  //home-process
  var imgs = [
    {
      title: "1. 담당 PM이 도와드릴거예요.",
      desc: "원활한 소통을 위해담당 PM이 배정됩니다. 의뢰인은 사이트 제작에 필요한 디테일한 디자인 또는 개발 요청사항을 담당 PM과 편리하게 상의할 수 있습니다.",
      img: "process1.png",
    },
    {
      title: "2. 사이트의 목적을 알려주세요.",
      desc: "회사나 브랜드 소개 사이트, 상품 판매 온라인 스토어, 프로모션 사이트와 같이 사이트 유형에 따라 맞춤 설계 플랫폼을 제안드릴거예요.",
      img: "process2.png",
    },
    {
      title: "3. 사이트 기획안을 확인해주세요.",
      desc: "사이트 유형에 따라 제작 플랫폼이 선정되면 의뢰인으로부터 제공받은 기초자료를 토대로 사이트의 화면 설계에 대한 기획안 또는 시안을 공유드립니다.",
      img: "process3.png",
    },
    {
      title: "4. 사이트 화면을 개발합니다.",
      desc: "유형별 제작 플랫폼의 개발 환경을 설정하고, 기획안에 따라 각각의 웹페이지를 코딩하고 개발합니다. 물론 의뢰인은 진행상황을 확인할 수 있습니다.",
      img: "process4.png",
    },
    {
      title: "5. 완성된 사이트를 확인합니다.",
      desc: "기획안에 충실한 개발이 완료되면 의뢰인은 완성된 사이트를 확인하게 됩니다. 추가 수정보완 사항을 검토하고, 사이트 운영에 대한 교육을 제공합니다.",
      img: "process5.png",
    },
  ];
  imgs.forEach((v) => {
    $(".home-process .swiper-wrapper").append(`
      <div class="swiper-slide">
        <img src="./img/home/${v.img}" alt="">
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>
    `);
  });
  const swiper = new Swiper(".home-process .carousel", {
    autoplay: false,
    loop: false,
    pagination: {
      el: ".indicator",
      type: "bullets",
      clickable: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });
}); //ready

$(function () {
  //home-price

  $(".home-price").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
});

$(function () {
  //scroll-spy
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;

    rafId = requestAnimationFrame(function () {
      //code start
      var t1 = $(".home-section1").offset().top;
      var t2 = $(".home-section2").offset().top;
      var t3 = $(".home-section3").offset().top;
      var t4 = $(".home-section4").offset().top;
      var t5 = $(".home-section5").offset().top;
      var t6 = $(".home-section6").offset().top;
      var c;
      if (scry < t2 - 1) {
        c = 1;
      } else if (scry >= t2 - 1 && scry < t3 - 1) {
        c = 2;
      } else if (scry >= t3 - 1 && scry < t4 - 1) {
        c = 3;
      } else if (scry >= t4 - 1 && scry < t5 - 1) {
        c = 4;
      } else if (scry >= t5 - 1 && scry < t6 - 1) {
        c = 5;
      } else {
        c = 6;
      }
      $(".scroll-spy button").removeClass("active");
      $(`.scroll-spy .btn${c}`).addClass("active");
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

  $(".scroll-spy button").click(function () {
    window.scrollTo({
      top: $(`.home-section${$(this).val()}`).offset().top,
      behavior: "smooth",
    });
  });
});
