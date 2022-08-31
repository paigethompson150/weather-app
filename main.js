(()=>{"use strict";var e={d:(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{Z:()=>d});const n=async function(e,n){const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=${n}&APPID=b0861edf97f03a6a99ea8bc6531f4315`,{mode:"cors"});try{const e=await t.json();return{name:e.name,temp:e.main.temp,humidity:e.main.humidity,wind:e.wind.speed,feelsLike:e.main.feels_like,tempMin:e.main.temp_min,tempMax:e.main.temp_max,description:e.weather[0].description,country:e.sys.country}}catch{alert("Sorry, I could not find that location!")}},t=function(e){let n=document.getElementById("temp"),t=document.getElementById("city"),i=document.getElementById("country"),c=document.getElementById("description"),o=document.getElementById("feelsLike"),m=document.getElementById("maxTemp"),d=document.getElementById("minTemp"),r=document.getElementById("humidity"),a=document.getElementById("wind");console.log(e),n.innerHTML=e.temp+"<span>°</span>",t.innerHTML=e.name,i.innerHTML=e.country,c.innerHTML=e.description,o.innerHTML=e.feelsLike,m.innerHTML=e.tempMax,d.innerHTML=e.tempMin,r.innerHTML=e.humidity,a.innerHTML=e.wind},i=(e,i)=>{try{n(e,i).then((function(n){t(n),d(e)}))}catch{console.log("failed")}};let c="London",o="imperial";const m=(e,i)=>{try{n(e,i).then((function(e){t(e)}))}catch{console.log("failed")}};m(c,o),document.getElementById("btn").addEventListener("click",(function(){c=document.getElementById("search").value,c?m(c,o):console.log("no search")})),document.getElementById("switch").addEventListener("click",(function(){o="imperial"===o?"metric":"imperial",m(c,o),document.getElementById("unit").innerHTML=`${o}°`})),function(){let e=document.getElementById("ny"),n=document.getElementById("lon"),t=document.getElementById("mum"),c=document.getElementById("berl");e.addEventListener("click",(function(){i("New York","imperial")})),n.addEventListener("click",(function(){i("London","imperial")})),t.addEventListener("click",(function(){i("Mumbai","imperial")})),c.addEventListener("click",(function(){i("Berlin","imperial")}))}();const d=m})();