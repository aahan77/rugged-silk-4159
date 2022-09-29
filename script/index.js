
  window.addEventListener("scroll", function () {
    let navbar = this.document.querySelector("nav");
    if (window.pageYOffset > 90) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

