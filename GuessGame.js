const randomValue = Math.floor(Math.random() * 10) + 1; // Generates a random integer between 1 and 10
let userValue;

while (true) {
    userValue = parseInt(prompt("Enter a value between 1 and 10")); // Ensures input is an integer

    if (userValue === randomValue) {
        alert("Congratulations! Your guess is right!");
        break; // Exit the loop when the guess is correct
    } else if (userValue > randomValue) {
        alert("Too High, try again!");
    } else {
        alert("Too Low, try again!");
    }
}
