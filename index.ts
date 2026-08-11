import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let systemName: string = "CS";
let version: number = 1.6;
let userName: string = "Kan";

console.log("==================================");
console.log("   " + systemName + " v " + version );
console.log(" ¡Bienvenido, " + userName + "!");
console.log("==================================");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
