const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

var date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modification: " + date;

// ------------ Contents ----------- 

const contentsArray = [
    {
        chapter: "chap1",
        title: "Meeting My Psychiatrist"
    },
    {
        chapter: "chap2",
        title: "A Little Series Taught Me ..."
    },
    {
        chapter: "chap3",
        title: "For The One I Love"
    },
    {
        chapter: "chap4",
        title: "One Final Piece of My Mind"
    },
]

createContents(contentsArray);

function createContents(indexArray) {
    if (indexArray != null) {
        document.querySelector("#contents").innerHTML = "";
        indexArray.forEach(item => {
            let line = document.createElement("li");

            line.innerHTML = `Chapter - <a href=#${item.chapter}>${item.title}`;

            document.querySelector("#contents").appendChild(line);

        });
    }
}

   
const button = document.querySelector('#button');
let array = JSON.parse(localStorage.getItem("Feedback")) || [];

button.addEventListener("click", function (e) {
    e.preventDefault(); 

    let userMessage = document.querySelector('#input').value; 
    array.push(userMessage);
    localStorage.setItem("Feedback", JSON.stringify(array));

    window.location.href = "thanks-note.html";
});

