(()=>{"use strict";document.querySelector(".contact-form .submit-button").addEventListener("click",(e=>{e.preventDefault(),e.stopImmediatePropagation(),document.querySelector(".form-submit-message").classList.remove("hide")}));const e=document.querySelector(".section.section-no-bottom-padding.is-bg-interactive"),t=e.querySelectorAll(".tab"),a=e.querySelectorAll(".tab-panel");function o(o){a.forEach((e=>e.hidden=!0)),t.forEach((e=>{e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!1),e.classList.remove("is-active")})),this.classList.add("is-active"),this.setAttribute("tabindex",0),this.setAttribute("aria-selected",!0),this.focus();const{id:r}=o.currentTarget;e.querySelector(`[data-panel="${r}"]`).hidden=!1}t.forEach(((e,a)=>{e.addEventListener("click",o),e.addEventListener("keydown",(e=>{let o=a;"ArrowLeft"===e.key&&(e.stopPropagation(),0===o&&(o=t.length),document.activeElement.removeAttribute("tabindex"),t[o-1].setAttribute("tabindex",0),t[o-1].focus()),"ArrowRight"===e.key&&(e.stopPropagation(),o===t.length-1&&(o=-1),document.activeElement.removeAttribute("tabindex"),t[o+1].setAttribute("tabindex",0),t[o+1].focus())," "!==e.key&&"Enter"!==e.key||(e.stopPropagation(),e.preventDefault(),t[o].click()),"Home"===e.key&&(e.stopPropagation(),e.preventDefault(),document.activeElement.removeAttribute("tabindex"),t[0].setAttribute("tabindex",0),t[0].focus()),"End"===e.key&&(e.stopPropagation(),e.preventDefault(),document.activeElement.removeAttribute("tabindex"),t[t.length-1].setAttribute("tabindex",0),t[t.length-1].focus())}))}));const r=document.querySelector(".navbar-mobile-button"),n=document.querySelector(".navbar-list");r.addEventListener("click",(e=>{e.stopImmediatePropagation(),n.classList.contains("mobile-hidden")?(n.classList.remove("mobile-hidden"),n.setAttribute("aria-expanded",!0)):(n.classList.add("mobile-hidden"),n.setAttribute("aria-expanded",!1))})),window.addEventListener("resize",(()=>{n.classList.add("mobile-hidden"),n.setAttribute("aria-expanded",!1)}));const i=document.querySelectorAll(".modal-button"),s=document.querySelectorAll(".modal-close");function d(e){e.stopImmediatePropagation();const t=document.getElementById(e.target.attributes["data-target"].value);t&&t.classList.toggle("hidden")}i.forEach((e=>e.addEventListener("click",d))),s.forEach((e=>e.addEventListener("click",d)));const u=document.querySelectorAll(".navbar-link");u.forEach(((e,t)=>{const a=e.parentElement.querySelectorAll('.sublist [role="menuitem"]');a.forEach(((e,o)=>{e.addEventListener("keydown",(e=>{let r=o,n=t;"ArrowDown"===e.key&&(e.stopPropagation(),e.preventDefault(),0===r&&(r=a.length),document.activeElement.removeAttribute("tabindex"),a[r-1].focus()),"ArrowUp"===e.key&&(e.stopPropagation(),e.preventDefault(),r===a.length-1&&(r=-1),document.activeElement.removeAttribute("tabindex"),a[r+1].focus()),"ArrowLeft"===e.key&&(e.stopPropagation(),0===n&&(n=u.length),u[n-1].focus(),u[n-1].hasAttribute("aria-expanded")&&u[n-1].setAttribute("aria-expanded",!0),u[t].setAttribute("aria-expanded",!1)),"ArrowRight"===e.key&&(e.stopPropagation(),n===u.length-1&&(n=-1),u[n+1].focus(),u[n+1].hasAttribute("aria-expanded")&&u[n+1].setAttribute("aria-expanded",!0),u[t].setAttribute("aria-expanded",!1)),"Home"===e.key&&(e.stopPropagation(),e.preventDefault(),a[0].focus()),"End"===e.key&&(e.stopPropagation(),e.preventDefault(),a[a.length-1].focus());let i=o+1;for(a.length===i&&(i=0);i!==o;){if(e.key.toLowerCase()===a[i].textContent.toLowerCase()[0])return e.stopPropagation(),e.preventDefault(),void a[i].focus();i++,a.length===i&&(i=0)}}))})),e.parentElement.addEventListener("mouseover",(()=>{e.hasAttribute("aria-expanded")&&e.setAttribute("aria-expanded",!0)})),e.parentElement.addEventListener("mouseout",(()=>{e.hasAttribute("aria-expanded")&&e.setAttribute("aria-expanded",!1)})),e.addEventListener("keydown",(o=>{let r=t;"ArrowLeft"===o.key&&(o.stopPropagation(),0===r&&(r=u.length),u[t].setAttribute("aria-expanded",!1),u[r-1].focus()),"ArrowRight"===o.key&&(o.stopPropagation(),r===u.length-1&&(r=-1),u[t].setAttribute("aria-expanded",!1),u[r+1].focus()),"ArrowDown"===o.key&&e.hasAttribute("aria-expanded")&&a.length&&(o.stopPropagation(),o.preventDefault(),e.setAttribute("aria-expanded",!0),a[0].focus()),"ArrowUp"===o.key&&e.hasAttribute("aria-expanded")&&a.length&&(o.stopPropagation(),o.preventDefault(),e.setAttribute("aria-expanded",!0),a[a.length-1].focus()),"Home"===o.key&&(o.stopPropagation(),o.preventDefault(),u[0].focus()),"End"===o.key&&(o.stopPropagation(),o.preventDefault(),u[u.length-1].focus());let n=t+1;for(u.length===n&&(n=0);n!==t;){if(o.key.toLowerCase()===u[n].textContent.toLowerCase()[0])return o.stopPropagation(),o.preventDefault(),void u[n].focus();n++,u.length===n&&(n=0)}}))}))})();