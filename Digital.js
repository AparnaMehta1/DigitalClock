 let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");
//calling inbuilt funciton
setInterval(()=>{
    let hr = new Date().getHours();
    let mm = new Date().getMinutes();
    let sc = new Date().getSeconds();
    var am  = "AM";
    // converting 24 in 12 hours
    if (hr>12){
        hr = hr-12
        var am = "PM";
    }
    // if no. is less than 0, adding before no. 0 for that ex-04,08.
    hr = (hr < 10) ? "0" + hr : hr;
    mm = (mm < 10) ? "0" + mm : mm;
    sc = (sc < 10) ? "0" + sc : sc;
    
    hour.innerHTML = hr;
    minute.innerHTML = mm;
    second.innerHTML = sc;
    ampm.innerHTML = am;
    
}, 1000);




