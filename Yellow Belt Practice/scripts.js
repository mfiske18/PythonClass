function remove(){
    // don't need to send in element because we want to remove the whole cookiebar
    document.querySelector("#cookiebar").remove()

}
function changePic(element){
    // if you want to use the same function to change back, you would use the getAttribute
    if (element.getAttribute("src") =="assets/gearbigpink.png"){
        element.setAttribute("src","assets/gearbig.png")

    } else {
        element.setAttribute("src","assets/gearbigpink.png")
    }


}