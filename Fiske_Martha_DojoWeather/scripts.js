function hide(element){
    var cookie = document.getElementById("cookie-box");
    console.log(cookie)
    cookie.style.visibility = 'hidden';
}


function convertTemp(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        console.log(tempSpan)
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "celcius") {
            tempSpan.innerText = Math.round(5 / 9 * (tempVal - 32));
        } else {
            tempSpan.innerText = Math.round(9 / 5 * tempVal + 32);
        }
    }
}