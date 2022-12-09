// intro
let header = document.querySelector(".header");

// header scroll
(() => {
  let beforePosition = document.documentElement.scrollTop;
  window.addEventListener("scroll", () => {
    let afterPosition = document.documentElement.scrollTop;
    if (afterPosition > 50) {
      beforePosition < afterPosition
        ? header.classList.add("header--active")
        : header.classList.remove("header--active");
    }
    beforePosition = afterPosition;
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
  //   window.addEventListener("load", () => {
  //     function workSHow() {
  //       randomNum();
  //       activeFilter("all");
  //     }
  //     setTimeout(() => workSHow(), 3500);
  //   });

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
