import{a as f,S as m,i as d}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function y(s){return f("https://pixabay.com/api/",{params:{key:"49539312-1d6717d33bfa63c1c4ab44e48",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error(r.message),r})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}" class="gallery-link">
        <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img"/>
        </a>
      <ul class="info-list">
        <li class="info-item"><span><b>Likes</b>${t.likes}</span></li>
        <li class="info-item"><span><b>Views</b>${t.views}</span></li>
        <li class="info-item"><span><b>Comments</b>${t.comments}</span></li>
        <li class="info-item"><span><b>Downloads</b>${t.downloads}</span></li>
      </ul>
    </li>
  `).join("");c.innerHTML=r,p.refresh()}function g(){u.classList.add("visible")}function l(){u.classList.remove("visible")}function b(){c.innerHTML=""}const L=document.querySelector(".form");document.querySelector('[name="search-text"]');document.querySelector('[type="submit"]');document.querySelector(".gallery");document.querySelector(".loader");L.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements[0].value.trim();if(!r){l(),i("Please enter a search term.");return}b(),y(r).then(t=>{if(t.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}h(t.hits),g()}).catch(t=>{i("Something went wrong. Try again later."),console.error(t)}).finally(()=>{l()})});function i(s){d.show({message:s,messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})}
//# sourceMappingURL=index.js.map
