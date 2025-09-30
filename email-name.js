// The following code is to validate names and email addresses:

const e = require("express");

function validateName(name) {
    const nameRegex = /^[A-Za-z\s'-]{2,}$/;
    return nameRegex.test(name.trim());


}

// Function to validate E-mails:

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

const name = "Jane Smith";
const email  = "Jsmith@Whatever.com"

console.log("Name valid:", validateName(name));
console.log("Email Valid", validateEmail(email));