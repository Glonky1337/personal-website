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

// WEBSITE COLOR THEME
// Toggle between light and dark modes
function toggleColorMode() {
  const currentColorMode = getCurrentColorMode();

  if (currentColorMode === "light") {
    setColorMode("dark");
  } else {
    setColorMode("light");
  }
}

// Get the current color mode from local storage
function getCurrentColorMode() {
  const preferredColorMode = localStorage.getItem("colorMode");

  if (preferredColorMode === "light") {
    return "light";
  } else {
    return "dark";
  }
}

// Set the preferred color mode in local storage
function setColorMode(colorMode) {
  localStorage.setItem("colorMode", colorMode);
  applyColorMode(colorMode);
}  // const bodyElement = document.body;

// Apply color mode to the page
function applyColorMode(colorMode) {
  let body = document.getElementById("body");
  let linkedinContactLogo = document.querySelector(".contact.linkedin");
  let githubContactLogo = document.querySelector(".contact.github");

  if (colorMode === "light") {
    body.style.color = "rgb(17, 24, 39)";
    body.style.backgroundColor = "rgb(255, 255, 255)";
    linkedinContactLogo.style.backgroundImage = "url(../images/section-icons/linkedin-contact-dark.png)";
    githubContactLogo.style.backgroundImage = "url(../images/section-icons/github-contact-dark.png)";
  } else {
    body.style.color = "";
    body.style.backgroundColor = "";
    linkedinContactLogo.style.backgroundImage = "";
    githubContactLogo.style.backgroundImage = "";
  }
}

// On page load, apply the stored color mode if available
window.addEventListener("load", function () {
  const preferredColorMode = getCurrentColorMode();
  applyColorMode(preferredColorMode);
  // If light mode, display theme toggle-switch as checked
  let x = document.getElementById("light-dark-mode");
  if (preferredColorMode === "light") {
    x.checked = true;
  }
});