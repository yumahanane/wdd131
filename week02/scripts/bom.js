// Declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        
        // Create a li element that will hold each entry's chapter title and an associated delete button.
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Populate the li element variable's textContent with the input value.
        li.textContent = input.value;

        // Populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        // Append the li element variable with the delete button
        li.appendChild(deleteButton);

        // Append the li element variable to the unordered list in the HTML.
        list.append(li);
    
        // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clean up the input box and give it focus
        input.value = "";
        input.focus();
    }
    else {
        input.focus();
    }
});
