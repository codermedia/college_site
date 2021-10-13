document.querySelector("#btn").addEventListener("click",function(e) {
    if(document.querySelector("#uname").value=="" || document.querySelector("#pass").value=="") {
        alert("Both fields are mandatory !!!!");
        return false;
    }

    else {
        alert("Hai "+document.querySelector("#uname").value+" !!!!");
        window.location.href="login.html";
    }
});