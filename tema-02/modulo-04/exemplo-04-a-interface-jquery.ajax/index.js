// Sintaxe: $.get(URL,callback);
$.get("/url/recurso", function (data, status) {
  alert("Dados Retornados: " + data + "\nStatus: " + status);
});

//Sintaxe: $.post(URL,data,callback);
$.post("/url/recurso", { id: 1, order: "asc" }, function (data, status) {
  alert("Dados Retornados: " + data + "\nStatus: " + status);
});
