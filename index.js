let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess=Number(prompt("Give me a number from 1 to 10 or type 999 to exit."))

// Create while loop that continues for as long as the user guesses are incorrect.
while(userGuess!==randomNumber){ // If the guess is correct, the user should be alerted of their win and 
    if(userGuess===999){ // Loop should exit if user enters 999 and not display "Too high!"
        break;
    }

    attempts++ // Loop should count the number of guesses.1

    if (userGuess < 0 || userGuess > 10){
        alert("Your input is not valid. It must be a number between 1 and 10 only.")
        userGuess=Number(prompt("Guess again."))

    } else if(userGuess < randomNumber ){
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
        userGuess=Number(prompt("To low, guess again."))

    } else if(userGuess>randomNumber){
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
        userGuess=Number(prompt("To High, guess again."))

    } else {
// If anything else is entered, the user should be prompted that their input is invalid and to guess again.
        alert("Your input is not valid. You input must be a number.")
        userGuess=Number(prompt("Guess again."))
    }

}
if(userGuess===999){
    alert("AWW, BYE BYE.")
} else{
    alert(`Congrats you got this in ${attempts} attempts`); // be told the number of guesses they made.
}
