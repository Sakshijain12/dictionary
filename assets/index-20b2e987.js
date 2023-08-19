(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const B="/dictionary/assets/icon-new-window-70a67aa8.svg";function w(t){t==="Mono"?(document.body.classList.remove("theme--serif"),document.body.classList.remove("theme--sans-serif"),document.body.classList.contains("theme--mono")||document.body.classList.add("theme--mono"),localStorage.setItem("font-theme",t)):t==="Serif"?(document.body.classList.remove("theme--mono"),document.body.classList.remove("theme--sans-serif"),document.body.classList.contains("theme--serif")||document.body.classList.add("theme--serif"),localStorage.setItem("font-theme",t)):t==="Sans Serif"&&(document.body.classList.remove("theme--serif"),document.body.classList.remove("theme--mono"),document.body.classList.contains("theme--sans-serif")||document.body.classList.add("theme--sans-serif"),localStorage.setItem("font-theme",t))}const L=localStorage.getItem("font-theme")||"Sans Serif";w(L);const A=document.querySelector("[data-font-theme]");A.value=L;A.addEventListener("change",t=>{w(t.target.value)});const p="theme--default",g="theme--light",T="theme--dark",v=R();I();_();v.forEach(t=>t.addEventListener("click",P()));window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{document.body.classList.contains(p)&&_()});function P(t){return e=>{const o=e.target.checked?"dark":"light";o===C()?M():F(o),I(),_(e.target)}}function _(t){const e=q();let o=e?e==="dark":C()==="dark";v.forEach(c=>{c!==t&&(c.checked=o)})}function I(){const t=q();if(t){const e=t==="dark"?T:g;document.body.classList.contains(e)||(document.body.classList.remove(p),document.body.classList.remove(T),document.body.classList.remove(g),document.body.classList.add(e))}else document.body.classList.contains(p)||(document.body.classList.remove(T),document.body.classList.remove(g),document.body.classList.add(p))}function C(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function M(){localStorage.removeItem("userColorScheme")}function F(t){localStorage.setItem("userColorScheme",t)}function q(){return localStorage.getItem("userColorScheme")}function R(){return Array.from(document.querySelectorAll("[data-dark-mode-toggle]"))}const j="/dictionary/assets/icon-arrow-down-f0eae304.svg";class K{constructor(e){this.el=document.createElement(e)}text(e){return this.el.appendChild(document.createTextNode(e)),this}class(e){return this.el.classList.add(e),this}attribute(e,o){return this.el.setAttribute(e,o),this}addTo(e){return e.appendChild(this.el),this.el}insertBefore(e,o){return e.insertBefore(this.el,o),this.el}}const s=t=>new K(t),E=Array.from(document.querySelectorAll("[data-select]"));E.forEach(J);E.forEach(z);document.addEventListener("click",t=>{E.forEach(e=>{const o=Array.from(e.children).find(c=>c.classList.contains("select__control"));o.getAttribute("aria-expanded")==="true"&&o.setAttribute("aria-expanded","false")})});function J(t){const e=U(t);Array.from(e.children).filter(o=>o.nodeName==="OPTION").forEach(o=>{})}function U(t){return Array.from(t.children).find(e=>e.nodeName==="SELECT")}function W(t){return Array.from(t.children).filter(e=>e.nodeName==="OPTION")}function z(t){const e=U(t),o=s("div").class("select__control").attribute("role","combobox").attribute("aria-haspopup","listbox").attribute("aria-labelledby","font-theme-select__label").attribute("aria-controls","font-theme-select__listbox").attribute("aria-expanded","false").attribute("tabindex",0).addTo(t);s("span").text(e.value).addTo(o),s("img").attribute("src",j).attribute("aria-hidden","true").class("icon").class("icon-arrow-down").addTo(o),o.addEventListener("click",n=>{o.getAttribute("aria-expanded")==="true"?l():a(),n.preventDefault(),n.stopPropagation()});const c=s("div").attribute("id","font-theme-select__listbox").attribute("role","listbox").attribute("aria-labelledby","font-theme-select__label").attribute("tabindex","-1").class("select__popup").addTo(t);o.addEventListener("keydown",n=>{const f=o.getAttribute("aria-expanded")==="true";if(n.key==="Enter"||n.key===" "||n.key==="Escape"||n.key==="Tab")f?(l(),(n.key==="Enter"||n.key==="Tab")&&u(),n.key!=="Tab"&&(n.preventDefault(),n.stopPropagation())):n.key!=="Escape"&&n.key!=="Tab"&&(a(),n.preventDefault(),n.stopPropagation());else if(n.key==="ArrowDown"||n.key==="j"||n.key==="ArrowUp"||n.key==="k"){if(console.log("arrow key: "+n.key),!f)a();else{const d=Array.from(c.children[0].children),y=d.findIndex(N=>N.hasAttribute("aria-selected"));let m=y;n.key==="ArrowDown"||n.key==="j"?(m++,m>d.length-1&&(m=0)):(n.key==="ArrowUp"||n.key==="k")&&(m--,m<0&&(m=d.length-1)),console.log("old index: "+y),console.log("new index: "+m),d[y].removeAttribute("aria-selected"),d[m].setAttribute("aria-selected","true")}n.preventDefault(),n.stopPropagation()}else console.log("key: "+n.key)});const i=W(e),r=s("ul").addTo(c);i.forEach(n=>{const f="text--"+n.value.replaceAll(" ","-").toLowerCase(),d=s("li").attribute("role","option").text(n.value).class(f).addTo(r);n.value===e.value&&d.setAttribute("aria-selected","true"),d.addEventListener("click",y=>{o.children[0].innerText=d.innerText,e.value=d.innerText,e.dispatchEvent(new Event("change")),l(),S(r,d.innerText),y.preventDefault(),y.stopPropagation()})});function a(){S(r,o.children[0].innerText),o.setAttribute("aria-expanded","true")}function l(){o.setAttribute("aria-expanded","false")}function u(){var f;const n=(f=Array.from(r.children).find(d=>d.getAttribute("aria-selected")==="true"))==null?void 0:f.innerText;console.log("optionText: "+n),o.children[0].innerText=n,e.value=n,e.dispatchEvent(new Event("change")),o.setAttribute("aria-expanded","false")}}function S(t,e){Array.from(t.children).forEach(o=>{o.innerText!==e?o.removeAttribute("aria-selected"):o.setAttribute("aria-selected","true")})}async function G(t){h(!0);try{const e=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+t);if(e.status!==200){const o=await e.json();return o.error=e.status,h(!1),o}else return h(!1),await e.json()}catch(e){return h(!1),console.log(e),{error:500,title:"severe error",message:"could not reach dictionary api"}}}function h(t){Array.from(document.querySelectorAll("[aria-busy]")).forEach(o=>o.setAttribute("aria-busy",t?"true":"false"))}const H=document.getElementById("search-button"),b=document.getElementById("search-term"),Q=document.querySelector("[data-keyword__play]");H.addEventListener("click",()=>O());function O(t){const e=t||b.value;e&&location.assign(location.href.split("#")[0]+"#"+encodeURIComponent(e))}console.log("location: "+location.href.split("#")[1]);const k=location.href.split("#")[1];k&&D(k);window.addEventListener("hashchange",t=>{console.log("keyword: "+location.href.split("#")[1]);const e=decodeURIComponent(location.href.split("#")[1]);e&&D(e)});b.addEventListener("keydown",t=>t.key==="Enter"&&O());Q.addEventListener("click",t=>{document.querySelector("[data-keyword__audio]").play()});function D(t){x("busy");const e=t||b.value;G(e).then(o=>{o.error?(x("error"),V(o)):(x("keyword"),X(o[0]),Y(o),b.value="")})}function x(t){const e=document.querySelector("[data-state]");t?e.setAttribute("data-state",t):e.setAttribute("data-state","")}function V(t){console.log(JSON.stringify(t));const e=document.querySelector("[data-definitions]");e.innerText="";const o=document.querySelector("[data-error-title]");o.innerText=t==null?void 0:t.title;const c=document.querySelector("[data-error-message]");c.innerText=t==null?void 0:t.message}function X(t){const e=document.querySelector("[data-keyword__term]");e.innerText=t.word;const o=document.querySelector("[data-keyword__pronunciation]");o.innerText=t.phonetic||"";let c=t.phonetics.find(r=>r.audio);const i=document.querySelector("[data-keyword__audio]");i==null||i.setAttribute("src",c==null?void 0:c.audio)}function Y(t){const e=document.querySelector("[data-definitions]");e.innerText="";for(const o of t){for(const i of o.meanings){s("h2").text(i.partOfSpeech).class("definition__part-of-speech").class("heading--2").addTo(e),s("h3").text("Meaning").class("definition__meaning-label").class("heading--3").addTo(e);const r=s("ul").class("definition__meaning-list").addTo(e);for(const a of i.definitions){const l=s("li").addTo(r);if(s("p").text(a.definition).class("definition__text").class("text--1").addTo(l),a.example&&s("p").text(a.example).class("definition__example").class("text--1").addTo(l),a.synonyms.length){s("h4").text("Synonyms").class("definition__synonym-label").addTo(l);const u=s("ul").class("definition__synonym-list").addTo(l);for(const n of a.synonyms){const f=s("li").class("definition__synonym").addTo(u);s("a").text(n).attribute("href",location.origin+location.pathname+"#"+encodeURIComponent(n)).addTo(f)}}if(a.antonyms.length){s("h4").text("Antonyms").class("definition__antonym-label").addTo(l),s("ul").class("definition__antonym-list").addTo(l);for(const u of a.antonyms){const n=s("li").class("definition__antonym").addTo(n);s("a").text(u).attribute("href",location.origin+location.pathname+"#"+encodeURIComponent(u)).addTo(n)}}}if(i.synonyms.length){const a=s("div").addTo(e);s("h3").text("Synonyms").class("definition__synonym-label").class("heading--3").addTo(a);const l=s("ul").class("definition__synonym-list").addTo(a);for(const u of i.synonyms){const n=s("li").class("definition__synonym").addTo(l);s("a").text(u).attribute("href",location.origin+location.pathname+"#"+encodeURIComponent(u)).addTo(n)}}if(i.antonyms.length){const a=s("div").addTo(e);s("h3").text("Antonyms").class("definition__antonym-label").class("heading--3").addTo(a);const l=s("ul").class("definition__antonym-list").addTo(a);for(const u of i.antonyms){const n=s("li").class("definition__antonym").addTo(l);s("a").text(u).attribute("href",location.origin+location.pathname+"#"+encodeURIComponent(u)).addTo(n)}}}s("h4").text("Source").class("definition__source-label").addTo(e);const c=s("ul").class("definition__source-list").addTo(e);for(const i of o.sourceUrls){const r=s("li").class("definition__source-url").addTo(c),a=s("a").attribute("href",i).attribute("target","_blank").addTo(r);s("span").text(i).addTo(a),s("img").class("icon").class("icon-new-window").attribute("src",B).attribute("aria-hidden","true").addTo(a)}}}
//# sourceMappingURL=index-20b2e987.js.map