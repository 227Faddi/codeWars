// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// My Solution

// P - Parameters
// a string

// R - Return
// a new string with now vowels expect y

// E - Examples
// "This website is for losers LOL!"  => "Ths wbst s fr lsrs LL!".

// P - Pseudocode
// create an empty string then transform the parameter into an array an look in every letter to check if its a vowels if yes push it into the new array

function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i].toLowerCase())){
            newStr += str[i]
        }
    }
    return newStr
}

console.log((disemvowel("This website is for losers LOL!")))