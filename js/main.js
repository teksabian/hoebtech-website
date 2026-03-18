document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');
  window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>50)},{passive:true});

  const tog=document.querySelector('.nav-toggle'),links=document.querySelector('.nav-links');
  if(tog&&links){
    tog.addEventListener('click',()=>{tog.classList.toggle('active');links.classList.toggle('open');document.body.style.overflow=links.classList.contains('open')?'hidden':''});
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{tog.classList.remove('active');links.classList.remove('open');document.body.style.overflow=''}));
  }

  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('vis');obs.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-nav.offsetHeight-16,behavior:'smooth'})}
    });
  });

  const yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
});