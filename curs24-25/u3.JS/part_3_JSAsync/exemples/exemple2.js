console.log("Inici del programa");
function divideix(dividend, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) reject("Error: Divisió per zero!");
        else resolve(dividend / divisor);
    });
}

divideix(10, 2)
    .then(result => console.log("Resultat: " + result))
    .catch(error => console.error(error));
console.log("Final del programa");