<template>
    <div>
        <h1>Name</h1>
        <RouterLink :to="`/people/${person.id}`">
            <p>{{ person.name }}</p>
        </RouterLink>
    </div>
</template>

<script setup>

import { defineProps, toRefs } from "vue"
import { RouterLink } from "vue-router";
const props = defineProps(['person'])
const { person } = toRefs(props)

</script>
