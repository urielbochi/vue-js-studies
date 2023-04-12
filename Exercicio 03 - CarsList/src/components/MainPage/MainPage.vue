<template>
  <div v-for="ppl in People" :key="ppl.id">
    <PersonCard :person="ppl"/>
  </div>
</template>

<script setup>
import People from '../../data/index.json'
import PersonCard from '../PersonCard/CardPeople.vue';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
