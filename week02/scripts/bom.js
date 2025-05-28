const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");



button.addEventListener("click", () => {
    // check that the input is not blank before completing other tasks the list
    if (input.value.trim() !== "") { if (input.value.trim() !== "") }
    else { input.focus() };

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    })

    input.value = "";
    input.focus();

});