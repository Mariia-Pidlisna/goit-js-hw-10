import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as t}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector(".form");l.addEventListener("submit",c);function c(o){o.preventDefault();const s=Number(o.target.elements.delay.value),r=o.target.elements.state.value==="fulfilled";new Promise((e,i)=>{setTimeout(()=>{r?e(s):i(s)},s)}).then(e=>{t.success({title:"Ok",message:`Fulfilled promise in ${e}ms`,position:"topRight",class:"icon-svg-success",iconUrl:"/src/img/circle.svg",backgroundColor:"#59a10d",titleColor:"#fff",messageColor:"#fff"})}).catch(e=>{t.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",class:"icon-svg-error",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})})}
//# sourceMappingURL=2-snackbar.js.map
