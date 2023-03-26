const endDate = "19 June 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;

function timer(){

    const present = new Date();
    const end = new Date(endDate);
    const duration = (end - present) / 1000;
    if(duration <= 0) {
        document.getElementById("window").innerHTML = "<div class=\"sub-head\">Time Elapsed</div>"

        return;
    }
    mul = 24 * 60 * 60;

    days = Math.floor(duration / mul);
    rem = duration % mul;
    mul /= 24;
    document.getElementById("days").innerText = days;
    
    hours = Math.floor(rem / mul);
    rem = rem % mul;
    mul /= 60;
    document.getElementById("hours").innerText = hours;
    
    mins = Math.floor(rem / mul);
    document.getElementById("mins").innerText = mins;
    rem = rem % mul;
    mul /= 60;
    
    secs = rem;
    document.getElementById("secs").innerText = Math.floor(secs);
}

timer();

setInterval(timer, 1000);
