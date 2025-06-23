<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const name = ref("");
const price = ref(0);
const category = ref("");

const saveData = async () => {
  const transaction = JSON.stringify({
    name: name.value,
    price: price.value,
    category: category.value,
  });

  const response = await fetch(`/api/transactions/${id}`, {
    method: "PUT",
    body: transaction,
  });
  const data = await response.json();

  router.push("/");
};

onMounted(() => {
  fetch(`/api/transactions/${id}`)
    .then((response) => response.json())
    .then((data) => {
      name.value = data.name;
      price.value = data.price;
      category.value = data.category;
    });
});
</script>

<template>
  <div class="container px-4 py-6 mx-auto w-lg">
    <h1 class="text-lg sm:text-2xl text-center">Tambah Catatan</h1>
    <form @submit.prevent="saveData">
      <div class="w-full">
        <label>Buat apa..?</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Berapaan..?</label>
        <input type="number" v-model="price" />
      </div>
      <div>
        <label>Apaan sih itu..?</label>
        <input type="text" v-model="category" />
      </div>

      <div class="mt-3">
        <button type="submit">Simpan</button>
      </div>
    </form>
  </div>
</template>
