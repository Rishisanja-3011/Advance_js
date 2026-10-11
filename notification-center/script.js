
function createnotifi(config) {

    // Return a function that receives the message
    return function (notification) {

        // Create a new div
        let div = document.createElement("div");

        // Set the notification's appearance
        div.className = `
            fixed z-50
            ${config.theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-black"}
            px-6 py-3 rounded shadow-lg
            ${config.positionX === "right" ? "right-10" : "left-10"}
            ${config.positionY === "top" ? "top-10" : "bottom-10"}
        `;

        // Set the notification message
        div.textContent = notification;

        // Add it to the webpage
        document.body.appendChild(div);

        // Remove it after the selected duration
        setTimeout(function () {
            div.remove();
        }, config.duration * 1000);
    };
}


// Get the form
let form = document.getElementById("form");

// Run this code when the user submits the form
form.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get values entered or selected by the user
    let x = document.getElementById("X").value;
    let y = document.getElementById("Y").value;
    let theme = document.getElementById("theme").value;
    let message = document.getElementById("message").value;
    let duration = Number(document.getElementById("time").value);

    // Check that duration is valid
    if (duration <= 0 || !Number.isFinite(duration)) {
        alert("Please enter a valid duration.");
        return;
    }

    // Create the notification function with the selected settings
    let toster = createnotifi({
        positionX: x,
        positionY: y,
        theme: theme,
        duration: duration
    });

    // Show the notification with the user's message
    toster(message);

});
