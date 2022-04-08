const check_alphabet = document.getElementById("alphabet")
const check_digits = document.getElementById("digits")
const check_symbols = document.getElementById("symbols")

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const digits = "1234567890"
const symbols = "!?$%&+-.,_#@`"


function generatePassword(length) {
    let array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    let res = ""
    var possibilities = ""

    if (check_alphabet.checked) { possibilities += alphabet }
    if (check_digits.checked) { possibilities += digits }
    if (check_symbols.checked) { possibilities += symbols }

    for (_i in array) {
        res += possibilities.charAt(array[_i] % possibilities.length)
    }

    document.getElementById("result").innerText = (
        res
    )

    getEntropy(res, possibilities)
}

function getEntropy(password, possibilities) {
    const entropy_elem = document.getElementById("entropy") 

    let entropy = Math.floor(Math.log2(possibilities.length**password.length) * 10) / 10
    let status = "Don't use this. Just don't."

    if (entropy > 20) status = "Very Weak"
    if (entropy > 40) status = "Weak"
    if (entropy > 60) status = "Medium"
    if (entropy > 90) status = "Strong"
    if (entropy > 140) status = "Very Strong"

    entropy_elem.innerText = `Entropy: ${entropy} bits (${status})`
}

document.getElementById("generate").onclick = function() {
    copy_elem.innerText = "Copy"
    generatePassword(document.getElementById("length").value)
}

window.onload = function() {
    document.getElementById("length").value = 16
    generatePassword(16)
  }