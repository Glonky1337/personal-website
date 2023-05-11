function toggleMobileNav() {
    let x = document.getElementById("navigation");
    let y = document.getElementById("nav-link-container");
    if (x.className === "topnav") {
      x.className += " responsive";
      y.className = "mobile-nav-style"
    } else {
      x.className = "topnav";
      y.className = "";
    }
}

function toggleHamburger() {
  let x = document.getElementById("hamburger");
  if (x.checked) {
    x.checked = false;
  }
}