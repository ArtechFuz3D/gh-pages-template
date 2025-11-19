/* Modular components + theme toggle + parallax + SEO automation
const stored = getStoredTheme();
const theme = stored || (isSystemDark() ? 'dark' : 'light');
applyTheme(theme);
}
function toggleTheme(){
const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
const next = current === 'light' ? 'dark' : 'light';
localStorage.setItem(THEME_KEY, next);
applyTheme(next);
}


/* ---------- Parallax / hero animation (simple & performant) ---------- */
function initParallax(){
const decor = document.querySelector('.hero-decor');
if(!decor) return;
let lastY = 0;
function onScroll(){
const y = window.scrollY;
// gentle translate and scale based on scroll
const t = Math.min(y / 600, 1);
decor.style.transform = `translateY(${t * -40}px) scale(${1 + t * 0.02})`;
lastY = y;
}
window.addEventListener('scroll', () => requestAnimationFrame(onScroll), {passive:true});
onScroll();
}


/* ---------- Modal for deploy instructions ---------- */
function initModal(){
const open = document.getElementById('deploy-modal-open');
const modal = document.getElementById('deploy-modal');
const close = document.getElementById('deploy-modal-close');
if(!open || !modal) return;
open.addEventListener('click', () => modal.setAttribute('aria-hidden', 'false'));
close.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
modal.addEventListener('click', (e) => { if(e.target === modal) modal.setAttribute('aria-hidden','true') });
}


/* ---------- Init everything ---------- */
function init(){
setMeta();
renderNavbar();
renderFooter();
renderSections();
initTheme();
initParallax();
initModal();


// small experiment: if user clicks the "Use Template" in hero, open generate link in new tab
const heroUse = document.getElementById('use-template');
if(heroUse) heroUse.addEventListener('click', () => {
// no-op — the link already directs to GitHub's template generate page
});
}


// Wait for DOM
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();


})();
