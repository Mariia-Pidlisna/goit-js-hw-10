import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";document.querySelector("#datetime-picker");const n=document.querySelector("button[data-start]"),h=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");class S{constructor({onTick:t}){n.disabled=!0,this.onTick=t,this.userSelectedDate=null,this.timerInterval=null,this.init()}init(){l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:e=>{const o=e[0];o<=new Date?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",class:"icon-svg-success",iconUrl:"/img/octagon.svg"}),n.disabled=!0):(this.userSelectedDate=o,n.disabled=!1)}})}start(){!this.userSelectedDate||n.disabled||(n.disabled=!0,this.timerInterval=setInterval(()=>{const t=Date.now(),e=this.userSelectedDate-t;if(e<=0){clearInterval(this.timerInterval),this.onTick(this.convertMs(0));return}const o=this.convertMs(e);this.onTick(o)},1e3))}convertMs(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:d}}}const v=new S({onTick:D});n.addEventListener("click",()=>v.start());function D({days:s,hours:t,minutes:e,seconds:o}){h.textContent=r(s),f.textContent=r(t),y.textContent=r(e),p.textContent=r(o)}function r(s){return String(s).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
