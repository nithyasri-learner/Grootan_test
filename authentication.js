var authenticationData = {
    username: "",
    password: ""
}

var storedUsername = "";
var storedPassword = "";


var usernameStorageKey = "grootan-user-name";
var passwordStorageKey = "grootan-password";


function init() {
    storedUsername = localStorage.getItem(usernameStorageKey);
    storedPassword = localStorage.getItem(passwordStorageKey);
    authenticationUI("block");
}

function login() {
    getInputData();

    if (authenticationData.username == storedUsername && authenticationData.username.length > 0) {
        if (authenticationData.password == storedPassword && authenticationData.password.length > 0) {
            window.location.href = "data.html";
        } else {
            alert("Password Error!");
        }
    } else {
        alert("Username not found!");
    }
}

function register() {
    getInputData();

    if (authenticationData.username.length > 0) {
        if (authenticationData.password.length > 0) {
            localStorage.setItem(usernameStorageKey, authenticationData.username);
            localStorage.setItem(passwordStorageKey, authenticationData.username);

            window.location.href = "data.html";
        } else {
            alert("Invalid Input data!");
        }
    } else {
        alert("Invalid Input data!");
    }
}

function getInputData() {
    authenticationData.username = document.getElementById('uname').value;
    authenticationData.password = document.getElementById('password').value;
}

function authenticationUI(hide) {
    var x = document.getElementById("authentication");
    if (x.style.display === "none") {
        x.style.display = hide;
    } else {
        x.style.display = hide;
    }
}