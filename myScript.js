let Email = "abc@gmail.com";
let Password = "1234";
function LI() {
    const emailInput = document.getElementById("email").value
    const passwordInput = document.getElementById("password").value
    if (emailInput === Email && passwordInput === Password) {
        console.log("Login successfully");
    }
    else { console.log("Invalid email or password") }
}