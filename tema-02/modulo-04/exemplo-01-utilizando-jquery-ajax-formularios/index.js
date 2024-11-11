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
