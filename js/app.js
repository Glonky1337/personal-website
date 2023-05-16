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

function lightDarkMode() {
    let x = document.getElementById("light-dark-mode");
    let body = document.getElementById("body");
    let linkedinContactLogo = document.querySelector(".contact.linkedin");
    let githubContactLogo = document.querySelector(".contact.github");

    if (x.checked) {
        body.style.color = "rgb(17, 24, 39)";
        body.style.backgroundColor = "rgb(255, 255, 255)";
        linkedinContactLogo.style.backgroundImage = "url(/images/section-icons/linkedin-contact-dark.png)";
        githubContactLogo.style.backgroundImage = "url(/images/section-icons/github-contact-dark.png)";
        // x.checked = false;
    } else {
        body.style.color = "";
        body.style.backgroundColor = "";
        linkedinContactLogo.style.backgroundImage = "";
        githubContactLogo.style.backgroundImage = "";
    }
}

function changeBackgroundColorTextColor(variable, backgroundColor, color) {
    for (let i = 0; i < variable.length; i++) {
        variable[i].style.backgroundColor = backgroundColor;
        variable[i].style.color = color;
    }
}
