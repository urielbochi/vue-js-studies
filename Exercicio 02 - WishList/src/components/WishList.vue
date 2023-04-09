<template>
  <div class="hello">
    <label> Wishlist
      <input v-model="newItem" />
    </label>
    <button v-if="addIsVisible" @click="addItem()">Adicionar</button>
    <button @click="editItem()" :disabled="editButtonEnabled">Editar</button>

    <ul>
      <li v-for="(item, index) in wishList" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Excluir</button>
        <button @click="selectedItemToEdit(index)">Editar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';


let wishList = ref([]);
let wishItem = ref("");
let newItem = ref("");
let addIsVisible = ref(true)
let editButtonEnabled = ref(true);

function addItem() {
  if (newItem.value) {
    wishList.value.push(newItem.value);
    newItem.value = "";
  }
}

function removeItem(index) {
  wishList.value.splice(index, 1)
}

function editItem() {
  editButtonEnabled.value = true;
  wishList.value[wishItem.value] = newItem.value;
  newItem.value = "";
  addIsVisible.value = true
}

function selectedItemToEdit(index) {
  editButtonEnabled.value = false;
  addIsVisible.value = false
  wishItem.value = index

}

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
}
</style>