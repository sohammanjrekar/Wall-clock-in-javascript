function updateclock() {
    let currenttime=new Date();
    let hour=currenttime.getHours();
    let min=currenttime.getMinutes();
    let sec=currenttime.getSeconds();
    let timeofday=(hour<12)?"AM":"PM";
let main=`<p class="unit" id="hours">${hour}</p>
<p class="unit" id="minutes">${min}</p>
<p class="unit" id="seconds">${sec}</p>
<p class="unit" id="ampm">${timeofday}</p>`
    document.getElementById("main").innerHTML=main;

}