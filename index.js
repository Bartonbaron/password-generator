const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("password-el1")
let passwordElTwo = document.getElementById("password-el2")

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generateRandomPasswords() {
    passwordElOne.textContent = ""
    passwordElTwo.textContent = ""

    let input = prompt("Enter how many characters would you like your passwords to have: ")

    if (input === null) {
        return;
    }

    let passwordLength = Number(input)

    if (passwordLength >= 15 && passwordLength <= 24){
        for (let i = 0; i < passwordLength; i++) {
            passwordElOne.textContent += getRandomCharacter()
            passwordElTwo.textContent += getRandomCharacter()
        }
    } else {
        alert("Your passwords should have between 15 and 24 characters.")
    }
}