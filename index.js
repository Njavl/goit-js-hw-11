import{a as f,i as y,S as h}from"./assets/vendor-BL1gslrM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const n=document.querySelector(".gallery"),o=document.querySelector(".loader");function g(a){const t=a.map(i=>{const{webformatURL:l,largeImageURL:e,tags:s,likes:r,views:u,comments:p,downloads:m}=i;return`
    <li class="gallery-item">
    <a class="gallery-link" href="${e}">
    <img
    class="gallery-image"
    src="${l}"
    alt="${s}"
    />
        <div class="description">
      <ul class="description-list">
        <li class="description-list-item">
          <span class="description-label">Likes</span>
          <span class="description-label-value">${r}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Views</span>
          <span class="description-label-value">${u}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Comments</span>
          <span class="description-label-value">${p}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Downloads</span>
          <span class="description-label-value">${m}</span>
        </li>
      </ul>
    </div>
    </a>
    </li>
    `});c(),n.insertAdjacentHTML("afterbegin",t.join(""))}function b(){n.innerHTML=""}function L(){o.classList.remove("visually-hidden")}function c(){o.classList.add("visually-hidden")}const v="54431760-457b05627b7c92a0f6d8a1d9a",w="https://pixabay.com/api";function P(a){return b(),L(),f({method:"GET",url:w,params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch().finally()}const d=document.querySelector(".form");d.addEventListener("submit",S);function S(a){a.preventDefault();const t=d.elements["search-text"].value;P(t).then(i=>{if(console.log(i.hits),i.hits.length===0){c(),y.error({title:"Nth were find",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(i.hits),new h(".gallery li a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})})}
//# sourceMappingURL=index.js.map
