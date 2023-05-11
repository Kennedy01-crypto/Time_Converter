// const time = '12:10AM';
const time = document.getElementById("time").innerHTML;
const time12 = document.getElementById("12time");

function convertTo24HrsFormat(timeText){
    var timeTextLower = timeText.toLowerCase();
    let [hours, mins] = timeTextLower.split(":");

    //12 O' clock is the special case to be handled both for AM and PM
    if (timeTextLower.endsWith("am")){
        hours = hours == 12 ? "0" : hours ;
    }
    else if (timeTextLower.endsWith("pm")){
        hours = hours == 12 ? hours : String (+hours +12);
    }

    
    time12.innerHTML = hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
    
}

// console.log(`Converted time: ${convertTo24HrsFormat(time)}`)