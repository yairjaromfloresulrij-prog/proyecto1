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

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tareas : Task[] = []
let siguienteId = 1;

const addTask = (titulo: string) => {

    let nuevaTarea: Task = {
        id: siguienteId,
        title: titulo,
        completed: false
};

    tareas.push(nuevaTarea);

    siguienteId++;
};
const listTasks = () => {
for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].completed == true) {
        console.log("[" + tareas[i].id + "] " + tareas[i].title + " - completed");
    } else {
        console.log("[" + tareas[i].id + "] " + tareas[i].title + " - pending");
    }
}
};
const removeTask = async () => {
let id = Number(await rl.question("Escribe el ID de la tarea: "));

for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id == id) {
        console.log("Tarea eliminada: " + tareas[i].title);
        tareas.splice(i, 1);
    }
 }
};
let opcion = "";

while (opcion != "4") {

    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Listar tareas");
    console.log("4. Salir");

    opcion = await rl.question("Elige una opción: ");
    if (opcion == "1") {

        let tarea = await rl.question("Escribe una tarea: ");
        tareas.push(tarea);

    } else if (opcion == "2") {

        let tarea = tareas.pop();
        console.log("Tarea eliminada: " + tarea);

    } else if (opcion == "3") {

        for (let i = 0; i < tareas.length; i++) {
            console.log((i + 1) + ". " + tareas[i]);
        }

    } else if (opcion == "4") {

        console.log("Saliste del programa");

    } else {

        console.log("Opción incorrecta");

    }
}


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();