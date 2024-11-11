<template>
  <h2>Cidade Selecionada: {{ cidadeselecionada }}</h2>
  <div class="lista">
    <CardCidade
      v-for="cidade in cidades"
      :key="cidade.id"
      :cidade="cidade"
      v-on:cidadeclicada="mudarcidadeselecionada"
    />
  </div>
</template>

<script>
import CardCidade from "./CardCidade.vue";
export default {
  components: { CardCidade },
  methods: {
    mudarcidadeselecionada(cidade) {
      alert(cidade.name);
    },
  },
  data() {
    return {
      cidadeselecionada: "",
      cidades: [
        {
          id: 8429,
          name: "Rio de Janeiro",
          description: "Ensolarado",
          icon: "01d",
          temp: "25",
        },
        {
          id: 8412,
          name: "Manaus",
          description: "Chuvas Fortes",
          icon: "09d",
          temp: "25",
        },
        {
          id: 8454,
          name: "Brasília",
          description: "Ensolarado",
          icon: "10d",
          temp: "27.4",
        },
      ],
    };
  },
};
</script>

<style></style>
