const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;




var date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modification: " + date;