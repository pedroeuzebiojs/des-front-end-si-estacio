# Módulo 3: Manipulando e tratando eventos com jQuery

Ao final deste módulo, você será capaz de analisar a forma de trabalho com eventos com o framework jQuery.

## **Manipulando eventos com jQuery**

Na engenharia de software como um todo, quando falamos de eventos, podemos estar nos referindo às ações realizadas pelo usuário – em uma página web ou na utilização de uma tela de um software desktop ou de um aplicativo móvel por ex. – ou a eventos gerados por outros eventos/funções/programas – de forma agendada ou a partir de algum tipo de interação/estímulo, humano ou não.

Ao longo deste conteúdo, e considerando o ambiente web/lado cliente, veremos como manipular e tratar eventos utilizando jQuery.

---

## Conceitos gerais sobre eventos em páginas HTML

Os eventos, no ambiente web, correspondem às ações realizadas pelos usuários em um elemento da página, como o clique ou o passar do mouse em um link, a seleção de opções ou a submissão de um formulário. Temos, então, eventos associados e acionados pela utilização do mouse e do teclado. Até mesmo o carregamento da página é um evento. Nesse contexto, conheça alguns termos muito comuns associados a evento!

- **`fire/fired`**
  - Associado ao momento em que um evento é “disparado”.
- **`listener`**
  - Associado ao ato de “ouvir”, monitorar, um elemento à espera do disparo de um evento.
- **`handler`**
  - Associado à ação de manipular determinado evento.

Embora seja possível tratar todos os eventos utilizando apenas Javascript, esse processo se torna mais intuitivo e simples ao fazermos uso de jQuery. Sendo assim, veremos como manipular e tratar eventos em uma página HTML com essa biblioteca.

---

## **Eventos `onload` e `window.onload`**

O evento onload ocorre quando um objeto, em uma página HTML, termina de ser carregado. Esse evento é normalmente utilizado na tag `<body>`, tornando possível que determinada ação seja realizada por meio de funções JS, quando a tag em questão terminar de carregar. Isso implica dizer que todas as imagens, scripts e arquivos CSS já foram carregados. Tal evento também pode ser utilizado com outras `tags`, como:

- `<frame>`
- `<iframe>`
- `<img>`
- `<input type=’image’>`
- `<link>`
- `<script>`
- `<style>`

O fragmento a seguir demonstra um exemplo de sua utilização, no qual um alerta é exibido na tela assim que o `<body>` terminar de ser carregado.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Evento onload</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body onload="alert('O <body> terminou de ser carregado')">
    <!-- Conteúdo HTML -->
  </body>
</html>
```

Assim como o `onload`, o evento `window.onload` ocorre quando determinado conteúdo é completamente carregado. Em JS, o objeto `window` está relacionado à janela do navegador – que contém um elemento DOM. Já o objeto `document` está relacionado ao DOM carregado na janela em questão. Portanto, o evento `window.onload` também é disparado quando todo o conteúdo da página é carregado.

### **Dica**

Tendo em vista que a utilização do evento onload associado à tag `<body>` produz o mesmo resultado que o uso do evento `window.onload`, deve-se dar preferência ao segundo. Com isso, separamos a estrutura, no caso do `<body>`, da ação, já que o evento `window.onload` só pode ser manipulado por meio de código Javascript, sem precisar ser associado diretamente a uma tag, como acontece com o `onload`.

Veja como utilizar o evento `window.onload`!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Eventow window.load e document.load</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <div id="lipsum">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo
        ipsum, rhoncus at orci vel, aliquam consequat lorem. Integer congue enim
        quis semper mattis. Aenean augue libero, maximus et odio nec, malesuada
        tristique felis. Donec dignissim libero id pulvinar faucibus. Phasellus
        blandit justo quam. Integer ex massa, rhoncus eu libero quis, fermentum
        feugiat odio. Sed tellus purus, fermentum ac euismod et, mattis at nunc.
        Nunc nisl leo, dapibus eget lorem id, congue lobortis ipsum.
      </p>
    </div>

    <script type="text/javascript">
      window.onload = function () {
        alert("Evento window.load disparado");
      };
    </script>
  </body>
</html>
```

---

## **O evento jQuery `$(document).ready()`**

Como vimos anteriormente, o evento `window.load` é disparado quando todo o conteúdo da página é carregado. Em muitas situações, desejamos alterar o comportamento desse conteúdo e, para isso, precisamos acessá-los antes do término do carregamento. Para essa função, temos o evento jQuery `$(document).ready()` – que pode ser abreviado da seguinte maneira.

```jsx
$(function(){ ... });
```

Com esse evento, podemos ter acesso à página assim que a árvore DOM (tags HTML) estiver disponível, o que ocorre antes de todo o conteúdo ser carregado. Observe um exemplo simples com o evento em questão!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Eventos window.onload e $(document).ready()</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <div id="lipsum">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo
        ipsum, rhoncus at orci vel, aliquam consequat lorem. Integer congue enim
        quis semper mattis. Aenean augue libero, maximus et odio nec, malesuada
        tristique felis. Donec dignissim libero id pulvinar faucibus. Phasellus
        blandit justo quam. Integer ex massa, rhoncus eu libero quis, fermentum
        feugiat odio. Sed tellus purus, fermentum ac euismod et, mattis at nunc.
        Nunc nisl leo, dapibus eget lorem id, congue lobortis ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo
        ipsum, rhoncus at orci vel, aliquam consequat lorem. Integer congue enim
        quis semper mattis. Aenean augue libero, maximus et odio nec, malesuada
        tristique felis. Donec dignissim libero id pulvinar faucibus. Phasellus
        blandit justo quam. Integer ex massa, rhoncus eu libero quis, fermentum
        feugiat odio. Sed tellus purus, fermentum ac euismod et, mattis at nunc.
        Nunc nisl leo, dapibus eget lorem id, congue lobortis ipsum.
      </p>
      <img src="https://picsum.photos/id/0/367/267" />
      <img src="https://picsum.photos/id/1/367/267" />
      <img src="https://picsum.photos/id/10/367/267" />
      <img src="https://picsum.photos/id/100/367/267" />
      <img src="https://picsum.photos/id/1000/367/267" />
    </div>

    <script type="text/javascript">
      window.onload = function () {
        alert("Evento window.load disparado");
      };

      $(function () {
        // $('div p').before('<h1>Lorem Ipsum</h1>')
        alert("Evento document.ready disparado");
      });
    </script>
  </body>
</html>
```

Para ver na prática a diferença entre os momentos em que os eventos `window.load` e `$(document).ready()` são disparados, copie o código anterior, salve-o em um arquivo HTML e abra-o no navegador. Veja que o alerta do evento jQuery será disparado primeiro, antes de as imagens serem carregadas na página e que, somente após as imagens serem carregadas, será disparado o evento `window.load`.

Na biblioteca jQuery, também está disponível uma implementação do evento `window.load`, o `$( window ).on(“load”, function () { ... }`) .

---

## Os eventos `click()` e `on()`

Esses eventos estão relacionados ao click do mouse (quando pressionamos o botão do mouse e o liberamos na sequência) sobre um elemento na página. Embora tenham a mesma função, o “`click`” foi descontinuado, devendo ser substituído pelo “`on`”. Em linhas gerais, esses eventos vinculam um manipulador (`handler`) ou disparador (`trigger`) ao evento Javascript “`click`” (descrito acima). Repare, a seguir, a sintaxe do evento jQuery “`click`” em um exemplo prático!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Evento click</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <script type="text/javascript">
      $("ul li").click(function () {
        console.log("Conteúdo do item da lista: " + $(this).text());
      });

      // Adicionando, dinamicamente, um novo elemento <li> à lista
      $("ul").append("<li>Item 6</li>");
    </script>
  </body>
</html>
```

O exemplo anterior, além de demonstrar o evento `click` em ação, adiciona um novo elemento, dinamicamente, à lista original, contida no próprio HTML. Teste o código no navegador. Repare que, ao clicar do primeiro ao quinto elemento, será exibido, no inspecionador de elementos, na aba `console`, o conteúdo da tag `<li>`.

Entretanto, isso não acontece no item adicionado dinamicamente, o “Item 6”. Isso ocorre porque o evento `click` só reconhece os elementos já existentes na página. Para adicionar o evento de “clique” ao último elemento, é necessário utilizar outro evento, que veremos a seguir.

### Diferença entre os eventos `Click` e `On`

No código apresentado a seguir, utilizamos, no lugar do evento `click`, o evento `on`. Esse evento é responsável por anexar uma função de manipulação de eventos para um ou mais eventos aos elementos selecionados. No contexto apresentado em ambos os exemplos, confira a diferença entre o `click` e o `on`!

- **`Click`**
  É restrito ao DOM inicial.
- **`On`**
  É válido para novos elementos adicionados ao DOM.

Por fim, cabe destacar que o evento `on` não é limitado a lidar apenas com o evento `click`. Ele pode ser usado com outros eventos, como o `submit` – evento disparado quando um formulário HTML é submetido, por exemplo.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Evento on</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <script type="text/javascript">
      $("ul").on("click", "li", function () {
        console.log("Conteúdo do item da lista: " + $(this).text());
      });

      // Adicionando, dinamicamente, um novo elemento <li> à lista
      $("ul").append("<li>Item 6</li>");
    </script>
  </body>
</html>
```

---

## Eventos de teclado e mouse

Em jQuery, estão disponíveis alguns eventos relacionados ao teclado e ao mouse. É possível manipular, por exemplo, o evento disparado quando determinada tecla é pressionada, ou com os eventos de `mouseover`, entre outros.

Veja, na prática, alguns desses exemplos. Para obter a lista completa, consulte a documentação da biblioteca!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Eventos de teclado e mouse</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <form>
      <input type="text" name="inpt" id="inpt" />
    </form>

    <script type="text/javascript">
      // Evento mouseover
      $("ul").on("mouseover", "li", function () {
        console.log("Conteúdo do item da lista: " + $(this).text());
      });

      // Evento mouseleave
      $("ul").on("mouseleave", "li", function () {
        console.log("O mouse não está mais sobre o elemento da lista");
      });

      // Evento keypress
      $("#inpt").keypress(function (event) {
        event.preventDefault();
        console.log("A tecla pressionada foi: " + event.which);
      });
    </script>
  </body>
</html>
```

No exemplo anterior, foram aplicados os eventos mouseover e mouseleave sobre os elementos da lista. Veja, no console, no inspecionador de elementos, os logs sendo registrados conforme você passa o mouse sobre os elementos da lista e quando tira o mouse desses elementos. Por último, o evento keypress foi vinculado ao input do formulário. Nesse caso, pressione algumas teclas e a tecla enter, estando no campo input, e veja o resultado no console. Aqui, é exibido o **código ASCII** referente à tecla pressionada. Isso é útil quando precisamos, por exemplo, saber se determinada tecla foi pressionada.

---

## Método `preventdefault()`

Embora não seja um evento, é importante falar sobre esse método. A sua função é, quando chamado, impedir que a ação padrão de um evento seja disparada. Vamos à prática: copie o código a seguir, salve-o e abra-o no navegador.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Método preventDefault</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <p>
      <a id="lnk" href="outra-pagina.html"> Link para outra página </a>
    </p>

    <form action="script.php">
      <input type="text" name="inpt" id="inpt" />
      <input
        type="submit"
        name="inpt_sbmt"
        id="inpt_sbmt"
        value="Enviar o Formulário"
      />
    </form>

    <script type="text/javascript">
      // Click do link
      $("#lnk").click(function (event) {
        event.preventDefault();
        console.log("Nada aconteceu ao clicar no link");
      });

      // Click do botão do formulário
      $("#inpt_sbmt").click(function (event) {
        event.preventDefault();
        console.log("Nada aconteceu ao clicar no botão do formulário");
      });
    </script>
  </body>
</html>
```

O comportamento normal do link, ao ser clicado, é abrir a página contida no atributo “`href`”. Já o comportamento esperado do botão de submissão do formulário é navegar para o local definido no seu atributo “`action`”.

### Você notou que nenhuma das ações padrão foi executada? Por que isso acontece?

O método `event.preventDefault()` serve para impedir que a ação default de determinado evento seja executada. Sua utilidade, na prática, é diversa, uma vez que nos permite não só impedir o comportamento normal, mas também definir outro comportamento para os eventos. Por exemplo, você pode usá-lo para submeter os dados de um formulário via AJAX, impedindo que a página seja recarregada e que, por padrão, a submissão do formulário o leve a outra página.

---

## **Trabalhando com eventos utilizando jQuery**

Com jQuery, temos acesso a recursos que facilitam o trabalho de manipular e tratar eventos em uma página web. Na prática a seguir, faremos uso de alguns dos recursos existentes no framework para manipular o evento de click em um elemento HTML.

---

## Roteiro de prática

Para executar a prática, que será descrita logo a seguir, você precisará de algumas ferramentas, a saber: um editor de textos – pode ser o próprio Bloco de Notas do Windows ou o Nano Editor do Linux, ou então algo um pouco mais avançado, como o software (gratuito) Notepad++. Precisará também de um navegador – Google Chrome, Firefox, MS Edge etc.

Em relação ao exercício, siga o seguinte roteiro!

1. No editor, crie a estrutura base de uma página HTML – `doctype`, `html`, `head` e `body`. Lembre se de abrir e fechar corretamente cada tag.
2. Importe/inclua, dentro da tag `<head>`, o framework jQuery.
3. Insira, a seu critério, elementos dentro da tag `<body>`, como tags de título, parágrafo etc. Lembre-se de inserir também os conteúdos de cada uma dessas tags. Tal conteúdo será importante apenas para que a página não carregue totalmente em branco.
4. Crie, a seguir, uma tag `<div>` e insira dentro dela uma tag `<p>` contendo um bloco de texto.
5. Após a tag `<div>` acima ou dentro da tag `<head>`, crie uma função, utilizando jQuery, para:
   1. Adicionar, ao final da tag `<div>` criada, uma tag `<a>` que deverá ter o seguinte conteúdo:`<a id='link_alerta' href='pagina.html'>Exibir alerta</a>`
   2. Utilizando jQuery, faça com que o link acima, ao ser clicado, no lugar de levar o usuário ir para outra página (definida em um atributo “`href`”), exiba na tela um alerta com o texto “O novo link, inserido com jQuery, foi clicado”.
6. Ao final, salve a página no editor e a abra no navegador para ver o resultado.

A resolução da prática pode ser feita de diferentes maneiras, como usando o código em sequência!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Manipulando Eventos com jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.5.1.js"
    ></script>
  </head>
  <body>
    <div id="lipsum">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <script type="text/javascript">
      $(function () {
        $("#lipsum").append(
          "<a id='link_alerta' href='pagina.html'>Exibir alerta</a>"
        );

        $("#link_alerta").on("click", function (event) {
          event.preventDefault();
          alert("O novo link, inserido com jQuery, foi clicado");
        });
      });
    </script>
  </body>
</html>
```
