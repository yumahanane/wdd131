// Declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// The || [] means compound OR condition that assigns the array to an empty array
// in case this is the user's first visit or if the localStorage item is missing.

// Array declaration initializes the chaptersArray variable with the list of chapters
// returned by the getChapterList() function or an empty array if the function call returns null or undefined.
const chaptersArray = getChapterList() || [];

// Each entry (chapter) will be processed (i.e., appended to the list).
chaptersArray.forEach(chapter => {
    displayList(chapter);    
});


// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {     // make sure the input is not empty
        displayList(input.value);        // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList();                 // update the localStorage with the new array
        input.value = '';                 // clear the input
        input.focus();                    // set the focus back to the input
    }
});

function displayList(item) {
    // Create a li element that will hold each entry's chapter title and an associated delete button.
    const li = document.createElement('li');
    
    // Create a delete button
    const deleteButton = document.createElement('button');

    // Populate the li element variable's textContent with the input value.
    li.textContent = item;

    // Populate the button textContent with a ❌
    deleteButton.textContent = '❌';

    // This references the CSS rule .delete{width:fit-content;} to size the delete button
    deleteButton.classList.add("delete"); // adds a class to the deleButton so that we can style it in css

    // Append the li element variable with the delete button
    li.appendChild(deleteButton);

    // Append the li element variable to the unordered list in the HTML.
    list.append(li);

    // Add an event listener to the delete button that removes the li element when clicked.
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);   // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
}

// To set the localStorage item
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// To get the localStorage item
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// To delete the item from the localStorage
function deleteChapter(chapter) {
    // Reformat the chapter parameter to get rid of the ❌ that is passed on 
    // the end of the chapter string when deleteChapter is called
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

    // Redefine the chaptersArray array using the array.filter method to return everything 
    // except the chapter to be removed.
    chapter = chaptersArray.filter((item) => item !== chapter);

    // Update the localStorage item
    setChapterList();
}

