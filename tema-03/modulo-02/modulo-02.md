# Módulo 2: Saindo do básico

Ao final deste módulo, você será capaz de empregar uma lógica para interação com o usuário.

## Projeto Todo.list

### Requisitos do cliente

Apesar de termos percebido, desde o início deste estudo, o poder do Vue, ainda não exploramos todas as suas funcionalidades.

Por isso, neste momento, trabalharemos com listas dinâmicas e daremos um pouco mais de complexidade aos nossos projetos. Veremos ainda como trabalhar com condicionais, mostrando ou escondendo elementos na tela de acordo com alguma condição específica, por exemplo. Também exploraremos as classes CSS, além de eventos de mouse e teclado.

O pontapé inicial é a apresentação do projeto. Nosso aprendizado será construído na implementação das funcionalidades apresentadas pelo cliente.

Dessa vez, a empresa responsável por um aplicativo móvel de lista de afazeres denominado Todo.list nos solicitou a versão web do app. Sendo assim, o designer nos passou o template a seguir:

![Resultado esperado pelo cliente Todo.list.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/b43f72cc-001f-4afc-925f-c43f5bde826e/image.png)

Resultado esperado pelo cliente Todo.list.

Além do template, ele nos passou os seguintes requisitos:

- Itens marcados como importante em vermelho (classe CSS: importante).
- Ao clicar no item, ele deve ser marcado como feito e ficar em branco e esmaecido (classe CSS: feito) independentemente de ser importante.
- O usuário digita o texto e clica em salvar ou aperta a tecla Enter, e o item vai para a lista. O botão salvar só deverá aparecer se houver um texto digitado. Após a inserção, os campos deverão ser limpos.
- O texto deve contar com até 20 caracteres, enquanto a contagem precisa ser mostrada a seguir do input de texto.

### Setup inicial da aplicação

Primeiramente, é preciso importar o Vue por meio do link, criar uma nova instância do Vue e montá-la em nossa `div` de `id` app. Vamos fazer isso conforme aprendemos anteriormente, colocando os scripts entre o fechamento da última `div` e o da tag `body`.

Aproveitaremos para criar a função `data( )` retornando um objeto, o qual vamos utilizar para dar vida ao nosso projeto. Caso tenha dúvidas sobre esse processo, analise o **código comentado**.

```js
<script src="https://unpkg.com/vue@3.0.0-rc.5/dist/vue.global.js"></script>
<script>
  Vue.createApp({
    data () {
      return {}
    },
  }).mount("#app")
</script>
```

Dentro do objeto retornado em data, vamos criar nossa lista de itens. Por enquanto, inicializaremos uma lista fictícia.

A lista será um `array` com três itens:

- Um item a fazer.
- Um item marcado como importante, mas não feito.
- Um item marcado como feito.

Dentro dessa lista, cada item será um objeto do JavaScript com suas informações.

### Renderizando a lista

Na imagem a seguir, vemos o escopo da lista de itens com os colchetes de abertura e fechamento em destaque. Essa lista é um elemento do objeto retornado pela função data, ou seja, é exposta e gerenciada pelo Vue.

![Estrutura da lista de itens que será renderizada na tela.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/89bb8b37-a1d9-4d2d-986c-9df72b6685fb/image.png)

Estrutura da lista de itens que será renderizada na tela.

A seguir, o que está em destaque é um dos objetos. Repare que todos têm a mesma estrutura. Da mesma forma, os itens possuem os mesmos atributos. Isso é recomendado para se saber o que esperar de cada objeto, mas não é algo obrigatório.

![Destaque de um item a ser renderizado](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/95eafb9d-d183-4065-950d-a7b54f7cd49d/image.png)

Destaque de um item a ser renderizado

Repare também nas chaves de abertura e fechamento de cada objeto: elas determinam o escopo de cada item. Os atributos de cada um deles são independentes.

O atributo texto é uma `string`. Já os atributos “importante” e “feito” são do tipo booleano, ou seja, eles aceitam `true` ou `false` (verdadeiro ou falso, respectivamente).

O próximo passo é remover as `divs` de itens fixos no HTML que o designer enviou de amostra. Utilizaremos o Vue para varrer nossa lista de objetos e mostrá-la item a item.

![Destaque do local no documento HTML a abrigar a lista.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/27121764-ba88-4fd4-879a-ad187a22c386/image.png)

Destaque do local no documento HTML a abrigar a lista.

No código anterior, note a utilização das cores: amarelo para o escopo da lista e rosa para o escopo do item.

Os mundos Vue e HTML estão intimamente ligados. Esse é o objetivo.

Em nosso HTML, removeremos quase todos os itens. Vamos deixar uma `div` (um item) de exemplo para que possamos ter a estrutura de HTML desejada pelo designer, porém preenchendo-a com os dados do mundo Vue.

![Local da lista no HTML já tendo removido os dados de amostra inseridos pela equipe de design.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/2ba4dc2f-e27a-46bc-ae4c-c17e293b21c2/image.png)

Local da lista no HTML já tendo removido os dados de amostra inseridos pela equipe de design.

A recomendação é que você sempre escreva, como foi feito nessa imagem, o comportamento que espera utilizando comentários. Isso guiará seus passos com o Vue.

Vamos numerar os comentários para facilitar o entendimento:

1. Para cada item da lista, é preciso ter uma `div` (como a `div` apresentada na imagem a seguir).
2. Essa `div` terá obrigatoriamente a classe item.
3. Dentro da `div` com classe item, haverá um parágrafo (tag `p`).
4. Dentro desse parágrafo, o texto do item será “impresso”.

Agora vamos traduzir os comentários em código. O Vue possui uma diretiva chamada v-for que nos permite percorrer um array e, para cada item encontrado, repetir aquele bloco HTML.

A sintaxe do `v-for` para o nosso caso é a seguinte (código):

```html
<div class="”item”" v-for="”item" in lista”></div>
```

Veja como é possível ler a linha (frase):

“Insira uma **`div`** com a **classe** item **para** cada **item** na **lista**”

### Dica

Releia o código e a frase algumas vezes até perceber a semelhança. Esse é o poder do Vue em ação! Com isso, já cumprimos os passos 1 e 2 dos nossos comentários.

Nossa próxima tarefa consiste em inserir uma tag de parágrafo (`p`) e imprimir o texto do item nela. Vamos utilizar a diretiva `v-text` em vez dos bigodes.

Revisando os objetos do `array` de itens na f9, veremos que cada um deles possui um atributo texto. Para acessar o texto de cada item, devemos, dentro do bloco definido pelo `v-for`, utilizar `item.texto`. O resultado pode ser visto na imagem a seguir:

![Código para renderizar a lista e os respectivos itens.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/b72fd8b4-0006-46d0-95f3-0ecd883187dc/image.png)

Código para renderizar a lista e os respectivos itens.

O item em questão está dentro do bloco definido pela diretiva v-for. Sendo assim, ele não é um item fixo. O bloco determinado por essa diretiva será repetido uma vez para cada item da lista. A cada repetição (iteração), a variável item assume o valor de um dos objetos até chegar ao final da lista.

O código entre a segunda e a terceira `div` será repetido pelo Vue para cada item em nossa lista.

Com isso, teremos o seguinte resultado:

![Resultado do código até o momento.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/5453e5bd-6260-4bd1-8407-d2356151adde/image.png)

Resultado do código até o momento.

Perceba que já possuímos algo concreto: a lista está sendo percorrida, enquanto cada item é mostrado como um lembrete em amarelo. Estamos tendo progresso!

## Classes e eventos

### Classes CSS dinâmicas

Nossos itens estão aparecendo no HTML, mas todos eles estão iguais. De acordo com o que foi solicitado pelo cliente, eles têm cores diferentes. As cores são definidas por classes CSS.

Itens importantes (atributo importante marcado como true) recebem a classe importante. Aqueles já realizados (atributo feito marcado como true) recebem a classe feito.

### Mãos à obra

Para aplicar uma classe CSS quando uma condição for verdadeira, o Vue possuirá a diretiva `v-bind`. Observe como aplicá-la:

![Aplicação da diretiva `v-bind` para a classe importante.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/d39a04cb-edc4-47b8-8d75-737832071d44/image.png)

Aplicação da diretiva `v-bind` para a classe importante.

Em português, a palavra `bind` significa ligar, conectar. Por isso, a leitura da parte em destaque do código mostrado na imagem deve ser: “Ligue a classe importante caso o item seja importante”.

Falta agora a classe feito. Para isso, no mesmo bloco, vamos inserir mais uma informação. Observe o resultado:

![Aplicação da diretiva `v-bind` para a classe feito.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/82af685a-a1bd-4f69-bed2-c4a0af0d5f6b/image.png)

Aplicação da diretiva `v-bind` para a classe feito.

A leitura do bloco definido pela diretiva `v-bind` deve ser a seguinte:

Atribua a classe importante caso o atributo importante do item atual seja true (verdadeiro). Atribua a classe feito caso o atributo feito seja true (verdadeiro).

Após termos feito isso, o nosso resultado será o seguinte:

![Resultado após a aplicação das classes dinâmicas.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/69cb6340-642c-4608-984a-74e095479514/image.png)

Resultado após a aplicação das classes dinâmicas.

A diretiva `v-bind` tem uma forma reduzida definida simplesmente pelo sinal de dois pontos. Confira um exemplo:

### Forma longa

`<img v-bind:src=”perfil.foto” />`

### Forma reduzida

`<img :src=”perfil.foto” />`

O uso da diretiva `v-bind` para atribuir o endereço de imagens é muito comum. Diversos exemplos na Internet usam esse cenário para explicar a diretiva `v-bind`.

Apesar disso, ela pode ser utilizada para a atribuição de qualquer atributo HTML dinamicamente, recebendo dados do mundo Vue. Utilizamos o atributo de classe, pois ele se enquadra melhor em nosso exemplo.

## Respondendo ao clique

Próximo requisito: quando o item for clicado, ele deverá ser marcado ou desmarcado como feito. Comumente, chamamos de toggle o ato de alternar o valor (estado) de um atributo entre dois estados predefinidos (ativo/inativo, ligado/desligado, true/false etc.). Seguiremos essa nomenclatura para o trabalho com o atributo (com a variável) feito existente em cada um dos itens da lista.

A ideia é que, ao receber um clique, o item seja marcado como feito caso não esteja. Caso esteja, ele será desmarcado. Esse comportamento é definido com os valores true ou false na variável feito daquele item.

### Curiosidade

O Vue possui a diretiva `v-on` para lidar com eventos. Essa diretiva aceita como valor diversos tipos de eventos. Para o nosso caso, queremos que alguma ação aconteça quando o elemento for clicado. Sendo assim, trabalharemos com o evento `click`.

Observe como se atribui um evento de clique de mouse em nossa `div` representando um item:

![Aplicação da diretiva `v-on`.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/56526c65-7d51-475b-9c8d-7faed0b29e9c/image.png)

Aplicação da diretiva `v-on`.

Pode parecer complexo, mas o que a linha `v-on:click="item.feito = !item.feito"` nos diz é: atribua à **variável feito** no item em questão (`item. feito =`) o **valor contrário** ao que ela já possui (`!item.feito`).

O sinal de exclamação inverte o valor de uma variável booleana (true vira false, false vira true). Em resumo, se `item.feito` for true, o contrário dele (`!item.feito` ) será false. Com isso, ocorre o efeito toggle sobre o qual falamos anteriormente.

Salve o arquivo e veja como já temos o resultado desejado, alternando o estado dos nossos itens como feito ou não feito. Perceba ainda que você pode pular uma linha dentro do HTML para facilitar a legibilidade do código sem perder a funcionalidade.

## Adicionando elementos

### Mais um evento de clique

Nossa lista já mostra os eventos, cada um com texto, cores e situações (importante e feito) sendo mostrados. No entanto, ela é estática, ou seja, é definida pelo(a) programador(a), isto é, por você, antes de a aplicação ser aberta – e isso não muda.

O solicitado pelo nosso cliente é que o usuário possa criar sua lista de acordo com suas necessidades. Para isso, devemos receber do usuário as informações do novo item a ser adicionado.

Repare, na imagem a seguir, que o designer já deixou pronto um formulário para receber os dados. Há nele um input para texto, um checkbox para definir se o item é importante e um botão de salvar.

![Estrutura do formulário com input para texto, checkbox para marcar se o item é importante e botão salvar.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/130af9cb-4ead-4c42-a9cc-5663fad9eac9/image.png)

Estrutura do formulário com input para texto, checkbox para marcar se o item é importante e botão salvar.

Para que o Vue monitore esses itens, devemos trazê-los para o mundo Vue. No caso dos inputs (text e checkbox), precisamos ligá-los a variáveis no objeto retornado pela função data(). Isso é feito por meio da diretiva `v-model` (assunto abordado no primeiro módulo).

No caso do botão salvar, temos de atribuir um comportamento ao evento de clique utilizando v-`on:click` ou sua forma simplificada: `@click`. Os dois passos citados são mostrados nas imagens a seguir:

Observe que, na primeira imagem, a diretiva `v-model` (destacada em rosa) é utilizada tanto no campo do tipo texto quanto no checkbox, porém existe uma diferença. Verifique-a a seguir:

![Aplicação da diretiva `v-on`.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/5a93398e-af1b-4a65-8546-f63f3ca44a53/image.png)

Aplicação da diretiva `v-on`.

![Aplicação da diretiva `v-on`.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/53f38853-1dac-4ca6-80cb-e8cad1a40ca0/image.png)

Aplicação da diretiva `v-on`.

![Diretiva `v-model` nos campos texto e checkbox.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/3253f923-c3a6-4fd3-acc4-75714e7ef1f5/image.png)

Diretiva `v-model` nos campos texto e checkbox.

No campo do tipo texto, tal diretiva assume o valor digitado no campo como string. Por isso, ela está ligada à variável `textoNovoItem` na imagem anterior inicializada como uma string em branco.

Já no campo checkbox, só existem dois estados possíveis: **marcado** e **desmarcado**. Quando marcado, o valor associado a ele é true. Quando desmarcado, o valor é false.

### Marcado

Quando marcado, o valor associado a ele é true.

### Desmarcado

No entanto, quando desmarcado, o valor associado é false.

Esse apontamento garante o que observamos desde o projeto da carteira do estudante: uma ligação que funciona nos dois sentidos. Quando a variável é alterada, o valor do campo também muda. Quando o campo é modificado, a variável, no mundo Vue, reflete essa alteração.

Agora devemos, ao clicar no botão de salvar, capturar essas duas informações e inseri-las, como um novo item, em nossa lista. Observe as imagens sobre a aplicação da diretiva `v-on`. Essa foi a maneira que utilizamos para mudar o estado de um item.

Utilizamos a diretiva `v-on:click` e passamos para ela o comportamento esperado: `item.feito = !item.feito`. Do mesmo modo, utilizamos a forma simplificada de `v-on`, que é um @. As duas formas são equivalentes para o Vue: fique à vontade para escolher a que achar melhor.

**Percebeu que a maneira de definir o comportamento após o clique mudou? Em vez de passarmos o comportamento esperado em forma de código JS a ser executado, passamos um nome (`salvarNovoItem`). Esse nome representa uma função que queremos chamar após o clique.**

Veja a seguir onde e como se dá a criação do método:

![Criação do método.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/d106187b-95ef-408b-85b5-227bcf4ee2cd/image.png)

Criação do método.

Repare que:

- `data` (no canto inferior) é uma função que retorna um atributo.
- `methods` (na parte superior) é um atributo que retorna uma ou mais funções.
- `salvarNovoItem` (abaixo de `methods`) é uma função.

Ora a chamamos de função; ora, de método. Saiba que isso é intencional! As duas formas estão corretas.

Métodos são funções atribuídas a um objeto – nesse caso, atribuídas a nosso Vue Instance. Essa maneira de atribuir métodos a eventos facilita a legibilidade do nosso HTML.

Observe como ficou enxuto e fácil de entender que, ao se clicar no botão, o método `salvarNovoItem` será chamado:

![Atribuição do evento ao botão.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/ac6cc7a5-2852-4d01-b38f-4b0e11c62c8a/image.png)

Atribuição do evento ao botão.

Além disso, a organização do nosso código é melhorada, uma vez que eu passo somente um nome na diretiva `v-on` (ou @) e escrevo o método no local mais indicado.

Ao isolarmos um comportamento esperado em um método, podemos invocá-lo em outros locais do nosso código (veremos um exemplo disso adiante). Além disso, reutilizar um código é uma boa prática, pois, caso precisemos mudar um comportamento, teremos de alterar somente em um local.

Você percebeu o `this` antes dos nomes atributos?

Utilizamos essa palavra-chave para dizermos ao JavaScript que o atributo referenciado (`textoNovoItem`, `novoItemImportante`, lista etc.) pertence ao objeto dentro do qual estamos trabalhando – nesse caso, à instância do Vue. Conforme imagem:

![Uso da palavra-chave this.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/3ba22957-d75c-4972-8b44-1ad1ca225409/image.png)

Uso da palavra-chave this.

Sempre que formos pegar ou mudar uma variável (atributo) retornada por `data()` ou chamar, dentro do código, algum método do Vue Instance, teremos de obrigatoriamente usar o `this`.

Você percebeu que criamos mais um atributo para nosso objeto?

O atributo id recebe o valor retornado por `new Date().getTime()`. Essa fração de código retorna a quantidade de milissegundos desde 1º de janeiro de 1970, sendo utilizada para sempre gerar um número diferente, ou seja, um número único para cada item. Observe sua utilização:

![Utilização do método que retorna os milissegundos.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/6db70f79-79db-478e-bbb2-0f15cfa29fb2/image.png)

Utilização do método que retorna os milissegundos.

Sua finalidade é evitar conflitos em itens que possuam os mesmos texto e estado (importante e feito). Para evitarmos esse conflito, devemos usar tal id para identificar o item ao varrermos a lista. Ele será utilizado como a chave (`key`) de cada item.

Você percebeu que limpamos os campos?

Um dos requisitos passados pelo cliente foi o seguinte: “O usuário digita o texto e clica em salvar ou aperta a tecla Enter e o item vai para a lista. O botão salvar só deverá aparecer se houver texto digitado. Após a inserção, os campos deverão ser limpos.”

Por isso, após adicionarmos o novo item à lista, voltaremos o valor do atributo `textoNovoItem` para uma string em branco e o valor de `novoItemImportante` para false. Isso vai gerar uma experiência melhor ao usuário, pois ele poderá, imediatamente após salvar, inserir outro item sem a necessidade de apagar o texto do anterior. Observe como:

![Reset das variáveis.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/037e8018-4b04-45a2-8381-7f30995b3cc4/image.png)

Reset das variáveis.

Perceba, contudo, que ainda não cumprimos todo o previsto. Falta salvar quando o usuário apertar a tecla Enter e esconder o botão caso o texto esteja em branco. Vamos adiante.

## Respondendo também ao teclado

Uma das vantagens de isolar o comportamento de salvar em um método, conforme frisamos anteriormente, é poder reutilizá-lo. Na prática, não há diferença entre salvar clicando no botão de salvar ou em Enter.

Dessa forma, diremos ao Vue que também vamos querer chamar o método `salvarNovoItem` quando o usuário apertar a tecla Enter em nosso input texto.

### Comentário

Creio que já esteja imaginando que existe um evento do Vue para isso. E você está correto(a)! O evento em questão é o `keyup`. Ele é ativado após o usuário pressionar e soltar o teclado. No entanto, se não definirmos a tecla (key), o Vue vai executar o comportamento em qualquer uma que seja digitada.

Precisamos, portanto, informar o desejo de executar o método somente após a tecla Enter. Para isso, colocamos um ponto após o evento e definimos a tecla.

O resultado pode ser visto a seguir:

![Atribuição de evento no input de texto.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/61ace260-903b-4877-9f31-eba8ebfbce01/image.png)

Atribuição de evento no input de texto.

## Elementos dinâmicos

Em alguns casos, não queremos que determinado elemento HTML apareça na tela até que algum estado ou condição esteja presente.

O Vue.js nos confere justamente esse nível de controle. Vejamos como isso funciona:

### Escondendo o botão

Concentrando-se em atender plenamente aos requisitos do nosso cliente, teremos de esconder o botão de salvar quando o texto estiver em branco.

Para controlar a presença de elementos na tela, existem duas diretivas básicas:

- `v-if`
- `v-show`

A diferença entre ambas é que, com a diretiva `v-if`, o elemento é removido ou inserido no HTML conforme alguma condição (valor ou expressão que corresponda a true ou false). Se for true, o elemento será renderizado na tela; se ele for false, todo o código correspondente será removido do HTML.

Já a diretiva v-show simplesmente coloca a propriedade CSS display do elemento em questão como none. Assim, caso a condição retorne false, o elemento existirá no HTML, mas não será mostrado.

Em nosso exemplo, utilizaremos a diretiva `v-if`, tendo em vista que o bloco a ser inserido é pequeno e não exige muito processamento do browser para renderizá-lo novamente quando necessário.

### Recomendação

Nos elementos em uma lista grande ou que sejam complexos, sugerimos a utilização do v-show. Experimente as duas formas para verificar o comportamento do Vue e do HTML (utilize as ferramentas do navegador para isso).

Para verificar se há texto digitado, testamos o tamanho da variável `textoNovoItem`, já que ela está ligada (two-way data binding) a nosso input de texto. Caso o tamanho (`length`) da variável seja zero, significa que o input está vazio, retornando false. Caso ele tenha ao menos uma letra digitada, é maior que zero.

![Atribuição da diretiva `v-if` para esconder o botão.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/15551369-762e-4d37-b668-92192024af3e/image.png)

Atribuição da diretiva `v-if` para esconder o botão.

Observe que a condição (`textoNovoItem.length > 0`) retornará true se houver algo digitado, mostrando o botão. Ponto para nós!

Mas ainda há um detalhe: o item também é adicionado à lista pelo teclado independentemente da existência do botão. Por isso, devemos editar o método `salvarNovoItem` a fim de que lá também seja testado o tamanho do texto, evitando que itens em branco sejam adicionados utilizando o evento do teclado.

![Aplicação de condição para salvar o item.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/45f756a5-6a32-40bc-8eb0-dfc5bdde7081/image.png)

Aplicação de condição para salvar o item.

O `if` utilizado lembra muito aquele empregado na diretiva `v-if` do botão, mas devemos nos lembrar de utilizar o `this`, pois estamos referenciando um atributo do Vue Instance dentro de um código presente nela mesma.

## Contando caracteres digitados

Agora é hora de atender ao último requisito do cliente: a contagem de caracteres. Como vimos, a quantidade daqueles digitados no input pode ser verificada por meio da propriedade `length` (tamanho) da variável `textoNovoItem`. Também sabemos que, para mostrar um valor de uma variável no nosso HTML, utilizamos a template string, colocando a variável ou expressão entre chaves.

Assim, para imprimir no HTML o tamanho do texto digitado, devemos utilizar o seguinte:

```jsx
{
  {
    textoNovoItem.length;
  }
}
```

Existe uma maneira mais elegante, ou seja, com melhor legibilidade, para mostrar o mesmo resultado. Ela se dá utilizando as **computed properties**.

Essas propriedades especiais são recomendadas para casos em que:

- Haja um processamento menos trivial com muito código ou um que exija um esforço para ser entendido.
- Exista a necessidade de reatividade (a propriedade muda e o HTML reage), caso ao qual os métodos (mesmo suportando lógicas nada triviais) não atendem: eles precisam ser chamados para que atualizem o HTML.
-

Veremos que uma `computed property` define um bloco de código como um método e a capacidade de ser reativa como uma variável. Trata-se, sem dúvida, de uma ferramenta útil e elegante!

Tenha sempre em mente que seu código será lido por terceiros (um amigo de trabalho, um entrevistador etc.). Assim, quanto mais clara a finalidade daquele bloco de código, melhor. As `computed properties` ajudam muito nesse sentido.

Para a criação de uma propriedade computada, deve-se primeiramente criar um objeto, chamado `computed`, dentro da nosso Vue Instance, que vai abrigar todas as `computed properties`. Veja o resultado a seguir:

![Estrutura com a inclusão das propriedades computadas.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/7f7424ed-415c-407a-9644-ca5d47baf663/image.png)

Estrutura com a inclusão das propriedades computadas.

Perceba que o conteúdo de data e methods foi minimizado (destaque em vermelho). Pertencente ao VS Code, tal funcionalidade foi utilizada aqui somente para facilitar seu entendimento.

O objeto `computed` (destacado em amarelo) fica no mesmo nível (hierarquicamente falando) da função data() e do objeto `methods`. Não há uma ordem para esses elementos. Você precisa escolher qual deles vem primeiro e em segundo lugar – e assim por diante.

Geralmente, `data()` é definida primeiramente, pois ela tem os principais dados do Vue Instance, mas isso é apenas uma convenção.

Veremos agora como é definida a propriedade computada referente ao tamanho do texto digitado:

![Propriedade para mostrar de maneira reativa a quantidade de letras digitadas.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/0b81aed3-2c65-430a-9202-bc9e3c2f0b8b/image.png)

Propriedade para mostrar de maneira reativa a quantidade de letras digitadas.

Como já apontamos, uma propriedade computada tem a estrutura de um método e precisa ter um retorno. Além disso, ela será reativa, ou seja, quando o tamanho da variável `textoNovoItem` mudar, nossa propriedade computada notificará nosso HTML para mudar. Isso é fantástico!

Observemos a utilização dela em nosso HTML:

![Imprimindo a propriedade computada no HTML.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/aaf4d07a-b4aa-42da-92bb-713ab3c08dd2/image.png)

Imprimindo a propriedade computada no HTML.

O designer deixou um parágrafo, logo após o formulário, para que pudéssemos imprimir a quantidade digitada. É ali que chamaremos nossa `computed property`. Perceba que ela tem “cara” de variável. Isso nos dá uma boa legibilidade, e nosso código fica limpo.

Falta um último detalhe. Nosso campo de texto continua aceitando mais de 20 caracteres. Precisamos, portanto, adicionar a propriedade `maxlength=”20”` em nosso input de texto. Com isso, o usuário não consegue digitar mais de 20 caracteres.

![Propriedade que limita a quantidade de caracteres no input.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/e9b1bf59-e5d1-4443-9582-9b67eee94d4e/image.png)

Propriedade que limita a quantidade de caracteres no input.

Pronto: atendemos às necessidades do nosso cliente! Você acha que esse projeto pode melhorar? Faça testes, melhore e mude. Desafie a si mesmo a criar funcionalidades novas. Isso com certeza vai melhorar seu desempenho.

Por falar em desafio, volte e revise o projeto do contador. É provável que você consiga entender todo o código.
