function loadScript(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadCSS(href, callback) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  var supportsOnLoad = "onload" in link;
  if(supportsOnLoad) {
    link.onload = callback;
  }
  else {
    setTimeout(function() {
      callback();
    }, 1000);
  }
  document.head.appendChild(link);
}

loadCSS('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css', function() {
  console.log('[✔️] Bootstrap icons');
});
if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
  console.log("[✔️] Index.html");
  const options = ["Right-Click to access more features", "Set a custom background in settings.", "Ghosting is highly recommended", "Hosted on the best hardware! (I'm lying)", "Share this link with everyone.",  "Customize Rebel by going to Settings > Themes", "2024-2025 WE BACK BITCHES", "Ali a midget fr", "bodies's british ass lol", "Ben has 23 and a half kids in his basment", "Vaylin goku meatrider", "Linux is now Acceseable on chromebooks! email at odmstag@gmail.com to get your linux hack"];

  function getRandomOption() {
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }

  function setRandomPlaceholder() {
    const placeholder = document.getElementById("placeholder");
    placeholder.textContent = getRandomOption();
  }
  setRandomPlaceholder();
  var bar = document.querySelector(".browse-input");
  var search = document.getElementById("search");
  bar.addEventListener("focus", () => {
    search.style.marginLeft = "-367px";
  });
  bar.addEventListener("blur", () => {
    search.style.marginLeft = "-150px";
  });
}
window.addEventListener("load", function() {
  loadScript("/worker.js");
  if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
    if(window.innerWidth < 676) {
      location.href = "/mobile.html";
    }
  }
  if(window.location.pathname === '/loading.html') {
    if(window.innerWidth < 676) {
      var rm = document.querySelector('.themesExcluded');
      rm.style.display = 'none';
    }
  }
});
