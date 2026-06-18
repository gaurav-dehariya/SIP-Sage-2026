document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.getElementById("email").value;

    localStorage.setItem("user", email);

    alert("Login Successful");

    window.location.href = "index.html";

});