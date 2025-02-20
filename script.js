const readline = require('readline');

let cars = ["BMW", "Volvo", "Saab", "Ford"];
let colors = ["Preto", "Branco", "Vermelho", "Azul"];
let i = 0;
let text = "Escolha seu carro favorito: ";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chooseCar() {
    if (i < cars.length) {
        let car = cars[i];
        let color = colors[i];
        rl.question(`${text} ${car} (${color})? (s/n) `, (userChoice) => {
            if (userChoice.toLowerCase() === 's') {
                console.log(`Parabéns, seu carro favorito é ${car} da cor ${color}.`);
                rl.close();
                return;
            }
            i++;
            chooseCar();
        });
    } else {
        console.log("Nenhum carro foi escolhido.");
        rl.close();
    }
}

chooseCar();