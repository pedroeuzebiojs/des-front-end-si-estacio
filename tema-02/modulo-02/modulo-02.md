# Módulo 2: Manipulando a árvore DOM com jQuery

Ao final deste módulo, você será capaz de descrever o modo de manipulação da árvore DOM com o framework jQuery.

## Programação Javascript com uso de Frameworks

A utilização de **frameworks** facilita e agiliza o trabalho de programação. Por meio desses recursos, temos acesso a uma série de códigos e funcionalidades prontas, diminuindo a quantidade de códigos que precisamos escrever. Nesse contexto, veremos, a partir de agora, o framework jQuery, um dos mais conhecidos frameworks Javascript.

## A biblioteca jQuery

É uma biblioteca Javascript rápida, pequena e rica em recursos. Essa biblioteca simplifica o processo de manipulação de documentos HTML, manipulação de eventos, animação e AJAX, com uma API fácil de usar, que funciona em vários navegadores (JQUERY, 2020).

O primeiro passo para utilizar a biblioteca jQuery é incluí-la em nosso código. Conheça duas maneiras de fazer isso!

1. Realizar o download com armazenamento local.
2. Criar um link a partir de um repositório remoto.

Além disso, é importante saber que há versões diferentes, com tamanhos diversos. Além de estar em contínua evolução, são disponibilizados diferentes pacotes: **completos**, **compactados** e **slim**. Esse último exclui alguns recursos, como os módulos AJAX e o módulo de efeitos.

### O jQuery, além de ser uma biblioteca rica em recursos, é gratuito

O fragmento de código a seguir demonstra como incorporar a biblioteca a partir de um recurso remoto. Para utilizá-la localmente, basta fazer o download da versão desejada, modificando o endereço do atributo “src”.

```html
<!-- Versão completa -->
<script
  type="text/javascript"
  src="https://code.jquery.com/jquery-3.6.4.js"
></script>
<!-- Versão completa, compactada/minimificada -->
<script
  type="text/javascript"
  src="https://code.jquery.com/jquery-3.6.4.min.js"
></script>
<!-- Versão slim, sem compactação/minimificação -->
<script
  type="text/javascript"
  src="https://code.jquery.com/jquery-3.6.4.slim.js"
></script>
<!-- Versão slim, com compactação/minimificação -->
<script
  type="text/javascript"
  src="https://code.jquery.com/jquery-3.6.4.slim.min.js"
></script>
```

Não é necessário incorporar todas as versões demonstradas no fragmento. O exemplo serve apenas para mostrar as diferentes versões e os tamanhos disponíveis. Na prática, escolha uma versão e um tamanho e incorpore apenas o arquivo relacionado.

No fragmento anterior, foi utilizada a versão 3.6.4. Como mencionado, é possível utilizar versões anteriores. Nesse caso, tome os cuidados necessários para garantir que os recursos utilizados em sua página possuam suporte em versões mais recentes, se, em algum momento, decidir atualizar a versão.

A seguir, veremos alguns recursos jQuery relacionados à árvore DOM e a seletores.

## Manipulando a árvore DOM

A árvore **DOM** disponibiliza uma representação estruturada do documento HTML em formato de árvore. Logo, a partir desse modelo, temos acesso a qualquer elemento de uma página. Observe!

![Árvore DOM.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/8d897d3d-97ae-4ede-822a-e0b042ed5be4/image.png)

Árvore DOM.

A biblioteca jQuery fornece vários recursos para manipulação do DOM. Veremos alguns desses recursos a seguir.

## Selecionando elementos

Com jQuery, podemos referenciar qualquer elemento da página HTML utilizando o objeto.

```js
$(seletor);
```

Ao analisar a sintaxe, temos o método `$()`, que recebe como parâmetro um seletor. Tal seletor pode ser um elemento DOM, um `array` contendo um conjunto de elementos DOM ou um `objeto`. Veja o código a seguir:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <p id="paragrafo_texto">Texto do parágrafo</p>

    <ul>
      <li class="item_lista">Primeiro item</li>
      <li class="item_lista">Segundo item</li>
      <li class="item_lista">Terceiro item</li>
    </ul>

    <script type="text/javascript">
      // imprimirá Texto do parágrafo
      console.log($("#paragrafo_texto").html());

      // imprimirá Primeiro item
      console.log($(".item_lista").eq(0).html());
    </script>
  </body>
</html>
```

Agora, vamos analisar as instruções do código!

- Primeira instrução
  Na primeira instrução “`console.log`”, o atributo “`id`” da tag `<p>` foi passado como seletor. Perceba que, nesse caso, o nome do identificador foi precedido pelo símbolo “`#`”. Além disso, ambos foram englobados por aspas duplas.
- Segunda instrução
  Já na segunda instrução “`console.log`”, foi passado como seletor o nome da classe atribuída aos elementos `<li>`. Nesse caso, para referenciar classes, utilizamos o “`.`” antes do nome delas. Além disso, foram utilizadas aspas simples – só para demonstrar que podem ser utilizadas as aspas duplas e as aspas simples. Por fim, na segunda instrução, foi utilizado o método `eq`, que recebeu como parâmetro o número 0, ou seja, foi selecionado o primeiro elemento ao qual foi atribuída a classe “`item_lista`”. Cabe destacar ainda que, para acessar o conteúdo das tags, foi utilizado o método `html()`.

Veja outra maneira de selecionar elementos. Nesse caso, utilizaremos o método `:not.` Vamos ao código!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.5.1.js"
    ></script>
  </head>
  <body>
    <p id="paragrafo_texto">Texto do parágrafo</p>

    <ul>
      <li class="item_lista">Primeiro item</li>
      <li class="item_lista">Segundo item</li>
      <li>Terceiro item</li>
    </ul>

    <script type="text/javascript">
      // imprimirá Terceiro item
      console.log($("li:not(.item_lista)").html());
    </script>
  </body>
</html>
```

Veja que selecionamos o único elemento `<li>` que não possui a classe “`item_lista`”. Esses foram exemplos simples de como é possível selecionar elementos da árvore DOM utilizando jQuery.

## Adicionando e removendo elementos

Existem alguns métodos jQuery que permitem a inserção e a remoção de elementos na árvore DOM. Vamos ver alguns exemplos!

```html
<!DOCTYPE html>
<html lang="pt-BR">
 <head>
  <meta charset="utf-8">
  <title>jQuery</title>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
 </head>
 <body>
  <div>
   <h1>Título na primeira div</h1>
  </div>

  <div>
   <h2>Subtítulo na segunda div</h1>
  </div>

  <ul id="container_lista">
   <li class="item_lista">Primeiro item</li>
   <li class="item_lista">Segundo item</li>
   <li>Terceiro item</li>
  </ul>

  <script type="text/javascript">
   // Adicionando um novo item <li> ao final, dentro da tag <ul> com identificador "container_lista"
   $('#container_lista').append('<li>Quarto Item</li>');

   // Adicionando uma tag <p> após cada tag <h1> e <h2>
   $('h1,h2').after('<p>Texto do parágrafo inserido após cada tag h1 e h2 </p>');

   // Adicionando uma tag <h3> antes da tag <ul> com identificador "container_lista"
   $('#container_lista').before('<h3>Subtítulo da Lista não ordenada</h3>');
  </script>
 </body>
</html>
```

Para ver o resultado dos métodos utilizados, copie o código, salve-o como arquivo “`.html`” e abra-o no navegador. Compare a estrutura inicial do código HTML e veja que, por meio dos métodos jQuery, novos elementos foram adicionados ao documento. Além disso, verifique também como ficou a árvore DOM após as modificações em questão no inspecionador de elementos.

### **Atenção!**

Leia os comentários constantes no próprio código, no qual são passados mais detalhes sobre os métodos utilizados. Repare também que, junto com o método `after`, foi utilizado um novo tipo de seletor, o seletor múltiplo.

Vamos agora remover elementos de forma dinâmica, ou seja, removeremos, em tempo de execução, alguns elementos inicialmente presentes no documento HTML. Para isso, utilizaremos o código HTML resultante do código anterior!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <div>
      <h1>Título na primeira div</h1>
      <p>Texto do parágrafo inserido após cada tag h1 e h2</p>
    </div>

    <div>
      <h2>Subtítulo na segunda div</h2>
      <p>Texto do parágrafo inserido após cada tag h1 e h2</p>
    </div>

    <h3 class="item_lista">Subtítulo da Lista não ordenada</h3>

    <ul id="container_lista">
      <li class="item_lista">Primeiro item</li>
      <li class="item_lista">Segundo item</li>
      <li>Terceiro item</li>
      <li>Quarto Item</li>
    </ul>

    <script type="text/javascript">
      // Removendo o último parágrafo da página
      // Para acessar o primeiro elemento, utilizamos 0. Já para acessar o último, usamos -1
      $("p").eq(-1).remove();

      // Removendo apenas os elementos <li> com a classe "item_list"
      // Repare que a tag <h3> também possui esse classe
      $("li.item_lista").remove();
    </script>
  </body>
</html>
```

## Manipulando conteúdo de elementos do DOM

Até aqui, vimos como manipular os elementos do DOM utilizando jQuery. Agora, veremos como manipular o conteúdo dos elementos, assim como os seus atributos. No exemplo a seguir, são demonstradas algumas formas de remover e adicionar conteúdo. Além disso, novos seletores são demonstrados.

Copie o código e salve como um arquivo “`.html`”. Em seguida, comente o código Javascript e carregue a página no navegador. Em sequência, descomente linha a linha os códigos JS, salve e recarregue a página. Desse modo, você conseguirá observar melhor a diferença entre o conteúdo original e o conteúdo após as manipulações realizadas.

Vamos ao exemplo!

```html
<!DOCTYPE html>
<html lang="pt-BR">
 <head>
   <meta charset="utf-8">
   <title>jQuery - Manipulando Conteúdo</title>
   <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.js"></script>
 </head>
 <body>
   <div>
     <h1>Título na primeira div</h1>
     <p>Texto inicial do parágrafo da primeira div.</p>
   </div>

   <div>
     <h2>SubTítulo na segunda div</h1>
     <p>Texto inicial do parágrafo da segunda div. </p>
   </div>

   <h3>Parágrafos com span</h3>

   <p>
     Texto do parágrafo.
     <span>Texto do span</span>
   </p>

   <p>
     Texto do parágrafo.
     <span>Texto do span</span>
   </p>

   <p>
     Texto do parágrafo.
     <span>Texto do span</span>
   </p>

   <p>
     Texto do parágrafo.
     <span>Texto do span</span>
   </p>

   <script type="text/javascript">
     // Sobrescrevendo o texto atual do primeiro parágrafo do documento por um novo texto
   $('p').first().html("Esse texto sobrescreve o inicial.");

     // Adicionando um novo conteúdo ao conteúdo já existente
     // Foi utilizado o seletor first() para selecionar o primeiro elemento <p>
     // $('p').first().append("E esse texto é adicionado ao final do novo texto.");

     // Uma outra forma de adicionar um novo conteúdo junto ao conteúdo já existente.
     // Foi utilizado o seletor last() para selecionar o último elemento <p>
     // $('p').last().html($('p').last().html() + "Esse texto é adicionado ao final do texto existente." );

     // Removendo o conteúdo da tag <span>
     // Foi utilizado o seletor find() para localizar os elementos <span> dentro dos elementos <p>
     //$('p').find('span').html('');
   </script>
 </body>
</html>
```

## Usando jQuery para manipular a árvore DOM

Como vimos, um dos valiosos recursos da lib jQuery é permitir a manipulação da árvore DOM. A seguir, colocaremos em prática o que vimos sobre esse assunto, criando, de forma dinâmica, algumas tags, incluindo seu conteúdo, em uma página HTML.

## Roteiro de prática

Para a realização desta prática, você precisará de algumas ferramentas: um editor de textos – pode ser o próprio Bloco de Notas do Windows ou o Nano Editor do Linux, ou então o software (gratuito) Notepad++. Precisará também de um navegador – Google Chrome, Firefox, MS Edge etc. Em termos de conceitos, reveja tudo o que aprendemos sobre a manipulação da árvore DOM utilizando jQuery. Você aplicará alguns dos recursos dessa biblioteca para realizar o exercício proposto. Agora, vamos ao roteiro:

1. No editor, crie a estrutura base de uma página HTML – `DOCTYPE`, `html`, `head` e `body`. Lembre-se de abrir e fechar corretamente cada tag. Além disso, não declare, inicialmente, nenhum elemento dentro da tag `body`.
2. Utilizando jQuery, insira, dentro da tag `body`, os seguintes elementos e respectivos conteúdos:
   1. Tag `h1` (com `id` = “`titulo-inicial`”), com o conteúdo “Título Inicial”.
   2. Tag `p`, na qual deverá ser inserido um parágrafo de texto qualquer (dica: use o *lore ipsum*).
   3. Tag `img`, cujo atributo “`src`” deverá conter o endereço de uma imagem válida. Por fim, salve a página no editor e a abra no navegador para ver o resultado – que deverá ser semelhante/próximo ao visto na imagem abaixo.
3. Por fim, salve a página no editor e a abra no navegador para ver o resultado – que deverá ser semelhante/próximo ao visto na imagem abaixo.

![Resultado da prática no navegador.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/c8e622ca-bda6-49f4-9687-9415559dd527/image.png)

Resultado da prática no navegador.

A resolução da prática poderá ser feita de diferentes maneiras, como usando o código a seguir:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Usando jQuery para manipular a árvore DOM</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>

  <body>
    <script type="text/javascript">
      // Incluindo a tag H1 dentro da tag Body
      $("body").append("<h1 id='titulo-inicial'>Título inicial</h1>");
      $("body").append(
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
      );
      $("body").append(
        "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Boxmodell-detail.png/220px-Boxmodell-detail.png' alt='Imagem' />"
      );
    </script>
  </body>
</html>
```
