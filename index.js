class saintSeya{
    constructor(nomeDoCavaleiro, idade, nivel, ataque) {
        this.nomeDoCavaleiro = nomeDoCavaleiro;
        this.idade = idade;
        this.nivel = nivel;
        this.ataque = ataque;
    }


    escrever(){
        console.log(`O ${this.nomeDoCavaleiro} atacou usando ${this.ataque}`);
    }
}

let seiyaPegasus = new saintSeya("Seiya de Pegasus", "16 anos", "Bronze", "Meteoro de Pegasus");
let hercules = new saintSeya("Hercules", "21 anos", "Prata", "Kornephoros");
let dokhoLibra = new saintSeya("Dokho de Libra", "202 anos", "Ouro", "Cólera dos 100 Dragões");
let julianPoseidon = new saintSeya("Julian Poseidon", "16", "Deus", "Tridente de Poseidon");


    seiyaPegasus.escrever();
    hercules.escrever();
    dokhoLibra.escrever();
    julianPoseidon.escrever();