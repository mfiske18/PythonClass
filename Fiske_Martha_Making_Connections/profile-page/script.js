console.log("page loaded...");
var numRequests = 2
numConnections = 500
var users = [
    document.querySelector("#Jane"),
    document.querySelector("#Todd"),
    document.querySelector("#Phil")

];
var newName = [
    "Jake F."
    
]
function changeName(index){
    console.log(users)
    users[index].innerHTML = newName[index] 
}

function hideUser(index){
    console.log(index)
    users[index].style.visibility = "hidden";
    numRequests--
    console.log("subtract    numRequests="+numRequests)
    document.getElementById("numrequests").innerHTML = numRequests    
}

function addRequest(){
    numConnections++
    console.log("add    numRequests = " + numConnections)
    document.getElementById("numconnections").innerHTML = numConnections

}

