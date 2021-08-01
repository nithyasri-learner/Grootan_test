var currentUserIndex = 0;

var userData = null;

var apiURL = "https://project.free.beeceptor.com/my/api/path";

function init() {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", apiURL, false);
        xmlHttp.send(null);

        userData = JSON.parse(xmlHttp.responseText)
        getUserData(currentUserIndex);
        button("block");
    } catch (e) {
        button("none");
        console.error(e);
    }
}

function onNextButton() {
    currentUserIndex = (currentUserIndex < userData.length - 1) ? currentUserIndex + 1 : 0;
    getUserData(currentUserIndex);
}

function onPrevButton() {
    currentUserIndex = (currentUserIndex > 0) ? currentUserIndex - 1 : userData.length - 1;
    getUserData(currentUserIndex);
}

function getUserData(userIndex) {
    console.log("Current Index:" + currentUserIndex);
    var list = "<ul>"
    list += `<li>${userData[userIndex].name}</li>`
    list += `<p>${userData[userIndex].age}</p>`
    list += `<p>${userData[userIndex].dob}</p>`
    list += `<p>${userData[userIndex].firstName}</p>`
    list += `<p>${userData[userIndex].lastName}</p>`
    list += `<address><p>${userData[userIndex].more.address_line1}<br>
          ${userData[userIndex].more.address_line2}<br>
      ${userData[userIndex].more.address_line3}<br>
      </p></address>`
    list += `<p>${userData[userIndex].more.phone}</p>`
    list += "</ul>"

    document.getElementById('user').innerHTML = list;
}

function button(state) {
    var x = document.getElementById("buttons");
    if (x.style.display === "none") {
        x.style.display = state;
    } else {
        x.style.display = state;
    }
}