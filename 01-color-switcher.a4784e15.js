!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=null;e.addEventListener("click",(function(){a=setInterval((function(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled")})),d.addEventListener("click",(function(){e.removeAttribute("disabled"),d.setAttribute("disabled","disabled"),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.a4784e15.js.map
