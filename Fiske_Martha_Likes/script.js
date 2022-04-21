console.log("page loaded...");
var neilLikes=9;
var nicholeLikes=12;
var jimLikes=9;

var likeElement = document.getElementsByClassName("likes")

function addLike() { 
        console.log(likeElement)
        // likes++;
        // likeElement.innerText = likes +" like(s)";
} 

// index     0  1   2
var likes = [9, 12, 9];
var users = [
    document.querySelector("#Neil"),
    document.querySelector("#Nicole"),
    document.querySelector("#Jim")
];

function addLike(id) {
    likes[id]++;
    console.log(likes[id])
    users[id].innerHTML = likes[id] + " like(s)";
    console.log(users[id].innerHTML)
} 