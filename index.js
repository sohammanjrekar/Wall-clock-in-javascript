function updateclock() {
    let currenttime=new Date();
    let date=currenttime.getDate();
    let year=currenttime.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    month=monthNames[currenttime.getMonth()]

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day=days[currenttime.getDay()]
    
    let hour=currenttime.getHours();
    let min=currenttime.getMinutes();
    let sec=currenttime.getSeconds();
    let timeofday=(hour<12)?"AM":"PM";
    min=(min<10?"0":"")+min;
    sec=(sec<10?"0":"")+sec;
    hour=(hour>12?hour-12:hour);
    hour=(hour==0?12:hour);
let main=`<p class="unit" id="hours">${hour} : ${min} : ${sec} ${timeofday}</p>
`
    document.getElementById("clock").innerHTML=main;

    document.getElementById("date").innerText=day+" , "+month+" "+date+" , "+year;

}