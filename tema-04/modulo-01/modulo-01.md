# Módulo 1: Conceitos gerais e similaridades com o JavaScript

Ao final deste módulo, você será capaz de reconhecer os conceitos gerais e similaridades com o JavaScript.

## Fundamentos do TypeScript

Agora, vamos conhecer os principais aspectos da linguagem de programação TypeScript, o que nos permitirá criar bases sólidas para desenvolver aplicações mais completas.

## O que é a linguagem de programação TypeScript?

TypeScript (TS) é uma linguagem de programação baseada na linguagem de programação JavaScript (JS). A sua principal característica é a possibilidade de utilizar tipos estáticos, classes e interfaces. Confira alguns aspectos fundamentais da linguagem:

1. Fortemente tipada
2. Orientada a objetos
3. Compilada

O TS foi desenvolvido pela Microsoft como resultado do trabalho de Anders Hejlsberg – que projetou a linguagem de programação C#. Uma das definições muito comuns sobre o TS é que ele é um superconjunto tipado e compilado de JS, e, na prática, é o JavaScript com recursos adicionais.

### Recomendação

Em especial para os desenvolvedores de aplicações web, utilizar o TS traz vantagens no sentido de construir aplicações mais tolerantes a falhas. Além disso, é um software de código aberto.

## JavaScript *versus* TypeScript: semelhanças e diferenças

Vamos conhecer os principais aspectos da linguagem de programação TypeScript, por meio de exemplos simples, para assimilarmos como ela funciona.

## JavaScript e TypeScript: pontos em comum

A origem do TypeScript está nas limitações do JavaScript, pois o JavaScript foi desenvolvido como uma linguagem de programação do lado do cliente que passou a ser usado como uma linguagem de programação do lado do servidor.

![Logotipo TypeScript.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/61a41df5-cbe2-47ea-a8d0-23309f27ae6f/image.png)

Logotipo TypeScript.

No entanto, ficou evidente que, à medida que o código crescia, ele se tornava mais complexo e difícil de gerenciar, o que impediu que o JavaScript tivesse sucesso como uma tecnologia do lado do servidor. Por isso, então, houve a necessidade de criar o TypeScript. Ambas as linguagens, naturalmente, têm muitas semelhanças, das quais podemos destacar (FREEMAN, 2019):

- O código de um projeto do TypeScript é convertido em código JavaScript simples, pois os browsers não podem interpretá-lo de forma nativa. Isso significa que o código escrito em TypeScript é compilado e convertido para JavaScript.
- Qualquer código escrito em JavaScript pode ser convertido em TypeScript alterando a extensão de `.js` (JavaScript) para `.ts` (TypeScript), significando que JavaScript é TypeScript, visto que TS é um superconjunto de JS.
- Como consequência dos dois primeiros itens, o TypeScript pode ser compilado para ser executado em qualquer navegador, dispositivo ou sistema operacional, ou seja, ele não é específico para nenhum ambiente.

O TypeScript pode ser utilizado pelos desenvolvedores para usar código JavaScript já existente e incorporar bibliotecas.

## Diferenças entre JavaScript e TypeScript

Apesar das semelhanças entre as duas linguagens de programação, existem algumas diferenças marcantes. Entre essas diferenças estão:

### TypeScript

- É uma linguagem de programação orientada a objetos.
- Possui o recurso de tipos estáticos.
- Suporta interfaces (recurso de programação orientada a objetos).

### JavaScript

- É uma linguagem de script.
- Não possui o recurso de tipos estáticos.
- Não suporta interfaces (recurso de programação orientada a objetos).

## Codificando uma aplicação com TypeScript

Agora, vamos conhecer um dos ambientes de programação em que você vai testar rapidamente seus códigos da linguagem de programação TypeScript e compartilhar com outras pessoas. Para isso, apresentaremos como codificar uma aplicação.

## Como fazer testes rápidos de aplicações com TypeScript

Existem algumas formas de testar uma aplicação desenvolvida com TypeScript. Uma delas é fazer a instalação local via npm. O passo a passo para esse tipo de instalação pode ser encontrado em: [www.typescriptlang.org/download](http://www.typescriptlang.org/download).

Nesse trabalho, vamos executar nosso script on-line com o compilador oficial. Para isso, acesse o link: [www.typescriptlang.org/play/index.html](http://www.typescriptlang.org/play/index.html).

Ao acessarmos esse endereço, veremos uma tela semelhante à seguinte:

![Ambiente de desenvolvimento on-line do TypeScript.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/afb66567-2de5-414e-82fe-daf97e136be2/image.png)

Ambiente de desenvolvimento on-line do TypeScript.

Nesse ambiente, desenvolveremos todos os nossos exemplos. A seguir, apresentamos o código de “boas-vindas” no TypeScript:

```ts
const mensagem = "Boas-vindas Programador(a) FrontEnd!";
console.log(mensagem);
```

Agora, vamos selecionar esse código e copiá-lo para o ambiente on-line de desenvolvimento do TypeScript e, em seguida, devemos pressionar o botão “Run”. Confira!

### Passo 1: Escrever o código em TypeScript

![Primeiro programa em TypeScript.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/626c387c-b73e-4d9b-80db-c8af0531f7b5/image.png)

Primeiro programa em TypeScript.

### Passo 2: Pressionar o botão ”Run” para executar o código

![Primeiro programa em TypeScript.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/ab491877-4c3e-4e52-aaf9-ac5088c28c0d/image.png)

Primeiro programa em TypeScript.

### Passo 3: É apresentada a saída da execução

![Primeiro programa em TypeScript.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/3e6ba67e-571a-4444-b1fc-908a29c35d50/image.png)

Primeiro programa em TypeScript.

Esse ambiente é excelente para aprender a programar sem a necessidade de fazer instalações e configurações locais. Além disso, temos a opção de compartilhar o projeto com outras pessoas. Para isso, basta pressionar o botão “Share”, copiar o endereço que ele fornece e enviar para outras pessoas. Na imagem a seguir, mostramos o processo.

![Como compartilhar código on-line do TypeScript.](https://stecine.azureedge.net/repositorio/00212ti/07666/img/04.png)

Como compartilhar código on-line do TypeScript.

Os nossos próximos passos serão desenvolver vários exemplos que comparam as linguagens de programação JavaScript e TypeScript.

## Manipulação de variáveis string

Vamos iniciar o nosso processo de aprendizado com a utilização de variáveis do tipo string, que são cadeias de caracteres. Primeiro, vamos ao código em JavaScript:

```js
let vcadeiaJS = "Isto é um teste.";
console.log("Resultados com JavaScript");
console.log(vcadeiaJS);
```

Agora, vamos implementar uma versão semelhante para TypeScript:

```ts
let vcadeiaTS: string = "Isto é um teste.";
console.log("Resultados com TypeScript");
console.log(vcadeiaTS);
```

As saídas dos dois códigos são semelhantes. Qual foi, então, a principal diferença entre ambos? A diferença principal está na declaração da variável usada para armazenar a mensagem com os resultados. No caso do TypeScript, tivemos que indicar que ela é do tipo string.

## Utilização de comandos condicionais e iterativos

Conheça agora a sintaxe e como utilizar os comandos condicionais e iterativos. Esses comandos são utilizados para estabelecer o comportamento de um programa a partir da entrada de dados.

## Trabalhando com comandos condicionais

Agora que já aprendemos como declarar variáveis com tipos e utilizar os operadores lógicos e relacionais no TypeScript, vamos ver como utilizar os comandos condicionais `if-else`. A ideia é bem simples: basicamente, testamos se uma condição é verdadeira. Se ela realmente for verdadeira, então, o programa passa executar o bloco de comandos associados ao comando `if`, senão ele vai para o comando `else`, caso esse seja utilizado no programa (ABREU, 2017).

Confira um exemplo de como utilizar esses comandos condicionais:

```ts
let mediaFinal: number = 8.5;
if (mediaFinal == 10) {
  console.log("Resultado excelente!");
} else if (mediaFinal > 8) {
  console.log("Parabéns!");
} else if (mediaFinal >= 7) {
  console.log("Aprovado!");
} else {
  console.log("vamos estudar mais!");
}
```

No TypeScript, podemos, ainda, utilizar o operador ternário, que tem a seguinte sintaxe: `x = teste? valor1 : valor2;`

Ou seja, se o teste for verdadeiro, então, a variável `x` recebe o `valor1`, caso contrário, a variável `x` recebe `valor2`.

Veja um exemplo de código que utiliza o operador ternário no TypeScript:

```ts
let podeVotar: string;
let idade: number = 17;
podeVotar = idade < 16 ? "Muito jovem para votar" : "já pode votar";
console.log(podeVotar);
```

## Trabalhando com comandos iterativos

Quando trabalhamos com vetores, ou listas, é normal que tenhamos que manipulá-los. Para isso, utilizamos os comandos iterativos. O TypeScript possui dois comandos iterativos: `for` e `while`. O comando `for`, em especial, pode ser usado de diferentes modos. No modo tradicional, ele possui a seguinte sintaxe: `for`(início; condição; incremento ou decremento)

Mas há outra versão baseada na teoria dos conjuntos com a seguinte sintaxe: `for`(elemento `of` conjunto)

Nesse exemplo, podemos ver as duas versões do comando “`for`”:

```ts
let vetor: number[] = [7, 5, 10, 20, 30, 40, 2, 1, 1];
let maior: number;

//forma 1: percorrendo um vetor através dos índices dele
let n = vetor.length;
maior = vetor[0];
for (let i = 1; i < n; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}
console.log("Forma 01: O maior elemento do vetor é:" + maior);

//forma 2: percorrendo os elementos do vetor
maior = vetor[0];
for (var val of vetor) {
  if (val > maior) {
    maior = val;
  }
}
console.log("Forma 02: O maior elemento do vetor é:" + maior);
```

Agora, vamos analisar o comando `while`. Ele também tem duas versões: uma em que o teste é realizado antes de entrar no bloco de comandos associados a ele e outra em que o teste só é realizado após a execução do bloco de comandos.

Observe um exemplo com as duas versões do comando `while`:

```ts
let vetorw: number[] = [7, 5, 40, 20, 70, 50, 2, 1, 1];
let maiorw: number;
let i: number;
let tam: number = vetorw.length;
//forma 1: teste é realizado antes de entrar no bloco de comandos
i = 0;
maiorw = vetorw[0];
while (i < tam) {
  if (vetorw[i] > maiorw) {
    maiorw = vetorw[i];
  }
  i++;
}
console.log("Forma 01: O maior elemento do vetor é:" + maiorw);

//forma 2: teste é realizado depois de entrar no bloco de comandos
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
```

Aqui, fechamos os conhecimentos básicos do TypeScript. Teste todos esses códigos e faça pequenas modificações para analisar o comportamento deles. Mais adiante, vamos aprender alguns assuntos mais avançados do TypeScript.

## Escrevendo o código de ordenação de um vetor em TypeScript

Nesta atividade prática, escreveremos o código em TypeScript que ordena um vetor em ordem crescente. Para demostrar a execução da atividade, apresentaremos o código que ordena um vetor em ordem decrescente.

## Roteiro de prática

Nesta atividade prática, você deverá codificar uma aplicação TypeScript que ordena um vetor em ordem crescente, usando o método da bolha. Confira a seguir, o passo a passo!

1. Abrir o sítio “typescriptlang.org/play”.
2. Declarar um vetor de 10 posições, inicializando seu conteúdo com números inteiros aleatórios fora de ordem.
3. Escrever o método da bolha em TypeScript. O algoritmo básico está codificado a seguir em pseudocódigo:

```ts
troca = verdadeiro
enquanto (troca)
     início
         troca = falso
         para i = 0 ate N-1 faça
              início
                   se (vetor[i] > vetor[i+1])
                         inicio
                             troca = verdadeiro
                             aux = vetor[i]
                             vetor [i] = vetor[i+1]
                             vetor [i] = aux
                         fim
                fim
      fim
```
