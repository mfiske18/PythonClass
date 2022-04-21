function switchImg() {
    petImg.src = "dog.jpg";  
}

function remove(){
    // don't need to send in element because we want to remove the whole cookiebar
    document.querySelector("#cookiebar").remove()

}

function changePic(element){
    // if you want to use the same function to change back, you would use the getAttribute
    console.log(element.getAttribute("src"))
    if (element.getAttribute("src") =="assets/succulents-1.jpg"){
        element.setAttribute("src","assets/succulents-2.jpg")

    } else {
        element.setAttribute("src","assets/succulents-1.jpg")
    }


}