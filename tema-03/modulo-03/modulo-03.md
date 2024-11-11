# Módulo 3: Componentes

Ao final deste módulo, você será capaz de aplicar a utilização de componentes para modularização do código.

## O que é um componente?

Componentes são blocos de código reutilizáveis usados para criar uma base de código modular (replicável) e de fácil manutenção (ponto único de mudanças). É possível imaginá-los como brinquedos de blocos de montar: juntando vários deles, obtêm-se construções incríveis.

Imagine agora uma rede social. Ela pode ter um componente para a foto de perfil; outro, para o feed de notícias; e um terceiro, para o serviço de mensagens. Juntos, todos formam uma página complexa. No entanto, eles são criados um a um.

![Representação ilustrativa de componentes de uma rede social.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/9fdd74db-edd4-4cb7-b209-b1c48387540b/image.png)

Representação ilustrativa de componentes de uma rede social.

Sendo assim, podemos, em um único arquivo, representar uma parte do nosso sistema, englobando:

### HTML

Sua estrutura.

### JS

Seu comportamento.

### CSS

Seu estilo.

Só que o poder dos componentes vai além da facilidade de estruturar nosso HTML.

### Exemplo

Suponha que utilizemos um componente de botão de curtir e precisemos mudar a estrutura, a cor e/ou o comportamento desse botão. Utilizando componentes, não teremos de procurar pelo CSS específico dele em arquivos de CSS com centenas de linhas nem partir em uma caçada por todos os arquivos JS nos quais utilizamos suas funções e alterá-las, por exemplo. Temos um arquivo para aquele componente e podemos agrupar os códigos (HTML, CSS e JS) relativos ao botão nesse arquivo. Apesar dessa possiblidade, isso não significa que, ao reutilizar um componente, todas as suas instâncias devam ser exatamente iguais.

Observe a seguir uma demonstração de um componente:

![Representação ilustrativa de um componente de aplicação de clima.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/4474ecf2-a0a5-4277-a4f0-86d337fc6f7c/image.png)

Representação ilustrativa de um componente de aplicação de clima.

Ele representa o card de uma cidade pertencente a uma aplicação de clima. Nesse componente, é possível ver alguns elementos: o nome da cidade, uma descrição do clima atual, a temperatura atual e um ícone correspondente ao clima. Poderíamos, se desejássemos, reutilizar a mesma estrutura para outras cidades.

Nesse caso, teríamos de trocar as informações. Vejamos como o Vue nos ajuda nessa tarefa.

Para esse projeto, utilizaremos o Vite, uma ferramenta de construção de aplicações que ajuda bastante no desenvolvimento e que fornece muitos benefícios na hora de passar essa aplicação para produção. Ele foi criado por Evan You, que é o criador do próprio Vue. Apesar disso, ela pode ser usada com outros frameworks, como React.

## Preparando o ambiente

Você acompanhou a instalação do Node e a utilização do npm para inicializar uma aplicação com o Vite. A partir desse passo, já estamos prontos para iniciar nossa jornada rumo aos componentes do Vue.js.

Observe adiante a divisão definida para o app. Cada bloco em destaque corresponde a um componente a ser criado:

![Representação ilustrativa da divisão da aplicação de clima em componentes.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/4e6ec0ea-f75c-4454-bf15-d5316b6f8c1f/image.png)

Representação ilustrativa da divisão da aplicação de clima em componentes.

Perceba que há três componentes na imagem:

- Na parte superior: o cabeçalho da aplicação.
- Na parte inferior: a lista das cidades.
- No centro: o card da cidade.

Não podemos esquecer que, em si, a página é um componente. Nesse caso, como o componente a representá-la agrupa todos os outros componentes, ele é chamado de componente raiz (root component).

Veremos outra forma de representar os componentes. Essa maneira foca a hierarquia entre eles:

![Hierarquia dos componentes da aplicação de clima.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/e0dd6948-df3b-4f6e-bc37-81ee98853d0a/image.png)

Hierarquia dos componentes da aplicação de clima.

Tendo ciência de toda a estrutura, é hora de colocar a mão na massa. Vamos **componentizar** nossa aplicação.

### Comentário

A palavra **componentizar** não existe no português, mas, no dia a dia de desenvolvedores, ela é comum; por isso, a trouxemos para o texto.

Comecemos pelo componente mais simples, o cabeçalho, pois essa abordagem pretende justamente facilitar seu aprendizado.

## Single file components

Uma das abordagens possíveis – e a mais recomendada – para a criação de componentes com o Vue é a utilização de um arquivo para cada componente. Esses componentes definidos em um arquivo único são chamados de single file components.

A extensão utilizada por esses arquivos é `.vue`. Sendo assim, antes de iniciar o desenvolvimento do componente, devemos criar o arquivo que o abrigará. Como destacamos, começaremos pelo cabeçalho.

Desse modo, vamos criar o arquivo `Cabecalho.vue` dentro da pasta src/components. Podemos excluir o componente `HelloWorld.vue`, criado por padrão pelo Vite, já que ele não será utilizado.

## Estrutura básica do componente

A estrutura básica (três blocos básicos) de um single file component é a seguinte:

- Template
  Abriga o HTML correspondente.
- Script
  Comporta o objeto que representa o componente no mundo Vue. Esse objeto tem dados (função data), métodos (objeto `methods`), propriedades computadas etc.
- Style
  Hospeda o CSS específico para esse componente. Para isso, deve-se usar a palavra-chave scoped, como podemos ver a seguir:
  **`<style scoped>`**
  `... Regras CSS...`
  **`</style>`**

Neste conteúdo, manteremos todo o estilo em um só arquivo CSS, ou seja, não utilizaremos a tag de estilo diretamente nos componentes filhos. O CSS será importado no componente raiz (`PaginaPrincipal.vue`), enquanto o estilo será aplicado a todos os outros.

Como o componente do cabeçalho não terá nenhum comportamento específico, a tag `script` desse arquivo ficará em branco. Para o componente do cabeçalho, é preciso somente trazer a estrutura HTML.

Tal decisão visa facilitar seu aprendizado, evitando muita complexidade nos primeiros exemplos. O foco é que, em um primeiro momento, você entenda a base de como criar e utilizar um componente. Observe como fica a estrutura do arquivo `Cabecalho.vue`:

![Estrutura e posição do arquivo do componente de cabeçalho.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/beaa809a-640f-4bcb-b87d-b5eab419db5d/image.png)

Estrutura e posição do arquivo do componente de cabeçalho.

Do componente `PaginaPrincipal.vue`, trouxemos somente a tag `h1`, que representa nosso cabeçalho nesse primeiro exemplo. Agora já podemos utilizar nosso componente dentro daquele que representa nossa página principal.

## Utilizando componentes

Para utilizar o componente recém-criado, é necessário seguir três passos:

### Passo 1

Primeiramente, importar o arquivo correspondente no componente pai.

### Passo 2

Em seguida, registrar o componente filho no pai.

### Passo 3

Por fim, utilizar o componente como uma tag HTML.

Verifique na imagem adiante a implementação desses passos:

![Utilização do componente cabeçalho dentro do componente da página principal.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/067b116e-054c-4b3d-af84-e207b26ba577/image.png)

Utilização do componente cabeçalho dentro do componente da página principal.

Agora vamos **componentizar** a lista de cidades. Chamaremos esse componente de `ListaCidades.vue`.

A imagem a seguir mostra a estrutura desejável do componente após se criar o arquivo e trazer o HTML e o JavaScript correspondente:

![Estrutura (HTML) e comportamento (JS) do componente lista de cidades.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/05d7f1ae-155f-40a6-b57c-d00eded8db9b/image.png)

Estrutura (HTML) e comportamento (JS) do componente lista de cidades.

O próximo passo é trazê-lo para o componente raiz (importar, registrar e utilizar):

![Utilização do componente relativo à lista de cidade no componente raiz.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/7193e230-2913-4524-a3cc-a2ef29d5c8aa/image.png)

Utilização do componente relativo à lista de cidade no componente raiz.

Perceba como a estrutura do nosso componente raiz (`PaginaPrincipal.vue`) ficou enxuta. Fica claro que a página principal tem um cabeçalho e uma lista de cidades.

A legibilidade aumenta, enquanto a manutenção fica mais fácil. Caso seja preciso mudar o cabeçalho da página, é preciso ir ao componente que o representa, assim como à lista de cidades.

Por fim, deve-se **componentizar** o componente do card que representa uma cidade:

![Estrutura (HTML) do componente card de cidade.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/a0dea892-ca93-43ea-9906-6818723cbd4d/image.png)

Estrutura (HTML) do componente card de cidade.

Observe o template anterior. Ele contém a `div` que representa o card, mas como ele saberá que cidade mostrar?

Para fazer isso, ele precisa receber os dados da cidade a fim de que, só assim, eles consigam ocupar as posições corretas (nome, descrição e temperatura). Cada card deverá obter essas informações de seu componente pai, ou seja, da lista de cidades.

Passar informações de um componente para outro? Sim, isso mesmo: é possível!

Para isso, deve haver uma maneira de criar um canal de comunicação entre um componente pai e um componente filho. Lembre-se de que essa comunicação é unidirecional, ocorrendo somente do pai para o filho.

## Passando informações para componentes filhos com props

A maneira que o Vue disponibiliza para passar informações de um componente pai para um componente filho é chamada de propriedades – mais comumente, de props. As props são atributos somente de leitura e podem ser de qualquer tipo aceito pelo JavaScript (string, inteiros, objetos, arrays etc.).

Em nosso caso, queremos passar o objeto representando uma cidade para dentro do card. Para isso, o card deverá estar pronto para receber esse objeto.

Como essa função não é responsabilidade do HTML, e sim do mundo Vue, indicamos no bloco script correspondente que o componente `CardCidade.vue` tem de estar pronto para receber do elemento pai (`ListaCidades.vue`) uma propriedade chamada cidade e que o elemento passado deve ser um objeto.

Confira, no final do código abaixo, em amarelo:

![Criação de uma propriedade no componente card de cidade.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/db863676-448f-40cd-9a7b-7581ab461cc9/image.png)

Criação de uma propriedade no componente card de cidade.

Perceba que removemos o v-for. Quem vai varrer o array de cidades será o componente pai (`ListaCidades.vue`), passando para o card somente as informações dele. O card fica isolado: recebendo apenas os dados, ele mostra as informações da cidade sob sua responsabilidade.

Isso atende ao princípio da responsabilidade única, que prevê que um trecho de código só deve ter um motivo para ser alterado. Nesse caso, somente se quiséssemos alterar a estrutura do card que representa a cidade ou o seu comportamento, voltaríamos a alterar o arquivo correspondente (MARTIN, 2009).

Agora podemos, em nossa lista de cidades, utilizar o componente `CardCidade.vue` para mostrar todas as cidades da lista novamente:

![Utilização do componente card de cidade dentro do componente de lista de cidades.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/89abc194-e245-4f0b-a82b-57564b9d1a67/image.png)

Utilização do componente card de cidade dentro do componente de lista de cidades.

A leitura do HTML deve ser a seguinte:

- Construa um card de cidade: **`<CardCidade`**.
- Para cada cidade no array cidades: `v-for=”cidade in cidades`.
- Esse card deverá ser diferenciado (chave) dos outros pelo seu id: `:key=”cidade.id”`.
- Passe para a propriedade cidade do card o objeto cidade atual: `:cidade=”cidade”`.

Pronto. Nossa aplicação está toda dividida em componentes! Revise a imagem que mostra a **hierarquia entre componentes** e percorra a estrutura do código, começando do componente `PaginaPrincipal.vue`.

Veja como fica fácil entender a divisão e hierarquia dos blocos da aplicação.

## Passando bloco de HTML para componentes filhos com slots

Além de transferir valores, variáveis e objetos, entre outros itens, para nosso Vue Instance com as props, também podemos passar todo um bloco de HTML e até mesmo um componente com slots.

Uma analogia possível quando se trata de slots é pensar neles como uma “abertura”, uma ”janela” ou um “recorte” que deixamos aberto em nosso componente, podendo o desenvolvedor colocar nesse espaço o que ele desejar.

Veja a ilustração a seguir:

![Ilustração sobre slots em componentes do Vue.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/1d3c6c64-4e07-450d-a90d-57a96d622a1e/image.png)

Ilustração sobre slots em componentes do Vue.

Observe que deixamos um slot no componente pai e podemos colocar nele diversos elementos HTML ou até mesmo um componente Vue.

Vejamos agora um exemplo prático:

Criaremos uma “abertura” (slot) em nosso componente de cabeçalho (`Cabecalho.vue`) para inserir nele um subtítulo. A imagem adiante mostra a criação do slot:

![Criação de um slot não nomeado no componente de cabeçalho.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/d529ed4f-8eeb-4191-82ea-1477a63b0ce9/image.png)

Criação de um slot não nomeado no componente de cabeçalho.

No componente que utiliza o cabeçalho (no caso, `PaginaPrincipal.vue`), podemos inserir um ou mais elementos HTML ou os componentes que desejamos. O bloco que inserirmos ocupará a posição marcada para o slot, ou seja, abaixo da tag `h1`.

Observe a maneira de se inserir o bloco entre a abertura e o fechamento da tag do nosso componente:

![Utilização do slot não nomeado.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/87c8b768-6821-4dec-be70-3a0e79a0a803/image.png)

Utilização do slot não nomeado.

Vejamos agora o resultado:

![Representação ilustrativa do resultado da utilização de slots.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/e3067fb7-2c5b-45aa-8f6e-0f7798f5a255/image.png)

Representação ilustrativa do resultado da utilização de slots.

Pode haver mais de um slot por componente, porém, se utilizarmos dois ou mais, teremos de nomear esses componentes para que o Vue saiba onde colocar cada bloco.

![Criação dos slots nomeados: `Cabecalho.vue`.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/0e851d6c-25b5-416b-a6a3-76732b89099f/image.png)

Criação dos slots nomeados: `Cabecalho.vue`.

![Utilização dos slots nomeados: `PaginaPrincipal.vue`.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/70e81cd9-d277-4007-ad8f-ae2f52437b0d/image.png)

Utilização dos slots nomeados: `PaginaPrincipal.vue`.

Esses são alguns motivos da fama do Vue como ferramenta muito flexível e por qual motivo, como podemos ver na primeira página de sua documentação, ele é chamado de framework progressivo.

## Passando informações para componentes-pai com emissão de eventos

Para fechar nosso conteúdo com chave de ouro, vamos aprender como se cria um canal de comunicação de um componente filho para os componentes pais. O Vue, afinal de contas, não fica limitado à passagem de informações para baixo, isto é, de pai para filho.

Existe também uma maneira de notificar o componente pai de que algo aconteceu no componente filho. A forma com que isso acontece é por meio da emissão de eventos.

Vamos, portanto, criar uma maneira de a lista de cidades (componente `ListaCidades.vue`) saber qual das cidades foi selecionada (clicada). Para isso, o card (componente `CardCidade.vue`) que for clicado deverá avisar à lista (seu pai) que cidade ele abriga. Ao receber esse evento, a lista precisa alertar o nome da cidade clicada.

Primeiramente, informaremos ao componente card que ele emite determinado evento e que esse evento deve ser disparado ao receber um clique:

![Definição de evento a ser emitido no componente filho após o clique.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/94d7b75d-d458-488e-9923-f052d7dd62e7/image.png)

Definição de evento a ser emitido no componente filho após o clique.

Dessa maneira, o componente card já sabe que está emitindo a seu componente pai um evento chamado `cidadeclicada` e passando como parâmetro para esse evento a cidade que ele abriga. É preciso agora receber esse componente no pai.

Verifique a seguir como dizemos à lista de cidades que devemos esperar que seu filho (`CardCidade`) emita um evento chamado `cidadeclicada` e que, quando o filho emitir esse evento (`v-on:cidadeclicada`), ele deverá chamar o método `mudarcidadeselecionada`. Tal método, nesse caso, só alerta o atributo `name` da cidade, como pode ser visto nas últimas linhas da segunda ilustração. Perceba que primeira imagem apresenta a definição do comportamento ao receber um evento do componente filho com parâmetro e sem parâmetro:

![Definição do comportamento ao receber um evento do componente filho (`method` e `listener`), com parâmetro.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/91cfa28e-0308-4c3a-b0f8-fd8c176ed07a/image.png)

Definição do comportamento ao receber um evento do componente filho (`method` e `listener`), com parâmetro.

![Definição do comportamento ao receber um evento do componente filho (`method` e `listener`), sem parâmetro.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/aee4c05f-ee83-4d75-8417-2cfcb24e10ff/image.png)

Definição do comportamento ao receber um evento do componente filho (`method` e `listener`), sem parâmetro.

O resultado no HTML após o clique pode ser observado adiante:

![Representação ilustrativa do resultado após o clique (emissão do evento).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/97508d49-4975-4887-b8b2-02a4d3b8104a/image.png)

Representação ilustrativa do resultado após o clique (emissão do evento).

Conseguimos, enfim, uma conversa bidirecional entre o componente pai e o componente filho.
