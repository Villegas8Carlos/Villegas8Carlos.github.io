// THEME SYSTEM (system + toggle)
function toggleTheme(){
  document.body.classList.toggle('light');
  localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');
}

// load theme
if(localStorage.getItem('theme')==='light'){
  document.body.classList.add('light');
}

// SCROLL REVEAL (stagger)
const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('show'), i*120);
    }
  });
},{threshold:0.1});
cards.forEach(c=>observer.observe(c));
