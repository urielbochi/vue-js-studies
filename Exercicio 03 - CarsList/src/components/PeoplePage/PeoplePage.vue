<template>
    <div>
        <h1>Name</h1>
        <p>{{ person[0].name }}</p>
        <h1>Idade</h1>
        <p>{{ person[0].age }}</p>
        <h1>Plano de saude</h1>
        <p>{{ person[0].health_insurance }}</p>
        <h1>Ocupaçao</h1>
        <p>{{ person[0].occupation }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import PeopleData from '../../data/index.json'
const route = useRoute()
const { id } = route.params;

let person = PeopleData.filter((people) => {
    return people.id === parseInt(id);
}) 


</script>