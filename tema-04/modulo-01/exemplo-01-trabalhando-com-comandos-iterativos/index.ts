let vetor: number[] = [7, 5, 10, 20, 30, 40, 2, 1, 1];
let maior: number;

// forma 1: percorrendo um vetor através dos índices dele
let n = vetor.length;
maior = vetor[0];
for (let i = 1; i < n; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}
console.log("Forma 01: O maior elemento do vetor é:" + maior);

// forma 2: percorrendo os elementos do vetor
maior = vetor[0];
for (var val of vetor) {
  if (val > maior) {
    maior = val;
  }
}
console.log("Forma 02: O maior elemento do vetor é:" + maior);
