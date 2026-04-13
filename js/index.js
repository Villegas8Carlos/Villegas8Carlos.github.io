function setTheme(mode){
  if(mode === "dark"){
    document.body.classList.remove("light");
    localStorage.setItem("theme","dark");
  }

  if(mode === "light"){
    document.body.classList.add("light");
    localStorage.setItem("theme","light");
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

  if(saved === "dark"){
    document.body.classList.remove("light");
  }

  if(!saved){
    if(window.matchMedia("(prefers-color-scheme: light)").matches){
      document.body.classList.add("light");
    }
  }
})();

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

function setLang(lang){
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang){
  document.querySelectorAll("[data-es]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);

    // SOLO cambiar texto si NO tiene hijos (iconos, svg, etc)
    if(el.children.length === 0){
      el.textContent = text;
    } else {
      // buscar nodo de texto y actualizarlo
      el.childNodes.forEach(node => {
        if(node.nodeType === Node.TEXT_NODE){
          node.textContent = " " + text;
        }
      });
    }
  });
}

// load lang
(function(){
  const saved = localStorage.getItem("lang") || "es";
  applyLang(saved);
})();

function setLang(lang){
  localStorage.setItem("lang", lang);
  applyLang(lang);

  document.querySelectorAll(".lang-toggle button").forEach(btn=>{
    btn.classList.remove("active");
  });

  document.querySelector(`.lang-toggle button[onclick="setLang('${lang}')"]`)
    .classList.add("active");
}