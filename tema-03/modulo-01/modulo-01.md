# Módulo 1: Estrutura básica do Vue.js

Ao final deste módulo, você será capaz de reconhecer a estrutura básica do Vue.js.

O Vue.js é uma ferramenta:

- Open-source

  Por ser mantido pela comunidade, o Vue.js não está associado a nenhuma Big Tech, o que confere mais segurança de que sua licença será permanente.

- Reativa

  Dado que a interface do usuário (HTML/CSS) reage às mudanças que acontecem “por baixo dos panos”.

- Leve

  Visto que ocupa menos de 100Kb na versão minificada para produção.

- Flexível

  Já que atende a projetos de pequenos a grandes, utilizando ECMAScript ou TypeScript como um bloco único ou dividido em componentes.

- Progressiva

  Uma vez que começa pequeno e cresce (por meio do próprio código ou da inserção de plugins) conforme a sua necessidade.

- Extensível

  Pois o Vue conta com diversos mecanismos para estender suas funcionalidades ou facilitar o trabalho do desenvolvedor. Um exemplo é o plugin Vue Dev Tools (para Firefox e Google Chrome), que permite um feedback em tempo real da aplicação, inclusive com os valores que cada componente possui no momento.

## Exemplo prático

Se você ainda não ficou convencido(a) sobre a capacidade do Vue, considere o mesmo projeto de um contador simples implementado de duas maneiras diferentes:

### **Sem Vue**

Contador é implementado com **JS puro**: <https://bit.ly/3upvLYZ>.

### **Com Vue**

Contador é implementado com Vue.js: <https://bit.ly/35Sfbra>.

Não se preocupe em entender a sintaxe nesse primeiro momento.

### **Curiosidade**

Perceba como se escreve menos com o Vue (produtividade) e como há uma melhoria considerável na legibilidade do código (melhor manutenção). Além disso, como o Vue não “suja” o HTML, o designer e o desenvolvedor podem trabalhar em conjunto sem se preocuparem em atrapalhar as tarefas um do outro.

## O que veremos

Em primeiro lugar, entenderemos como o Vue resolve o problema de uma interface de usuário reativa, ou seja, uma parte da tela da aplicação Web monitorada pelo Vue, de modo que, quando os dados mudarem, a tela se atualizará automaticamente.

Analise a imagem a seguir:

![Exemplo ilustrativo da janela de um navegador.](https://stecine.azureedge.net/repositorio/00212ti/04319/img/img03.jpg)

Exemplo ilustrativo da janela de um navegador.

Sobre a arquitetura do Vue, enquanto o usuário vê a janela do navegador, “por baixo dos panos”, no ”mundo Vue” existe uma variante chamada **nome** com o valor **João da Silv**. Enquanto o usuário digita, essa variável é atualizada “automaticamente”. Assim que ele digitar a última letra “a” do seu sobrenome, a variável receberá esse mesmo valor.

Incrível, não? Parece difícil implementar? Você será capaz de criar algo assim em questão de segundos! Como se sabe, quem entrega valor por meio de aplicações Web em pouco tempo é um profissional de valor para o mercado.

## **Comentário**

Em nossas atividades práticas, sempre trabalharemos com uma pequena história: nela, receberemos do designer um ou mais arquivos do template (você deverá fazer o download) e um conjunto de funcionalidades solicitado pelo cliente fictício.

## **Projeto – Carteirinha de Estudante**

## O que foi solicitado

A Universidade XPTO solicitou o desenvolvimento de uma página Web na qual os alunos possam se cadastrar para receber sua carteirinha de estudante. Ao digitar seus dados, o aluno poderá ver uma prévia da carteirinha (conforme imagem a seguir).

O designer da equipe já fez a parte dele. É nossa missão agora dar vida a esse template.

![Resultado esperado pelo cliente (Universidade XPTO).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/e3eafbe4-dcaa-42b7-8dcf-0877bea96c96/image.png)

Resultado esperado pelo cliente (Universidade XPTO).

## Conhecendo a estrutura do projeto

Abra o arquivo [**index.html**](https://stecine.azureedge.net/repositorio/00212ti/04319/docs/material_vue.zip) referente ao módulo que estamos estudando.

### **Dica**

Como IDE, sugere-se o uso do Visual Studio Code. Ele é gratuito e funciona no Linux, Windows e Mac OS. Caso decida utilizá-lo, instale também a extensão Vetur para obter uma melhor experiência no desenvolvimento. Se decidir usar outra IDE ou um simples editor de texto, tudo funcionará normalmente, mas você poderá perder produtividade. O Visual Studio com a extensão Vetur oferece facilidades que nos ajudam a digitar mais rápido, indentar o código corretamente e identificar erros com facilidade.

Verifique que o arquivo `index.html` não possui uma estrutura HTML muito grande e que, em seu cabeçalho, o documento HTML faz uma chamada externa para um arquivo de estilo (`styles.css`).

Ao percorrer as linhas, você verá uma `div` com id central. Nela, existem 2 `div` internas (formulário e prévia). Essas `divs` serão o nosso foco para a parte teórica e a prática deste módulo. O designer já indicou o local correto onde os dados devem aparecer, o que facilita muito o nosso trabalho.

![Dados vão do Vue para o HTML e vice-versa.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/c8e9f586-7c48-4460-ab33-93d430affc3d/image.png)

Dados vão do Vue para o HTML e vice-versa.

Como falamos anteriormente, o Vue.js tem funcionalidades que permitem fazer a ligação de uma variável no mundo Vue com elementos da interface do usuário. Vamos nos valer dessa importante característica. No Vue, essa ligação é chamada de `binding` (ou, mais especificamente, `two-way` \*\*\*\*`data binding`, tendo em vista que ela ocorre nos dois sentidos).

Utilizando esse `binding`, faremos com que nossa interface reaja à inserção de caracteres nos campos de entrada (inputs) à esquerda, mostrando o que o usuário digita na prévia da carteirinha de estudante (quadrado avermelhado).

## **Entregando valor ao cliente**

Seguiremos os seguintes passos para dar vida à aplicação com o Vue:

### **Passo 1: Importar o Vue**

Consiste em trazer o arquivo-base do framework para nossa aplicação.

### **Passo 2: Criar uma instância do Vue**

Resume-se a definir um objeto concreto, o qual utilizaremos para configurar nossa aplicação, lançando mão das funcionalidades do framework e guardando os dados gerenciados.

### **Passo 3: Montar a instância no HTML**

Consiste em definir a parte do nosso HTML da qual o Vue terá controle.

### **Passo 4: Fazer as ligações necessárias**

Baseia-se em apontar os dados pertencentes ao Vue e ligá-los em nosso HTML.

## Importar o Vue

Primeiramente, façamos o básico! Vamos empoderar a nossa página, adicionando o poder do Vue. Para isso, precisamos importar o Vue.js.

A maneira mais simples de fazer isso é por meio de uma CDN (Content delivery network), que, em termos práticos, é um serviço Web que nos fornece arquivos com boa performance e confiabilidade. Logo antes do fechamento da tag `body`, adicione a seguinte linha:

`<script src="https://unpkg.com/vue@3.0.0-rc.5/dist/vue.global.js" />`

A imagem adiante mostra o posicionamento correto da tag `script` (entre o fechamento da última `div` e o do `body`):

![Posicionamento correto do código para importar o Vue.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/6464844b-fd9f-4bcf-b7ed-13f70d91e593/image.png)

Posicionamento correto do código para importar o Vue.

Pronto. O Vue já está disponível, mas isso não significa que nossa interface seja reativa. Precisamos criar um objeto concreto do Vue, também chamado de instância (Vue Instance).

É nessa instância que definiremos em que parte do nosso HTML o Vue vai trabalhar e quais dados ele precisa monitorar, atualizar, gerenciar etc. Após isso, estaremos aptos a interagir com os dados e a apresentação deles no HTML, ou seja, na tela do usuário.

## Criar uma instância do Vue

Para a criação de um Vue Instance, devemos criar mais um bloco de tag script abaixo do já existente (que importa o Vue da CDN), inserindo o bloco a seguir:

```jsx
<script>Vue.createApp({})</script>
```

O resultado será como o desta imagem:

![Posicionamento correto do código citado para criar um Vue Instance.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/70aa55af-1c69-494c-b4a6-2e72cc238626/image.png)

Posicionamento correto do código citado para criar um Vue Instance.

Agora já temos nossas ferramentas à mão, podendo importar o Vue e declarar uma nova instância.

## Montar a instância no HTML

O terceiro passo é bem simples. Devemos apontar um bloco no HTML ao qual o Vue terá acesso e controle. Em nosso caso, escolheremos a tag #central, pois ela engloba tanto o #formulario quanto a #previa, que são o foco da aplicação que queremos desenvolver.

![Posicionamento correto do código para montar a instância no HTML.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/1ed656c2-71c4-489d-a67b-f69583969440/image.png)

Posicionamento correto do código para montar a instância no HTML.

Tendo controle sobre a `div` central como um todo, podemos monitorar o que é escrito no formulário e replicar as informações na previa, pois ambos são “filhos” da `div` com `id` central. Para fazermos o apontamento, diremos que a nosso Vue Instance deve ser montada na `div` com `id` central.

Basta, para isso, chamar o método `mount`, passando o seletor CSS de `id` (`#central`), conforme demonstra a imagem a seguir.

![Posicionamento correto do código para fazer o apontamento.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/f29860ee-2a12-41ba-83dd-a709d8df42a4/image.png)

Posicionamento correto do código para fazer o apontamento.

Uma leitura desse código seria: “crie um App (Vue Instance) e monte-o no elemento HTML, cujo id é central”.

## Fazer as ligações necessárias

### Expor os dados

Para o quarto passo, devemos primeiramente dizer ao Vue quais dados (data, em inglês) ele deve gerenciar e disponibilizar – no nosso caso, nome e matricula. No Vue, o atributo `data` precisa ser uma função que retorna um objeto, traduzindo em código.

Dentro das chaves (objeto JSON) do método `createApp`, devemos inserir o seguinte:

```jsx
data () {
  return {
    nome: "",
    matricula: "",
  }
},
```

Como nome e matricula constituem textos (string) e queremos mostrá-los inicialmente como um texto em branco, eles são inicializados como uma string vazia, abrindo e fechando aspas. Após essa inserção, o resultado será como o da imagem a seguir:

![Posicionamento correto do código para expor os dados a gerenciar.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/8b9892cf-9df8-4339-a1ec-aafef773a350/image.png)

Posicionamento correto do código para expor os dados a gerenciar.

Esta imagem faz uma recapitulação dos passos na prática:

![Recapitulação do posicionamento correto dos códigos.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/1f1d5197-9a8e-45f9-a68a-5bfef79bc8bf/image.png)

Recapitulação do posicionamento correto dos códigos.

Leia o código acima com os respectivos comentários. Isso vai ajudá-lo a entender o que fizemos até o momento. Essa base é muito importante para todo o seu aprendizado.

O Vue está pronto para enviar dados para o HTML. Porém, para finalizarmos as ligações, precisamos sair do mundo Vue e migrar para o HTML.

Elementos correspondentes ao nome e à matrícula estarão presentes em dois locais: no formulário e na prévia da carteirinha. No entanto, há uma diferença sutil.

### **Formulário**

Os dados saem do elemento HTML para a nosso Vue Instance, ou seja, o que eu digito no meu `input` HTML vai para a variável nome constante nos dados do Vue.

### **Na prévia da carteirinha**

Por outro lado, eles saem do Vue para o HTML, isto é, minha variável nome (dentro da função data) é representada no meu HTML.

## Ligações de entrada de dados

O Vue utiliza um mecanismo chamado diretivas para criar uma ligação entre o HTML e o mundo Vue. Elas são aplicadas como atributos do elemento HTML.

Você já conhece os atributos mais comuns, como `id`, `class`, `placeholder`, `type` e outros. Eles são diferentes para cada tag HTML. Assim também são as diretivas. Veremos diversas delas ao longo deste conteúdo.

Para ligarmos nossos dados em um elemento HTML, usaremos a **diretiva** `v-model`. Essa diretiva cria uma ligação de duas vias (two-way data binding) para que, quando o valor do elemento mude, a variável a ele ligada também seja modificada.

Analise a aplicação dessa diretiva na imagem a seguir:

![Posicionamento correto do código de utilização de diretiva (`v-model=”nome”` e `v-model-”matricula”`).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/605dae67-bb6d-4768-93bd-8c330e3a9249/image.png)

Posicionamento correto do código de utilização de diretiva (`v-model=”nome”` e `v-model-”matricula”`).

Dizemos ao Vue que nosso **primeiro** `input` representa o dado nome; o **segundo**, o dado matricula. Assim, ao atualizarmos o valor do input, isto é, ao digitarmos algum texto nele, a variável existente em nosso Vue Instance será atualizada.

## Ligações de saída (impressão) dos dados

O Vue está expondo os dados que deseja por meio da função data (que retorna um objeto a ser exposto). Definimos de onde ele receberá as informações para popular esses dados (input de texto relacionado ao nome e à matrícula), mas ainda não estamos vendo nenhuma saída (do mundo Vue para o HTML).

Precisamos dizer ao Vue onde ele tem de mostrar esses dados. Para isso vamos, usar bigodes. Aliás, bigodes duplos!

### **Agora você deve estar perguntando: bigodes? Ainda por cima duplos?**

Calma: é só uma maneira descontraída de dizer que o dado a ser impresso estará entre chaves – aliás, duplas de chaves. O termo correto é `template string`.

### **Exemplo**

`{{ dados-aqui }}`

Repare que cada chave parece um bigode em pé. Desse modo, a comunidade de desenvolvimento (os geeks) frequentemente se refere a esse tipo de representação como `double mustache`, ou seja, bigodes duplos.

Nosso amigo designer deixou uma pista para nós de onde deverão ser refletidas as variáveis **nome** e **matricula**; sendo assim, vamos usar os bigodes para mostrar essas variáveis em nosso HTML.

Nosso objetivo é substituir esse texto por uma indicação das variáveis do Vue mediante o uso das chaves (bigodes) duplas, criando, com isso, uma “janela” no nosso HTML onde tais informações serão mostradas. Observe as imagens a seguir que demonstram a substituição a ser realizada:

![Posicionamento correto do código para criar a janela onde as informações serão mostradas.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/f73a016b-1692-489b-bd7c-1332b84ef124/image.png)

Posicionamento correto do código para criar a janela onde as informações serão mostradas.

![Posicionamento correto do código para substituir as informações na janela.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/2a0e771e-6ddd-4e3b-8aa8-84745de1a7ee/image.png)

Posicionamento correto do código para substituir as informações na janela.

Salve o arquivo `index.html`. Caso ele ainda não esteja aberto, abra-o no seu navegador favorito. Se já estiver aberto, atualize a página, digite algo no input de nome e matrícula e veja o resultado!

Nosso primeiro projeto está pronto. Chame todo mundo para vê-lo! Comemore as pequenas evoluções.

## Refatorando: criando uma melhor experiência

Você reparou que o texto que nós escrevemos com as chaves duplas (bigodes) pisca na tela assim que atualizamos a página? Faça o teste. Atualize olhando para a prévia do cartão e observe.

Pode parecer algo trivial, porém, quando estivermos trabalhando com muitos dados, isso poderá ocasionar uma experiência ruim no nosso usuário final. Precisamos, portanto, refatorar nosso código.

> **A refatoração é um processo sistemático de melhoria em um código sem criar novas funcionalidades, somente melhorando o que já existe. Ela organiza o código ou reescreve as mesmas funcionalidades de uma maneira mais organizada e/ou corrigida.**

Para resolvermos o problema dos elementos piscando, podemos seguir **duas** abordagens:

- Usando `v-text` em vez dos bigodes.
- Usando a diretiva `v-cloak`.

Para utilizar a primeira opção, basta remover a indicação entre chaves e usar a variável que se quer imprimir dentro de um atributo `v-text` do elemento HTML. O resultado pode ser visto a seguir:

![Posicionamento correto do código citado para usar `v-text` em vez dos bigodes (antes).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/fb824c4e-f0c9-4478-bd45-d33fc4cd0f2e/image.png)

Posicionamento correto do código citado para usar `v-text` em vez dos bigodes (antes).

![Posicionamento correto do código citado para usar `v-text` em vez dos bigodes (depois).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/a5c56c42-3444-4d2d-8300-99f7916b1749/image.png)

Posicionamento correto do código citado para usar `v-text` em vez dos bigodes (depois).

Antes de iniciarmos a explanação da segunda opção, gostaríamos de abordar uma convenção muito comum para os desenvolvedores que trabalham com o Vue.js: a de utilizar uma `div` com `id` app para ser o local de montagem da instância Vue.

Repare que utilizamos a `div` com `id` central. Não há problema nessa abordagem, mas é sempre indicado trabalhar com o que a comunidade costuma utilizar a fim de facilitar o trabalho de outros desenvolvedores e seguir o padrão da comunidade, uma vez que frequentemente precisamos pedir ajuda em fóruns e grupos.

O ideal é que a `div` app envolva o máximo de HTML sem comprometer o estilo da página. No nosso caso, a colocaremos logo abaixo da tag `body`, envolvendo a `div` com `id` `wrapper`.

![Posicionamento correto do código citado para utilizar uma `div` com `id` app.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/8608351d-91db-4442-9bef-da7d2b72aa2d/image.png)

Posicionamento correto do código citado para utilizar uma `div` com `id` app.

Agora estamos prontos para usar a diretiva `v-cloak`, de acordo com o que indicamos como segunda opção, para evitar que os elementos pisquem na tela. Para isso, devemos colocar a diretiva `v-cloak` na `div#app` e, em nosso arquivo de estilo, indicar `display:none` para os elementos que possuam essa diretiva.

![Posicionamento correto do código citado para usar a diretiva `v-cloak` (no arquivo `index.html`).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/9674a672-df1c-4fd1-aec0-91f3497dbcf8/image.png)

Posicionamento correto do código citado para usar a diretiva `v-cloak` (no arquivo `index.html`).

![Posicionamento correto do código citado para usar a diretiva `v-cloak` (no arquivo `styles.css`).](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/8b92ca0f-82a1-4e59-a9e5-78da1daaba19/image.png)

Posicionamento correto do código citado para usar a diretiva `v-cloak` (no arquivo `styles.css`).
