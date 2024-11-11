let vetorw: number[] = [7, 5, 40, 20, 70, 50, 2, 1, 1];
let maiorw: number;
let i: number;
let tam: number = vetorw.length;

// forma 1: teste é realizado antes de entrar no bloco de comandos
i = 0;
maiorw = vetorw[0];
while (i < tam) {
  if (vetorw[i] > maiorw) {
    maiorw = vetorw[i];
  }
  i++;
}
console.log("Forma 01: O maior elemento do vetor é:" + maiorw);

// forma 2: teste é realizado depois de entrar no bloco de comandos
i = 0;
tam = vetorw.length;
maiorw = vetorw[0];
do {
  if (vetorw[i] > maiorw) {
    maiorw = vetorw[i];
  }
  i++;
} while (i < tam);
console.log("Forma 02: O maior elemento do vetor é:" + maiorw);
