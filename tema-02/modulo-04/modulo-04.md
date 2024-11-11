# Módulo 4: AJAX com jQuery

Ao final deste módulo, você será capaz de empregar requisições AJAX com o framework jQuery.

## AJAX com jQuery

As requisições assíncronas são um recurso importantíssimo, até mesmo fundamental, no ambiente web, uma vez que otimizam a comunicação entre os lados cliente e servidor. A partir dessa premissa, veremos, ao longo deste conteúdo, como o framework jQuery nos possibilita, de forma bastante simples, realizar requisições AJAX.

## O que é AJAX?

Esta sigla significa Asynchronous Javascript and XML ou Javascript e XML Assíncronos. Separando os termos que a compõem, temos:

![Significado dos termos da sigla AJAX.](https://prod-files-secure.s3.us-west-2.amazonaws.com/668b7fb3-6860-4388-be24-c71210d5b102/7ba2a346-451e-49d8-b0d0-e8eb93953543/image.png)

Significado dos termos da sigla AJAX.

Isso implica a submissão de requisições, a partir de uma página web, sem interrupção em seu fluxo. Em outras palavras, a partir de requisições assíncronas, é possível requisitar recursos remotos, transferir dados e utilizá-los na página sem a necessidade de recarregá-la.

Embora constante em sua definição, o XML não é o único formato de transmissão de dados disponível em requisições AJAX. Além dele, podemos usar o JSON (que, inclusive, tem sido o formato mais utilizado atualmente), e outros tipos de dados.

## A interface `jQuery.ajax()`

Para realizar requisições assíncronas por meio de jQuery, fazemos uso da interface `jQuery.ajax()`. A sintaxe desse método, como visto a seguir, é composta pela URL para a qual submeteremos a requisição e por um parâmetro, no formato de objeto, que contém informações adicionais relacionadas à requisição.

```js
jQuery.ajax(url[, settings])
```

Confira a seguir o primeiro exemplo, em que será demonstrado o código do lado cliente, o qual deverá ser salvo como arquivo html. Leia com atenção os comentários inseridos no próprio código, no qual há explicações adicionais. Observe ainda que a url de destino não existe. Logo, para tornar o exemplo real, substitua a url em questão por uma real.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Requisições AJAX com jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <p>
      <a id="lnk" href="javascript:void(0);">Executar a requisição AJAX</a>
    </p>

    <!-- Esse div mostrará o resultado da requisição AJAX -->
    <div id="resultado"></div>

    <script type="text/javascript">
      // Click do link
      $("#lnk").click(function () {
        $.ajax({
          url: "url/recurso",
          type: "post",
          beforeSend: function () {
            // A função beforeSend é chamada antes da requisição ser submetida.
            // Dependendo da velocidade do retorno da requisição, a msg abaixo pode não chegar a ser exibida
            $("#resultado").html("Carregando...");
          },
        })

          .done(function (msg) {
            // Em caso de sucesso, mostrar na div #resultado o retorno da requisição
            $("#resultado").html(msg);
          })

          .fail(function (jqXHR, textStatus, msg) {
            // Em caso de fracasso, mostrar no console a mensagem de erro retornada
            console.log(
              "A requisição falhou e retornou com a seguinte mensagem: " + msg
            );
          });
      });
    </script>
  </body>
</html>
```

Como a url utilizada não existe, você poderá ver o erro retornado em caso de falhas (`.fail`) no console do inspecionador de elementos.

Esse primeiro exemplo foi bastante simples e serviu para apresentar como realizar uma requisição básica. No próximo exemplo, veremos como enviar dados na requisição e a subteremos para uma url real – um serviço on-line que responde a requisições AJAX. Vamos ao código!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Requisições AJAX com jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <p>
      <a id="lnk" href="javascript:void(0);">Executar a requisição AJAX</a>
    </p>

    <!-- Esse div mostrará o resultado da requisição AJAX -->
    <div id="resultado"></div>

    <script type="text/javascript">
      //Click do link
      $("#lnk").click(function () {
        $.ajax({
          url: "https://reqres.in/api/users",
          type: "post",
          data: {
            name: "Jose Maria",
            movies: ["Sem igual", "Incomparável"],
          },
          beforeSend: function () {
            // A função beforeSend é chamada antes da requisição ser submetida.
            // Dependendo da velocidade do retorno da requisição, a msg abaixo pode não chegar a ser exibida
            $("#resultado").html("Carregando...");
          },
        })

          .done(function (msg) {
            // Em caso de sucesso, mostrar na div #resultado o retorno da requisição
            console.log("Retorno: " + JSON.stringify(msg));
            console.dir(msg);

            // Assim como o método $.each, esse método percorre um array
            $.map(msg["movies[]"], function (val, i) {
              console.log(val);
            });

            var content = "";

            $.each(msg["movies[]"], function (index, value) {
              content += value + " - ";
            });

            $("#resultado").html(
              "Nome: " +
                msg.name +
                "<br/>" +
                "Filmes: " +
                content +
                "<br/>" +
                "Id: " +
                msg.id +
                "<br/>" +
                "Data de Criação: " +
                msg.createdAt
            );
          })

          .fail(function (jqXHR, textStatus, msg) {
            // Em caso de fracasso, mostrar no console a mensagem de erro retornada
            console.log(
              "A requisição falhou e retornou com a seguinte mensagem: " + msg
            );
          });
      });
    </script>
  </body>
</html>
```

Atente-se a alguns comentários importantes sobre esse código!

- A exemplo do código anterior, é realizada uma requisição AJAX, utilizando o método HTTP POST.
- A URL para a qual a requisição foi submetida pertence a um serviço on-line que pode responder a diversos tipos de requisição. Em nosso caso, foi criado um recurso que, em seguida, foi devolvido como resposta à solicitação.
- O atributo “`data`” foi utilizado para enviar dados para a URL requisitada. Foram passados uma `string`, `name`, e um `array`, `movies`.
- Os dados recebidos em resposta à requisição vieram no formato **JSON**, sendo armazenados na variável msg. Esses resultados foram acessados por meio da notação de objetos – “`objeto.atributo`” e concatenados para serem inseridos dentro da `<div>` onde foram exibidos na página.
- Entre os dados retornados, merece destaque o atributo “`movies`”, por se tratar de um `array`. Note no código que há dois métodos, tendo um permanecido comentado, para tratar esse tipo de estrutura: o `$.map` e o `$.each`.

A biblioteca jQuery possui ainda dois outros métodos para realização de requisições AJAX. São eles!

- `$.get()`

  Permite que sejam feitas requisições utilizando o método HTTP GET.

- `$.post()`

  Permite requisições HTTP POST.

Além disso, com o segundo método, é possível enviar dados na requisição. A sintaxe de ambos os métodos pode ser vista nos exemplos a seguir!

```js
// Sintaxe: $.get(URL,callback);
$.get("/url/recurso", function (data, status) {
  alert("Dados Retornados: " + data + "\nStatus: " + status);
});

//Sintaxe: $.post(URL,data,callback);
$.post("/url/recurso", { id: 1, order: "asc" }, function (data, status) {
  alert("Dados Retornados: " + data + "\nStatus: " + status);
});
```

## Utilizando jQuery, AJAX e formulários

A combinação desses três componentes – jQuery, AJAX e formulários – é muito comum em páginas web: formulários para subscrição em newsletter ou cadastro e, sobretudo, filtro de listagens, como listas de produtos em sites de e-commerce, por exemplo. Veremos, de forma prática, como combinar esses três componentes. Para melhor entendimento, separamos os códigos em três seguintes blocos:

1. HTML
2. Javascript
3. JSON

Para executá-los, salve todos em uma mesma pasta.

### Arquivo JSON

Esse arquivo contém alguns dados – id, fabricante, modelo, ano, cor e valor - relacionados a veículos. Salve-o como “`json_data.json`”. Veja!

```json
[
  {
    "id": 1,
    "fabricante": "Toyota",
    "modelo": "T100",
    "ano": 1996,
    "cor": "Red",
    "valor": "186096.79"
  },
  {
    "id": 2,
    "fabricante": "Porsche",
    "modelo": "911",
    "ano": 1985,
    "cor": "Crimson",
    "valor": "430049.68"
  },
  {
    "id": 3,
    "fabricante": "Lexus",
    "modelo": "ES",
    "ano": 2010,
    "cor": "Maroon",
    "valor": "96742.09"
  },
  {
    "id": 4,
    "fabricante": "Mercury",
    "modelo": "Grand Marquis",
    "ano": 2008,
    "cor": "Crimson",
    "valor": "286282.99"
  },
  {
    "id": 5,
    "fabricante": "Chevrolet",
    "modelo": "Express 3500",
    "ano": 2012,
    "cor": "Red",
    "valor": "116631.05"
  },
  {
    "id": 6,
    "fabricante": "Volkswagen",
    "modelo": "R32",
    "ano": 2008,
    "cor": "Red",
    "valor": "243113.93"
  },
  {
    "id": 7,
    "fabricante": "Chevrolet",
    "modelo": "Impala",
    "ano": 2011,
    "cor": "Yellow",
    "valor": "413875.02"
  },
  {
    "id": 8,
    "fabricante": "Ford",
    "modelo": "Excursion",
    "ano": 2002,
    "cor": "Mauv",
    "valor": "251252.94"
  },
  {
    "id": 9,
    "fabricante": "Mitsubishi",
    "modelo": "GTO",
    "ano": 1995,
    "cor": "Mauv",
    "valor": "400976.19"
  },
  {
    "id": 10,
    "fabricante": "Mercury",
    "modelo": "Marauder",
    "ano": 2004,
    "cor": "Crimson",
    "valor": "255487.79"
  },
  {
    "id": 11,
    "fabricante": "Oldsmobile",
    "modelo": "Aurora",
    "ano": 2002,
    "cor": "Turquoise",
    "valor": "390444.16"
  },
  {
    "id": 12,
    "fabricante": "Volkswagen",
    "modelo": "Phaeton",
    "ano": 2006,
    "cor": "Khaki",
    "valor": "51913.89"
  },
  {
    "id": 13,
    "fabricante": "Nissan",
    "modelo": "Sentra",
    "ano": 1994,
    "cor": "Fuscia",
    "valor": "158454.06"
  },
  {
    "id": 14,
    "fabricante": "BMW",
    "modelo": "M5",
    "ano": 2002,
    "cor": "Purple",
    "valor": "480150.84"
  },
  {
    "id": 15,
    "fabricante": "Dodge",
    "modelo": "Ram",
    "ano": 2007,
    "cor": "Yellow",
    "valor": "479547.46"
  },
  {
    "id": 16,
    "fabricante": "Mercedes-Benz",
    "modelo": "300SE",
    "ano": 1993,
    "cor": "Khaki",
    "valor": "490121.57"
  },
  {
    "id": 17,
    "fabricante": "Subaru",
    "modelo": "Impreza",
    "ano": 2012,
    "cor": "Green",
    "valor": "287932.08"
  },
  {
    "id": 18,
    "fabricante": "BMW",
    "modelo": "1 Series",
    "ano": 2011,
    "cor": "Mauv",
    "valor": "120264.57"
  },
  {
    "id": 19,
    "fabricante": "Ford",
    "modelo": "Escort",
    "ano": 2002,
    "cor": "Mauv",
    "valor": "226851.63"
  },
  {
    "id": 20,
    "fabricante": "Maserati",
    "modelo": "GranSport",
    "ano": 2005,
    "cor": "Teal",
    "valor": "67557.36"
  },
  {
    "id": 21,
    "fabricante": "Mercury",
    "modelo": "Lynx",
    "ano": 1987,
    "cor": "Pink",
    "valor": "451335.20"
  },
  {
    "id": 22,
    "fabricante": "Subaru",
    "modelo": "Loyale",
    "ano": 1992,
    "cor": "Turquoise",
    "valor": "127782.31"
  },
  {
    "id": 23,
    "fabricante": "Kia",
    "modelo": "Sedona",
    "ano": 2007,
    "cor": "Aquamarine",
    "valor": "308650.30"
  },
  {
    "id": 24,
    "fabricante": "Hyundai",
    "modelo": "Azera",
    "ano": 2009,
    "cor": "Goldenrod",
    "valor": "90793.90"
  },
  {
    "id": 25,
    "fabricante": "Jaguar",
    "modelo": "X-Type",
    "ano": 2005,
    "cor": "Maroon",
    "valor": "182368.74"
  },
  {
    "id": 26,
    "fabricante": "GMC",
    "modelo": "Sierra 1500",
    "ano": 1999,
    "cor": "Pink",
    "valor": "249892.18"
  },
  {
    "id": 27,
    "fabricante": "Volvo",
    "modelo": "S60",
    "ano": 2004,
    "cor": "Violet",
    "valor": "280641.74"
  },
  {
    "id": 28,
    "fabricante": "Dodge",
    "modelo": "Ram 3500",
    "ano": 1994,
    "cor": "Green",
    "valor": "292340.53"
  },
  {
    "id": 29,
    "fabricante": "Saab",
    "modelo": "9-3",
    "ano": 2002,
    "cor": "Pink",
    "valor": "389986.77"
  },
  {
    "id": 30,
    "fabricante": "BMW",
    "modelo": "X6",
    "ano": 2008,
    "cor": "Puce",
    "valor": "27442.31"
  },
  {
    "id": 31,
    "fabricante": "Ford",
    "modelo": "Taurus",
    "ano": 2013,
    "cor": "Puce",
    "valor": "372629.75"
  },
  {
    "id": 32,
    "fabricante": "Honda",
    "modelo": "Odyssey",
    "ano": 2010,
    "cor": "Puce",
    "valor": "41816.09"
  },
  {
    "id": 33,
    "fabricante": "Jeep",
    "modelo": "Liberty",
    "ano": 2012,
    "cor": "Khaki",
    "valor": "413117.00"
  },
  {
    "id": 34,
    "fabricante": "Dodge",
    "modelo": "Durango",
    "ano": 2011,
    "cor": "Aquamarine",
    "valor": "165699.62"
  },
  {
    "id": 35,
    "fabricante": "Ford",
    "modelo": "Excursion",
    "ano": 2004,
    "cor": "Fuscia",
    "valor": "80175.61"
  },
  {
    "id": 36,
    "fabricante": "Oldsmobile",
    "modelo": "Silhouette",
    "ano": 1992,
    "cor": "Crimson",
    "valor": "362372.95"
  },
  {
    "id": 37,
    "fabricante": "Volkswagen",
    "modelo": "Fox",
    "ano": 1987,
    "cor": "Indigo",
    "valor": "357444.07"
  },
  {
    "id": 38,
    "fabricante": "Hummer",
    "modelo": "H1",
    "ano": 1996,
    "cor": "Violet",
    "valor": "476128.92"
  },
  {
    "id": 39,
    "fabricante": "Isuzu",
    "modelo": "Hombre",
    "ano": 2000,
    "cor": "Indigo",
    "valor": "478556.20"
  },
  {
    "id": 40,
    "fabricante": "Chevrolet",
    "modelo": "Colorado",
    "ano": 2012,
    "cor": "Turquoise",
    "valor": "205214.78"
  },
  {
    "id": 41,
    "fabricante": "Jeep",
    "modelo": "Wrangler",
    "ano": 2000,
    "cor": "Purple",
    "valor": "122048.81"
  },
  {
    "id": 42,
    "fabricante": "Toyota",
    "modelo": "Avalon",
    "ano": 2004,
    "cor": "Orange",
    "valor": "18346.39"
  },
  {
    "id": 43,
    "fabricante": "Honda",
    "modelo": "Element",
    "ano": 2005,
    "cor": "Violet",
    "valor": "487528.80"
  },
  {
    "id": 44,
    "fabricante": "Toyota",
    "modelo": "Prius Plug-in",
    "ano": 2012,
    "cor": "Green",
    "valor": "107591.60"
  },
  {
    "id": 45,
    "fabricante": "Mercury",
    "modelo": "Sable",
    "ano": 1986,
    "cor": "Maroon",
    "valor": "388634.82"
  },
  {
    "id": 46,
    "fabricante": "Toyota",
    "modelo": "Prius",
    "ano": 2003,
    "cor": "Khaki",
    "valor": "215297.31"
  },
  {
    "id": 47,
    "fabricante": "Lexus",
    "modelo": "LS",
    "ano": 2006,
    "cor": "Teal",
    "valor": "399422.11"
  },
  {
    "id": 48,
    "fabricante": "Porsche",
    "modelo": "944",
    "ano": 1986,
    "cor": "Mauv",
    "valor": "211983.89"
  },
  {
    "id": 49,
    "fabricante": "Infiniti",
    "modelo": "I",
    "ano": 1997,
    "cor": "Violet",
    "valor": "166320.40"
  },
  {
    "id": 50,
    "fabricante": "Land Rover",
    "modelo": "LR4",
    "ano": 2010,
    "cor": "Pink",
    "valor": "279013.31"
  }
]
```

### Arquivo Javascript

Neste arquivo, estão todas as funções e os códigos responsáveis por carregar o arquivo JSON, montar a tabela HTML e filtrar os dados. Tudo isso utilizando jQuery – olhe com atenção o código, pois algumas funções, não vistas anteriormente, foram usadas. A sintaxe e o papel dessas funções são autoexplicativos de acordo com o contexto em que foram aplicadas e em razão dos resultados que produziram. Salve esse arquivo como “`scripts.js`”.

```js
// Carrega os dados do arquivo json e os exibe no carregamento da página
carregaDadosJson();

function carregaDadosJson() {
  $.ajax({
    dataType: "json",
    url: "json_data.json",
    beforeSend: function () {
      $("#resultado").html("Carregando...");
    },
  })
    .done(function (result) {
      var table = "<table id='veiculos'>";
      table +=
        "<tr><th>Id</th><th>Fabricante</th><th>Modelo</th><th>Ano</th><th>Cor</th><th>Valor</th></tr>";
      $.map(result, function (val, i) {
        table +=
          "<tr>" +
          "<td>" +
          val.id +
          "</td>" +
          '<td class="col_fabricante">' +
          val.fabricante +
          "</td>" +
          '<td class="col_modelo">' +
          val.modelo +
          "</td>" +
          '<td class="col_ano">' +
          val.ano +
          "</td>" +
          "<td>" +
          val.cor +
          "</td>" +
          "<td>" +
          val.valor +
          "</td>" +
          "</tr>";
      });
      table += "</table>";
      $("#resultado").html("");
      $("#resultado").append(table);
    })
    .fail(function (jqXHR, textStatus, msg) {
      //Em caso de fracasso, mostrar no console a mensagem de erro retornada
      console.log(
        "A requisição falhou e retornou com a seguinte mensagem: " + msg
      );
    });
}

//Funções de Filtros
//#1 Clique no checkbox - Fabricante
$("form input:radio").click(function (ck) {
  if ($(this).prop("checked") == true)
    filtrarDados("Fabricante", $(this).val());
});

//#2 Digitação no input - Modelo
$("#modelo").keyup(function () {
  var modelo = $(this).val();
  if (modelo.length > 0) {
    console.log(modelo.length);
    filtrarDados("Modelo", modelo);
  } else {
    carregaDadosJson();
  }
});

function filtrarPorAno() {
  var ano_de = $("#ano_de").val();
  var ano_ate = $("#ano_ate").val();
  if (ano_de.length > 0 && ano_de.length != 4) {
    alert("Insira o ano com 4 dígitos");
    $("#ano_de").focus();
  }
  if (ano_ate.length > 0 && ano_ate.length != 4) {
    alert("Insira o ano com 4 dígitos");
    $("#ano_ate").focus();
  }

  //Filtrando os dados se apenas o ano 'a partir de' for inserido
  if (ano_de.length > 0 && ano_ate.length == 0) {
    $("#veiculos td.col_ano")
      .filter(function () {
        return $(this).text() != ano_de || $(this).text() <= ano_de;
      })
      .parent()
      .hide();

    $("#veiculos td.col_ano")
      .filter(function () {
        return $(this).text() == ano_de || $(this).text() >= ano_de;
      })
      .parent()
      .show();
  }

  //Filtrando os dados se apenas o ano 'até' for inserido
  if (ano_ate.length > 0 && ano_de.length == 0) {
    $("#veiculos td.col_ano")
      .filter(function () {
        return $(this).text() != ano_ate || $(this).text() >= ano_ate;
      })
      .parent()
      .hide();

    $("#veiculos td.col_ano")
      .filter(function () {
        return $(this).text() == ano_ate || $(this).text() <= ano_ate;
      })
      .parent()
      .show();
  }

  //Filtrando os dados se os anos 'a partir de' e 'até' forem inseridos
  if (ano_de.length > 0 && ano_ate.length > 0) {
    $("#veiculos td.col_ano")
      .filter(function () {
        return $(this).text();
      })
      .parent()
      .hide();

    $("#veiculos td.col_ano")
      .filter(function () {
        return $(this).text() >= ano_de && $(this).text() <= ano_ate;
      })
      .parent()
      .show();
  }
}

function filtrarDados(target, value) {
  if (target == "Fabricante") {
    if (value != "Outros") {
      $("#veiculos td.col_fabricante:contains('" + value + "')")
        .parent()
        .show();
      $("#veiculos td.col_fabricante:not(:contains('" + value + "'))")
        .parent()
        .hide();
    } else {
      $(
        "#veiculos td.col_fabricante:not(:contains('Toyota')), td.col_fabricante:not(:contains('Ford')), td.col_fabricante:not(:contains('BMW')), td.col_fabricante:not(:contains('Dodge'))"
      )
        .parent()
        .show();
      $(
        "#veiculos td.col_fabricante:contains('Toyota'), td.col_fabricante:contains('Ford'), td.col_fabricante:contains('BMW'), td.col_fabricante:contains('Dodge')"
      )
        .parent()
        .hide();
    }
  } else if (target == "Modelo") {
    $("#veiculos td.col_modelo:contains('" + value + "')")
      .parent()
      .show();
    $("#veiculos td.col_modelo:not(:contains('" + value + "'))")
      .parent()
      .hide();
  }
}
```

### Arquivo HTML

Por último, o arquivo HTML contém o código HTML, alguns códigos CSS (que também poderiam ficar em um arquivo externo) e incorpora os scripts JS. Salve esse arquivo com o nome que desejar e com a extensão “`.html`”.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Utilizando jQuery, AJAX e Formulários</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.5.1.js"
    ></script>
    <style type="text/css">
      #filtro {
        width: 300px;
        float: left;
      }

      #resultado {
        width: 600px;
        float: left;
      }

      table {
        border-collapse: collapse;
      }

      th,
      td {
        padding: 15px;
        text-align: left;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      #ano_de,
      #ano_ate {
        width: 60px;
      }
    </style>
  </head>
  <body>
    <div id="filtro">
      <h1>Filtros:</h1>
      <form id="form_filtros" action="javascript:void(0)">
        <h2>Fabricante:</h2>
        <input type="radio" id="fabricante" name="fabricante" value="Toyota" />
        <label for="fabricante1"> Toyota</label><br />
        <input type="radio" id="fabricante" name="fabricante" value="Ford" />
        <label for="fabricante2"> Ford</label><br />
        <input type="radio" id="fabricante" name="fabricante" value="BMW" />
        <label for="fabricante3"> BMW</label><br />
        <input type="radio" id="fabricante" name="fabricante" value="Dodge" />
        <label for="fabricante4"> Dodge</label><br />
        <input type="radio" id="fabricante" name="fabricante" value="Outros" />
        <label for="fabricante5"> Outros</label><br />

        <h2>Modelo:</h2>
        <input
          type="text"
          name="modelo"
          id="modelo"
          placeholder="Digite o modelo"
        />

        <h2>Ano:</h2>
        <input type="text" name="ano_de" id="ano_de" maxlength="4" /> a
        <input type="text" name="ano_ate" id="ano_ate" maxlength="4" />
        <a href="javascript:void(0)" onclick="filtrarPorAno()"> Filtrar Ano</a>

        <br />
        <br />
        <a href="javascript:void(0)" onclick="carregaDadosJson()"> Limpar</a>
      </form>
    </div>

    <!-- Esse div mostrará o resultado da requisição AJAX -->
    <div id="resultado"></div>

    <script type="text/javascript" src="scripts.js"></script>
  </body>
</html>
```

## Seletores e métodos jQuery

Finalizando este estudo, cabem algumas considerações finais sobre os códigos utilizados ao longo dele – em especial aos relacionados ao tópico atual, no qual integramos jQuery, AJAX e HTML, também englobando os conceitos vistos ao longo dos demais conteúdos:

### Seletores jQuery

Vários seletores foram usados para acessar os elementos e seus atributos. Por exemplo: no filtro de fabricante, foi verificado se um elemento radio estava marcado acessando sua propriedade “`checked`”.

### Eventos para manipulação do DOM

Usando o método `append`, por exemplo, o conteúdo JSON, consumido via AJAX, foi incorporado à página HTML.

### Validação de dados

Alguns dados do formulário foram validados com a propriedade jQuery “`val()`”, que contém o valor dos elementos do formulário. Essa validação pode ser vista no filtro por ano.

Conheça outros eventos e métodos jQuery utilizados!

- `$.map`

  Para iteração em `array` – em nosso exemplo, foi usado para manipular os dados JSON e construir as linhas e colunas da tabela HTML.

- `filter`

  Para filtrar dados – em nosso exemplo, foi usado no filtro de anos.

- `:contains` e `:not(:contains)`

  Para filtrar o conteúdo de elementos – em nosso exemplo, foi utilizado nos filtros por modelo e fabricante.

- `Show` e `hide`:

  Para mostrar ou esconder elementos HTML – em nosso exemplo, foi utilizado para mostrar e esconder os dados de acordo com os filtros aplicados.

Embora tenha sido produzido um resultado bastante funcional com as técnicas empregadas, há uma série de outras possibilidades que não foram implementadas ou exploradas nos códigos desenvolvidos. A seguir, algumas dessas oportunidades de melhoria no código serão apresentadas.

- Componentes ricos e filtros adicionais

  Nos exemplos, foram utilizados alguns filtros que não cobriram todas as possibilidades, considerando os dados disponíveis. Por exemplo: não foram implementados filtros por cor e valor.

  Além disso, uma funcionalidade importante ficou de fora: a ordenação dos dados. Todas essas funcionalidades podem ser implementadas e acrescentadas ao código existente, seguindo a mesma linha adotada, ou aperfeiçoadas com a utilização de componentes adicionais.

  O framework jQuery possui uma biblioteca adicional, a jQuery UI, repleta de componentes visuais ricos, como slider (que poderia ser aplicado para filtrar os valores), autocomplete (que poderia ser aplicado na busca por modelo e fabricante), entre outros.

- Arquitetura

  Na arquitetura utilizada, os filtros foram aplicados sobre os dados a partir dos elementos HTML. Essa abordagem economiza o tráfego de dados, uma vez que não realiza novas requisições AJAX de acordo com o filtro escolhido. Por outro lado, dependendo da quantidade de dados retornados ou de outros fatores, nem sempre trazemos todos os dados de uma única vez.

  É muito comum utilizarmos paginação, carregando uma quantidade inicial de dados, e, mediante demanda e interação do usuário, carregarmos mais dados. Nesse caso, os filtros em elementos HTML não nos atenderiam. Por outro lado, as técnicas e funções jQuery empregadas também podem ser empregadas para filtrar os dados diretamente na requisição AJAX, combinando-as àquelas relativas à paginação e ao carregamento gradual de informações.

## Realizando requisições AJAX com jQuery

Como vimos, o framework jQuery fornece uma série de recursos para a realização de requisições AJAX e para o tratamento do retorno de tais requisições, incluindo eventuais erros. Por mais que seja importante e estimulante lidarmos com desafios mais complexos, é fundamental sabermos de forma sólida a base, o fundamento, tanto conceitual quanto prático, de tudo o que codificamos. Nesse sentido, esta prática consistirá na criação de uma página HTML e do código Javascript, utilizando jQuery, para consumir os dados de uma API externa e exibir seus resultados.

## Roteiro de prática

Antes de codificar, tome nota das ferramentas que você precisará para a realização dessa atividade: um editor de textos – pode ser o próprio Bloco de Notas do Windows ou o Nano Editor do Linux, ou então algo um pouquinho mais avançado, como o software (gratuito) Notepad++. Você precisará também de um navegador – Google Chrome, Firefox, MS Edge etc. Agora, vamos ao roteiro da prática:

1. No editor, crie a estrutura base de uma página HTML – `DOCTYPE`, `html`, `head` e `body`. Lembre-se de abrir e fechar corretamente cada tag.
2. Importe/inclua, dentro da tag `<head>`, o framework jQuery.
3. Utilizando alguns dos recursos jQuery que vimos – em especial a interface `$.ajax`, crie um link na página que, ao ser clicado, dispare uma função que:

   1. Acesse a API `https://reqres.in/api/users?page=1`.
   2. Colete os dados retornados pela API e os exiba em uma tabela HTML.

4. Lembre-se de tratar os eventuais erros que podem acontecer ao longo do código implementado.

5. Ao final, salve a página no editor e a abra no navegador para ver o resultado.

O resultado deverá ser parecido com o exibido na seguinte imagem!

![Resultado da prática no navegador.](https://stecine.azureedge.net/repositorio/00212ti/07662/img/4.png)

Resultado da prática no navegador.

A resolução da prática poderá ser feita de diferentes maneiras, como usando o código a seguir!

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Requisições AJAX com jQuery</title>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.6.4.js"
    ></script>
  </head>
  <body>
    <p>
      <a id="lnk" href="javascript:void(0);">Executar a requisição AJAX</a>
    </p>

    <!-- Esse div mostrará o resultado da requisição AJAX -->
    <div id="resultado"></div>

    <script type="text/javascript">
      // Click do link
      $("#lnk").click(function () {
        $.ajax({
          url: "https://reqres.in/api/users?page=2",
          type: "get",
          beforeSend: function () {
            // A função beforeSend é chamada antes da requisição ser submetida.
            // Dependendo da velocidade do retorno da requisição, a msg abaixo pode não chegar
            // a ser exibida
            $("#resultado").html("Carregando...");
          },
        })
          .done(function (msg) {
            // Em caso de sucesso, mostrar na div #resultado o retorno da requisição
            var table = "<table border='1'>";
            table +=
              "<tr><th>Id</th><th>Email</th><th>Nome</th><th>Sobrenome</th><th>Avatar</th></tr>";
            $.map(msg.data, function (val, i) {
              table +=
                "<tr>" +
                "<td>" +
                val.id +
                "</td>" +
                "<td>" +
                val.email +
                "</td>" +
                "<td>" +
                val.first_name +
                "</td>" +
                "<td>" +
                val.last_name +
                "</td>" +
                "<td>" +
                val.avatar +
                "</td>" +
                "</tr>";
            });
            table += "</table>";
            $("#resultado").html("");
            $("#resultado").append(table);
          })
          .fail(function (jqXHR, textStatus, msg) {
            // Em caso de fracasso, mostra no console a mensagem de erro retornada
            console.log(
              "A requisição falhou e retornou com a seguinte mensagem: " + msg
            );
          });
      });
    </script>
  </body>
</html>
```
