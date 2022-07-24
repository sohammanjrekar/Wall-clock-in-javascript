function updateclock() {
    let currenttime=new Date();
    let hour=currenttime.getHours();
    let min=currenttime.getMinutes();
    let sec=currenttime.getSeconds();
    let timeofday=(hour<12)?"AM":"PM";
    
}