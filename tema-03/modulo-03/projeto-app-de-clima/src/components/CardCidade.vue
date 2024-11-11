<template>
  <div class="card" @click="$emit('cidadeclicada', cidade)">
    <div class="card-img"></div>
    <h3>{{ cidade.name }}</h3>
    <h4>{{ cidade.description }}</h4>
    <div class="temperatura">{{ cidade.temp }}º</div>
  </div>
</template>

<script>
export default {
  emits: ["cidadeclicada"],
  props: {
    cidade: Object,
  },
};
</script>

<style></style>
