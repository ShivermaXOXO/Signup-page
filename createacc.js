

document.getElementById("showPassword").addEventListener("change", function () {
    var passwordInput = document.getElementById("password");
    var passwordRepeat = document.getElementById("psw-repeat");
    passwordInput.type = passwordRepeat.type = this.checked ? "text" : "password";
});

document.getElementById("cancelbtn").addEventListener("click", function () {

    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var repeatPassword = document.getElementById("psw-repeat");

    emailInput.value = "";
    passwordInput.value = "";
    repeatPassword.value = "";
});


function openPopup() {

    popup.classList.add("open-popup");
    setTimeout(closePopup, 1000);
}
function closePopup() {
    popup.classList.remove("open-popup");
}

function showPopup() {
    openPopup();
}


document.getElementById("psw-repeat").addEventListener("input", function () {
    var password = document.getElementById("password").value;
      
    var repeatPassword = this.value;
    var signupBtn = document.getElementById("signupbtn");

    if (password === repeatPassword) {
        showPopup();
        signupBtn.style.display = "block";
    } else {
        
        signupBtn.style.display = "none";
    }
});



