// THEME SYSTEM (system + toggle)
function setTheme(mode){
  if(mode === "dark"){
    document.body.classList.add("light");
    localStorage.setItem("theme","light");
  }

  if(mode === "light"){
    document.body.classList.remove("light");
    localStorage.setItem("theme","dark");
  }

  if(mode === "system"){
    localStorage.removeItem("theme");

    if(window.matchMedia("(prefers-color-scheme: light)").matches){
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }
}

// load theme
(function(){
  const saved = localStorage.getItem("theme");

  if(saved === "light"){
    document.body.classList.add("light");
  }

  if(!saved){
    if(window.matchMedia("(prefers-color-scheme: light)").matches){
      document.body.classList.add("light");
    }
  }
})();

// load theme
if(localStorage.getItem('theme')==='light'){
  document.body.classList.add('light');
}

// SCROLL REVEAL (stagger)
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.15});

cards.forEach((c, i) => {
  c.style.transitionDelay = `${i * 80}ms`;
  observer.observe(c);
});