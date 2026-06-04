function SM() {
    let msg = document.getElementById("message");

    if (msg.style.backgroundColor =="black") {
        msg.style.backgroundColor = "red";
        msg.style.color = "blue";
    } else {
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
    }
}