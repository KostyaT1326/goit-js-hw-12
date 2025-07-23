import{a as w,S,i}from"./assets/vendor-B7yatFIi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p=async(s,e)=>(await w.get("https://pixabay.com/api/",{params:{key:"51362773-b845efdff4000eb7d694ec90c",q:s,page:e,per_page:u,orientation:"horizontal",safesearch:!0,image_type:"photo"}})).data,u=15,l={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},v=new S(".gallery a",{captionsData:"alt",captionDelay:250}),y=s=>{const e=s.map(r=>`<li class="gallery-card">
  <a href="${r.largeImageURL}">
    <img
      class="js-gallery-img"
      src="${r.webformatURL}"
      alt="${r.tags}"
      width="360"
  /></a>
  <ul class="info-list">
    <li class="info-item">
      <h3 class="info-item-title">Likes</h3>
      <p class="info-item-text">${r.likes}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Views</h3>
      <p class="info-item-text">${r.views}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Comments</h3>
      <p class="info-item-text">${r.comments}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Downloads</h3>
      <p class="info-item-text">${r.downloads}</p>
    </li>
  </ul>
</li>`).join("");l.galleryList.insertAdjacentHTML("beforeend",e),v.refresh()},B=()=>{l.galleryList.innerHTML=""},g=()=>{l.loader.classList.remove("is-hidden")},L=()=>{l.loader.classList.add("is-hidden")},b=()=>{l.loadBtn.classList.remove("is-hidden")},d=()=>{l.loadBtn.classList.add("is-hidden")},f={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let a=1,n="",h=0;const q=async s=>{try{if(s.preventDefault(),B(),d(),a=1,n=s.target.elements["search-text"].value.trim(),n===""){i.error({message:"The input field must be filled in!",position:"topRight"});return}g();const{hits:e,totalHits:r}=await p(n,a);if(h=r,e.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e),a*u<h?b():(d(),e.length>0&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){i.error({message:`Error: ${e}`,position:"topRight"})}finally{L()}},$=async s=>{try{g(),s.target.blur(),a+=1;const{hits:e}=await p(n,a);y(e),a*u>=h?(d(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b();const r=f.galleryList.lastElementChild.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}catch(e){i.error({message:`Error: ${e}`,position:"topRight"})}finally{L()}};f.searchForm.addEventListener("submit",q);f.loadBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
