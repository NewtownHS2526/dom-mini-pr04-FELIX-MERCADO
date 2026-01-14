console.log("Script Running");

const shift = (position, sprite) => position <= 6? sprite.style.setProperty("grid-column", position) : null;

let tux_position = 0;
let daisy_position = 0;
let rocky_position = 0;

let more = true

const tuxButton = document.querySelector("#tux-button");
const daisyButton = document.querySelector("#daisy-button");
const rockyButton = document.querySelector("#rocky-button");

const tuxPenguin = document.querySelector("#tux-penguin");
const daisyPenguin = document.querySelector("#daisy-penguin");
const rockyPenguin = document.querySelector("#rocky-penguin");

const winner = document.querySelector("#winner");

function tuxFn() {
    if (more) {
        shift(tux_position, tuxPenguin);
        tux_position += 1;
        wil(tux_position, "Tux Penguin");
    }
}

function daisyFn() {
    if (more) {
        shift(daisy_position, daisyPenguin);
        daisy_position += 1;
        wil(daisy_position, "Daisy Penguin");
    }
}

function rockyFn() {
    if (more) {
        shift(rocky_position, rockyPenguin);
        rocky_position += 1;
        wil(rocky_position, "Rocky Penguin");
    }
}

function wil(p, q) {
    if (p >= 6) {
        winner.innerHTML = "<p>" + q + " wins GG!</p>";
        more = false
    }
}

tuxButton.addEventListener("click", tuxFn)
daisyButton.addEventListener("click", daisyFn)
rockyButton.addEventListener("click", rockyFn)

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6



// Create position variables for each penguin and set them all to 1



// Query selectors for all buttons and penguins go here



// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function



// Write the function that moves Daisy forward



// Write the function that moves Rocky forward



// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found



// Add event listeners for each button
// Each button should trigger its own movement function
