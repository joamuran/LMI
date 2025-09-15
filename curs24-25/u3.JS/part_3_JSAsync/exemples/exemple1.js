console.log("Inici del programa");

setTimeout(() => console.log("Temporitzador de 0 ms"), 0);

Promise.resolve("Promesa resolta").then(console.log);

console.log("Final del programa");