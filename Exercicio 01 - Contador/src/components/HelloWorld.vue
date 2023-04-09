<template>
  <div class="hello">
    <button @click="total++">+</button>
    <button :disabled="isEnabled" @click="total--">-</button>
    <h1>{{ total }}</h1>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const total = ref(0);
let isEnabled = ref(true);


// O watch é uma função para observar mudanças em uma propriedade específica. Quando essa propriedade é modificada, o watch é acionado, permitindo que você execute um trecho de código em resposta à mudança. newValue é uma cópia do valor de uma varíavel especifica.

watch(total, (newValue) => {
   newValue === 0 ? isEnabled.value = false : isEnabled.value = true
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>