class MovieView {
  _header = document.querySelector(".header");
  _input = document.querySelector(".search__Input");

  constructor() {
    this._toggleNavbar();
    this._slider();
    this._toggleSearch();
    this._movieName();
  }

  _toggleSearchInput() {
    return document
      .querySelector(".search__label")
      .classList.toggle("active-search");
  }

  _toggleNavbar() {
    this._header.addEventListener("click", (e) => {
      const btnNav = e.target.closest(".btn__toggle");
      if (!btnNav) return;
      btnNav.classList.toggle("navTogg-active");
      btnNav.classList.toggle("navTogg-not-active");

      document.querySelector(".nb__l-links").classList.toggle("links-active");
    });
  }

  _toggleSearch() {
    this._header.addEventListener("click", (e) => {
      const btnSearch = e.target.closest(".nb__r-search-icon");
      if (!btnSearch) return;
      this._toggleSearchInput();
    });
  }

  _movieName() {
    this._input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        // handler(e.target.value);
        // e.target.value = "";
        this._toggleSearchInput();
      }
    });
  }

  _slider() {
    const slide = document.querySelectorAll(".slide");

    let btn;
    let curSlide = 0;
    const maxSlide = slide.length;

    const goToSlide = (slides) => {
      slide.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slides)}%)`)
      );
    };

    const slideLeft = () => {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };

    const slideRight = () => {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      goToSlide(curSlide);
    };

    this._header.addEventListener("click", (e) => {
      const btnSlide = e.target.closest(".slide__btn");
      if (!btnSlide) return;

      btnSlide.classList.contains("slide__btn-left")
        ? (btn = "left")
        : (btn = "right");

      const direction = btn === "left" ? slideLeft() : slideRight();

      document
        .querySelector(`.slide__btn-${btn}`)
        .addEventListener("click", direction);
    });

    let count = 0;
    setInterval(() => {
      if (count < 3) {
        slideLeft();
        count++;
        return;
      } else if (count < 5) {
        slideRight();
        return;
      }
    }, 5000);
  }
}

export default new MovieView();
