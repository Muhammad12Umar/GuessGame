
const randomValue = Math.floor(Math.random() * 10) + 1; // Generates a random integer between 1 and 10
let userValue = parseInt(prompt("Enter a value between 1 and 10")); // Ensures input is an integer

if (userValue === randomValue) {
    console.log("Your Guess is Right!");
} else if (userValue > randomValue) {
    alert("Too High Dear !");
} else {
    alert("Too Low Dear !");
}

alert("Congratulation You Are Guess is Right Dear !",randomValue);


