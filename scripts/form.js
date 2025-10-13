// last modified code
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


var date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last modification: " + date;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

createOption(products);

function createOption(productArray) {
    document.querySelector("#otherOptions");
    productArray.forEach(product => {
        let list = document.createElement("li");
        let option = document.createElement("option");
        option.textContent = product.name;
        option.setAttribute("value", product.id);
        list.appendChild(option);
        document.querySelector("#otherOptions").appendChild(list);

    });
}