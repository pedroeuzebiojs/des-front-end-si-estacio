# Módulo 1: Conceitos gerais e sintaxe básica da linguagem Javascript

Ao final deste módulo, você será capaz de reconhecer os conceitos gerais e a sintaxe básica da linguagem Javascript.

## **Incorporando o Javascript (JS) em páginas HTML**

O Javascript é uma linguagem que roda no lado cliente (considerando a interação cliente x servidor). Isso significa que, para serem executados, os códigos Javascript precisam estar inseridos em uma página web, que será renderizada pelos navegadores – processo no qual o código JS inserido na página é interpretado e executado. A inclusão de códigos JS em código HTML pode ser feita de diferentes formas.

Em relação à utilização do Javascript em páginas web, o primeiro passo para usá-lo é incorporá-lo ao documento HTML. Conheça duas maneiras de fazer isso!

1. Inserindo o código Javascript na seção `<head>`, ao final da página, dentro da tag `<script>`.
2. Incorporando um arquivo externo, contendo apenas código JS, através da tag `<script>` e de seu atributo “`src`”, onde deve ser passado o endereço do arquivo

Considere as proposições a seguir!

### **Recomendação**

Mantenha seu código Javascript em um arquivo externo, com a extensão “`.js`”. Além disso, sempre que possível, incorpore o script externo ao final da página HTML – imediatamente antes do fechamento da tag `<body>`. Além de tornar o carregamento da página mais rápido, uma vez que ela é renderizada de cima para baixo, ou seja, ao encontrar a tag `<script>` logo no `<head>`, o navegador só continuará a carregar o restante da página após interpretar e executar todo o código JS. Essa boa prática também permite que elementos da página sejam manipulados pelo JS, pois ele será carregado apenas após todos os elementos já estarem disponíveis. Por outro lado, caso algum conteúdo ou funcionalidade da página dependa do JS para ser corretamente exibido, será necessário mantê-lo no `<head>`. Em resumo: avalie caso a caso.

Os exemplos citados de incorporação podem ser vistos em sequência! O exemplo apresentado à esquerda é a prática recomendada, enquanto à direita exemplifica a forma menos indicada.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Incorporação de JS em Páginas HTML</title>
  </head>
  <body>
    <!-- Códigos HTML -->
    <!-- Fim dos Códigos HTML -->
    <!-- Incorporação do JS externo -->
    <script type="text/javascript" src="script.js"></script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Incorporação de JS em Páginas HTML</title>
    <!-- Incorporação do JS interno -->
    <script type="text/javascript">
      /* Códigos Javascript */
    </script>
  </head>
  <body>
    <!-- Códigos HTML -->
  </body>
</html>
```

---

## **Variáveis: escopo e tipos**

Em uma linguagem de programação, quando falamos de escopo, estamos tratando do local em que uma variável existe dentro de um programa. Nesse sentido, em Javascript, uma variável pode existir a nível global ou a nível de bloco.

### **Dica**

Considere como bloco todo código escrito dentro de chaves “`{}`” (estruturas condicionais, estruturas de repetição e funções, por exemplo).

Veja esses conceitos na prática!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Escopo de variáveis em JS</title>
    <script type="text/javascript">
      var msg = "Conteúdo da variável msg fora do bloco de instrução";

      // Bloco de Instrução
      // Em blocos de instrução, quando redeclarada, a variável sobrescreve a existente
      if (true) {
        var msg = "Conteúdo da variável msg dentro do bloco de instrução";
        console.log(msg); // Imprimirá "Conteúdo da variável msg dentro do bloco de instrução"
      }

      console.log(msg); // Imprimirá "Conteúdo da variável msg dentro do bloco de instrução"
      var msg2 = "Conteúdo da variável msg2 fora do bloco de função";

      // Bloco de Função
      // Em blocos de Função, quando redeclarada, a variável não sobrescreve a existente
      // Logo, a nova variável só existe a nível do escopo da função
      imprimeVariavel();

      function imprimeVariavel() {
        var msg2 = "Conteúdo da variável msg2 dentro do bloco de função";
        var msg3 =
          "Conteúdo da variável msg3 - só existente dentro do bloco de função";
        console.log(msg2); //Imprimirá "Conteúdo da variável msg2 dentro do bloco de função"
      }

      console.log(msg2); // Imprimirá "Conteúdo da variável msg2 fora do bloco função"
      console.log(msg3); // Disparará um erro dizendo que a variável msg3 não foi definida
    </script>
  </head>
  <body></body>
</html>
```

Agora, siga estas etapas!

1. Copie o código anterior e salve em um documento com a extensão “`.html`”. Em seguida, abra esse arquivo no navegador.
2. Abra o inspecionador de elementos e selecione a aba **`console`**. Recarregue a página. Veja, no inspecionador, a saída dos comandos “`console.log`”, utilizados no exemplo.
3. Leia, com atenção, os comentários existentes no próprio código. Perceba a diferença entre a sobrescrita da variável **`msg`**, dentro do bloco `if`, e da variável **`msg2`**, dentro do bloco de função. Por fim, veja o que acontece com a variável **`msg3`**.

Em linhas gerais, uma variável em Javascript tem comportamento distinto de acordo com o bloco no qual foi declarada e teve valores atribuídos. O destaque, no código anterior, vai para a variável `msg2` definida e inicializada dentro da função “`imprimeVariavel`”. Nesse caso, embora precedida pela palavra reservada “`var`”, essa variável não possui escopo global, mas local, por ter sido definida dentro da função.

Variáveis definidas dentro de funções possuem **escopo local**, ficando restritas ao escopo da função.

---

## **Utilizando var, let e const**

Como visto no exemplo anterior, é preciso ter certos cuidados na declaração, inicialização e utilização das variáveis em JS. Nesse sentido, a utilização das palavras reservadas **`var`**, **`let`** e **`const`**, todas associadas à declaração de variáveis, ajuda-nos a ter controle total sobre o seu escopo. A seguir, veja como e quando utilizar cada uma delas!

- var
  - A utilização dessa palavra reservada, na declaração de variáveis, concede escopo global a elas, ou seja, variáveis declaradas utilizando var podem ser acessadas em qualquer ponto do script, dentro e fora de blocos – com exceção dos blocos de funções, nos quais, como já mencionado, as variáveis possuem escopo apenas local.
- let
  - A partir do lançamento do Javascript 6 –ECMAScript 6 ou ES2015 –, tornou-se possível melhorar o controle sobre o escopo de variáveis em JS com a introdução da palavra-chave let. Embora não suportada por todos os navegadores (no Internet Explorer, ela só está disponível a partir da versão Edge), essa nova palavra reservada juntou-se às demais (`var` e `const`), tendo como função, sobretudo, restringir o acesso a variáveis a nível de bloco. Uma variável declarada com `let`, dentro de um bloco, não pode ser acessada em nenhum outro local do script, a não ser no bloco em questão. Isso implica ainda que, caso declarada fora de um bloco, essa variável passa a ter escopo global, assim como as variáveis declaradas com `var`.
- const

  - Nas linguagens de programação, uma variável declarada como constante (`const`) é uma variável cujo valor é fixo, ou seja, o valor atribuído a essa variável não pode ser alterado.
    Em Javascript, utilizamos `const` para declarar uma variável como constante. O seu uso é indicado para garantirmos que o valor atribuído a uma variável não será alterado ao longo da execução de nosso programa, ou seja, para assegurarmos que alterações não previstas ou indesejadas sejam realizadas no valor de determinada variável. Observe um exemplo simples de utilização de constante!

    ```jsx
    const url = "[www.dominio.com.br](http://www.dominio.com.br/)";
    console.log(url); // imprimirá [www.dominio.com.br](http://www.dominio.com.br/)
    // gerará um erro, pois uma constante não pode ser 'reatribuída'
    url = "[www.novo-dominio.com.br](http://www.novo-dominio.com.br/)";
    ```

### **Atenção!**

Utilizar `let`, `var` e `const` permite maior controle em relação à disponibilidade das variáveis e ao seu conteúdo, evitando erros de sobrescrita ou de acesso, entre outros.

---

## Arrow functions

Uma importante novidade foi introduzida na especificação Javascript ES6, as `arrow functions`, que podem ser definidas como uma forma mais simples de se criar funções em JS. Confira um exemplo em que uma `arrow function` que faz a multiplicação de dois números é criada e utilizada!

```jsx
const multiplicacao = (n1, n2) => {
  return n1 * n2;
};

console.log(multiplicacao(3, 2)); // imprimirá 6
```

Quando uma função possuir apenas uma expressão – no exemplo anterior, a única instrução é retornar à multiplicação dos dois números recebidos como parâmetros –, a sua sintaxe pode ser ainda mais simples. Veja como ficaria, nesse caso, o exemplo anterior!

```jsx
const multiplicacao = (n1, n2) => n1 * n2;
console.log(multiplicacao(3, 5)); // imprimirá 15
```

Por último, atente-se em um comparativo no qual o **método JS map** pode ser definido e utilizado com e sem `arrow function`!

```jsx
var cores = [
  { id: 1, nome: "Amarelo" },
  { id: 2, nome: "Verde" },
  { id: 3, nome: "Azul" },
  { id: 4, nome: "Branco" },
  { id: 5, nome: "Preto" },
];

// Caso você queira extrair apenas os nomes do array 'cores'

// Exemplo 1: utilizando um laço foreach

// Criando um novo array para receber os nomes
var nomesCores = [];

// Percorrendo o array cores e atribuindo ao novo array os nomes
cores.forEach(function (cor) {
  nomesCores.push(cor.nome);
});

console.log(nomesCores); // imprimirá ["Amarelo", "Verde", "Azul", "Branco", "Preto"]

// Exemplo 2: utilizando arrow function
const coresNomes = cores.map((cor) => cor.nome);
console.log(coresNomes); // imprimirá ["Amarelo", "Verde", "Azul", "Branco", "Preto"]
```

---

## **Eventos**

São responsáveis por fornecer interatividade a uma página HTML, fazendo uso da linguagem Javascript.

### Exemplo

O clique do mouse em um link que abre uma janela modal ou revela um conteúdo até então escondido, como um submenu, faz uso de eventos.

Podemos criar inúmeras funcionalidades, além das duas mencionadas anteriormente, fazendo uso de eventos. Veja o exemplo a seguir. Embora simples, ele contém a sintaxe necessária para a criação de eventos utilizando apenas Javascript. Copie o código e salve-o em um arquivo com extensão “`.html`”. A seguir, abra o arquivo em um navegador e veja o que acontece.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Eventos em Javascript</title>
  </head>
  <body onload="escondeTexto()">
    <h1 id="titulo">
      Clique em qualquer lugar nesse texto para ver o conteúdo escondido.
    </h1>
    <p id="texto_escondido">
      Texto escondido, que só será mostrado após click na texto acima.
    </p>
    <script type="text/javascript">
      function escondeTexto() {
        var eP = document.getElementById("texto_escondido");
        eP.style.display = "none";
      }

      var hP = document.getElementById("titulo");
      hP.onclick = function () {
        document.getElementById("texto_escondido").style.display = "block";
      };
    </script>
  </body>
</html>
```

No exemplo anterior, foram utilizados os eventos onload, atribuído à tag `<body>`, e `onclick`, atribuído por programação à tag `<h1>`, com id “titulo”. No código em questão, foi utilizado apenas Javascript.

---

## **Utilizando Javascript em uma página HTML**

Com a prática a seguir, poderemos aplicar alguns dos conceitos básicos vistos sobre a linguagem Javascript, em especial, a inserção de código JS em páginas HTML e o escopo de variáveis. Sobre este último ponto, tal entendimento é fundamental, visto que as variáveis são um dos recursos mais usados quando programamos. Logo, é imprescindível sabermos onde declarar nossas variáveis, como atribuir e acessar os valores dessas variáveis.

---

## Roteiro de prática

Nossa prática consistirá na criação de uma página HTML simples, seguida da inserção de códigos Javascript, nos quais declaremos uma variável que deverá possuir escopo local. Para a resolução desse exercício, você precisará dos conhecimentos adquiridos ao longo do conteúdo e, em termos de ferramenta, de um editor de textos – pode ser o próprio Bloco de Notas do Windows ou o Nano Editor do Linux, ou então algo um pouco mais avançado, como o software (gratuito) Notepad++. Também precisará de um navegador – Google Chrome, Firefox, MS Edge etc. Agora, siga o roteiro a seguir:

1. Abra o editor de texto de sua preferência e insira as tags HTML básicas: Doctype, html, head, body etc.
2. Agora, insira o código JS (incorpore-o da forma como preferir) para:
   1. Declarar duas variáveis de escopo a nível de bloco.
   2. Atribuir valores – do tipo inteiro – a ambas as variáveis.
   3. Realizar uma operação matemática com as duas variáveis declaradas.
   4. Exibir o resultado da operação matemática no console (dentro do navegador, no inspecionador de elementos, aba console).

Algumas dicas adicionais sobre o roteiro: lembre-se do conceito de escopo local. Atente-se para o local e a forma como declarará suas variáveis e criará o código para realizar a operação matemática solicitada.

Como resolução, teremos o código a seguir!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Escopo de variáveis em JS</title>
    <script type="text/javascript">
      multiplicarValores();

      function multiplicarValores() {
        var num1 = 10;
        var num2 = 3;
        var resultado = num1 * num2;

        console.log(resultado);
        // A instrução acima imprimirá o resultado da operação matemática. Lembrando que
        // as variáveis num1, num2 e resultado só existem dentro da própria função.
      }

      console.log(
        "Conteúdo da variável resultado fora da função: " + resultado
      );
      // A instrução acima não conseguirá acessar o conteúdo da variável resultado,
      // uma vez que ela só existe dentro do escopo da função onde foi declarada.
      // A saída da instrução acima será: "resultado is not defined"
    </script>
  </head>
  <body></body>
</html>
```
