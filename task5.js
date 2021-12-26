const checkForSpam = function(message) {
const word1 = ("spam");
const word2 = ("sale");

    if (message.toLowerCase().includes(word1)) {
        return message.toLowerCase().includes(word1);
    } else return message.toLowerCase().includes(word2);
    
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true