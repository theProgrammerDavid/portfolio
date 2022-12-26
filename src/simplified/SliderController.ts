export class Slider {
  public sections: any;
  public navigation: any;

  constructor(options: { section: string; dots: string }) {
    this.sections = document.querySelectorAll(options.section);
    this.navigation = document.querySelector(options.dots);

    this.navigation.addEventListener("click", this.scrollToSection.bind(this));
    window.addEventListener("scroll", this.setDotStatus.bind(this));
  }

  removeDotStyles() {
    const dots = this.navigation;
    const is_active = dots.querySelector(".is-active");

    if (is_active != null) {
      is_active.classList.remove("is-active");
    }
  }

  setDotStatus() {
    const scroll_position = window.scrollY;
    const dots = Array.from(this.navigation.children) as any;

    this.sections.forEach((section: { offsetTop: any }, index: number) => {
      const half_window = window.innerHeight / 2;
      const section_top = section.offsetTop;

      if (
        scroll_position > section_top - half_window &&
        scroll_position < section_top + half_window
      ) {
        this.removeDotStyles();
        dots[index].classList.add("is-active");
      }
    });
  }

  scrollToSection(e: any) {
    const dots = Array.from(this.navigation.children);
    const window_height = window.innerHeight;

    dots.forEach((dot, index) => {
      if (dot == e.target) {
        window.scrollTo({
          top: window_height * index,
          behavior: "smooth",
        });
      }
    });
  }
}

// new Slider({
//   section: ".section",
//   dots: "#sections",
// });
