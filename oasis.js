// === Smooth Scroll + Nav Highlight ===
var ctaBtn = document.querySelector(".cta");
var mobileList = document.querySelector(".mobile-list");
var navIcon = document.querySelector(".nav--icon");
var btns = document.querySelectorAll(".js-btn");
var mobilebtns = document.querySelectorAll(".js-mobile-btn");

// Tiny slider init (unchanged)
var slider = tns({
  container: ".slide__container",
  arrowKeys: true,
  controlsText: [
    '<i class="fas fa-angle-left"></i>',
    '<i class="fas fa-angle-right"></i>'
  ],
  nav: false
});

// Reveal on scroll (unchanged)
var scrollToRevealArray = document.querySelectorAll(".scroll-to-reveal");
for (var i = 0; i < scrollToRevealArray.length; i++) {
  var waypoint = new Waypoint({
    element: scrollToRevealArray[i],
    handler: function (direction) {
      this.element.classList.add("fadeInUp");
    },
    offset: Waypoint.viewportHeight()
  });
}

// Attach smooth scroll by href
function attachSmoothScroll(buttons) {
  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");
      const hash = href && href.includes("#") ? href.split("#")[1] : null;

      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      // Close mobile menu if open
      if (mobileList.classList.contains("show")) {
        mobileList.classList.remove("show");
      }
    });
  });
}

attachSmoothScroll(btns);
attachSmoothScroll(mobilebtns);

// Fix nav stickiness on scroll
if (ctaBtn) {
  new Waypoint({
    element: ctaBtn,
    handler: function (direction) {
      if (direction === "down") {
        document.querySelector("nav").classList.add("fixed");
      } else {
        document.querySelector("nav").classList.remove("fixed");
      }
    },
    offset: -80
  });
}
