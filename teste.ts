console.clear ()


let teclado = require (`prompt-sync`)();

let nome: string = `Enzo Cassão Marini`; //nome, frase,
let nascimento: number = 2009;
let atributo: string = `gordo`
let condicao: boolean = false;

console.log(`O meu nome é ${nome} nasci em ${nascimento} e sou ${atributo}.`);

if (nascimento <= 2009){
    console.log(`Sim, executei essa linha`);
}
else if (nascimento < 2009){
    console.log(`Sim, executei essa linha`);
}
else{
    console.log(`Sim, executei essa linha`);
}

nome = teclado (`Digite o seu nome: `);
nascimento = parseInt(teclado(`Digite o ano de nascimento: `));
atributo = teclado (`Digite o seu atributo: `);

console.log(`Ola, meu nome é ${nome} nasci em ${nascimento} e sou ${atributo}.`);