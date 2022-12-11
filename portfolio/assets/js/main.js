let header = document.querySelector(".header"),
  sectElems = document.querySelectorAll("section"),
  tabsElems = document.querySelectorAll(".header-menu");
// header scroll
(() => {
  let beforePosition = document.documentElement.scrollTop;
  window.addEventListener("scroll", () => {
    let afterPosition = document.documentElement.scrollTop;
    // header on//off
    sectElems.forEach((section, i) => {
      let sectTop = section.offsetTop;
      if (afterPosition + 150 >= sectTop) {
        tabsElems.forEach((tab) => {
          tab.classList.remove("on");
        });
        tabsElems[i].classList.add("on");
      }
    });
    // header active
    if (afterPosition > 50) {
      beforePosition < afterPosition
        ? header.classList.add("header--active")
        : header.classList.remove("header--active");
    }
    beforePosition = afterPosition;
  });
  // section pos move
  tabsElems.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      let href = tab.getAttribute("href");
      let sectTop = document.querySelector(href).offsetTop;
      window.scrollTo({ top: sectTop, behavior: "smooth" });
    });
  });
})();
// section work
(() => {
  const allBtn = document.getElementById("all");
  const responBtn = document.getElementById("responsive");
  const renewBtn = document.getElementById("renew");
  const cloneBtn = document.getElementById("clone");
  const liElems = document.querySelectorAll("li.content");

  let array = [];
  // 로드되면 인트로 끝나고 바로 work 실행
  window.addEventListener("load", () => {
    function workSHow() {
      randomNum();
      activeFilter("all");
    }
    setTimeout(() => {
      header.classList.add("header--active");
    });
    setTimeout(() => workSHow(), 100);
  });

  function randomNum() {
    while (array.length < liElems.length) {
      let ramdom = Math.trunc(Math.random() * liElems.length);
      if (array.indexOf(ramdom) < 0) {
        array.push(ramdom);
      }
    }
  }

  function activeFilter(filter) {
    liElems.forEach((elem, i) => {
      liElems[i].classList.remove("on");
      let j = array[i];
      elemClass = elem.classList;
      if (elemClass.contains(filter)) {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
      setTimeout(() => {
        elem.classList.add("on");
      }, j * 150);
    });
  }
  randomNum();

  allBtn.addEventListener("click", () => {
    liElems.forEach((elem, i) => {
      let j = array[i];
      liElems[i].classList.remove("on");
      elem.style.display = "block";
      setTimeout(() => {
        elem.classList.add("on");
      }, j * 150);
    });
  });
  responBtn.addEventListener("click", () => {
    activeFilter("responsive");
  });
  renewBtn.addEventListener("click", () => {
    activeFilter("renew");
  });
  cloneBtn.addEventListener("click", () => {
    activeFilter("clone");
  });
})();

// gsap
const sectionProcess = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-process .section__wrap",
    start: "top top",
    end: "+=500%",
    scrub: 7,
    pin: true,
  },
});

sectionProcess
  .to(".section-process__container .process1", {
    opacity: 1,
  })
  .to(".section-process__container .process1", {
    opacity: 0,
  })
  .to(".section-process__container .process2", {
    opacity: 1,
  })
  .to(".section-process__container .process2", {
    opacity: 0,
  })
  .to(".section-process__container .process3", {
    opacity: 1,
  })
  .to(".section-process__container .process2", {
    opacity: 0,
  });

$(".section-about section-about__inner .tech-lists .tech-list").each(function (i, li) {
  gsap.from(li, {
    
    scrollTrigger: {
      trigger: li,
      start: "top 80%",
      end: "bottom 60%",
    },
    duration: i * 0.35,
    opacity: 0,
    yPercent: 50,
  });
});

const sectionAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-about__col2",
    start: "top top",
    end: "+=300%",
    scrub: 6,
    pin: true,
  },
});
sectionAbout
  .addLabel("a")
  .from(".sectiom-about__text-box .text-box__title span", {
    yPercent: 50,
    opacity: 0,
    stagger: 2,
    duration: 1.5,
    delay: 0.5,
  });

window.addEventListener("load", function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
});
