// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);

let funct = document.querySelector("#function");

    
function fetchData(callback) {
    // using setTimeout to simulate fetching data from a server
    setTimeout(() => {
        // This calls the 'callback' function and passes data to it.
        callback('Data has been fetched');
    }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
    funct.innerHTML = `Data received: ${data}`;
}


