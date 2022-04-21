function removebutton(element){
    element.innerText = "";
}
function togglelogin(element){
    console.log("element.innerText")
    if (element.innerText == "Login"){
        element.innerText = "Logout"
    } else {
        element.innerText = "Login"
    }
 }