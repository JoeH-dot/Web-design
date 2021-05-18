const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Admin" && password === "Admin") {
        alert("You have succesfully logged in.");
        window.location.href = "members15567.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})