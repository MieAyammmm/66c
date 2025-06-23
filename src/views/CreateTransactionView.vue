<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const price = ref(0);
const category = ref("");

const saveData = async () => {
  const newTransaction = JSON.stringify({
    name: name.value,
    price: price.value,
    category: category.value,
  });

  const response = await fetch("/api/transactions", {
    method: "POST",
    body: newTransaction,
  });
  const data = await response.json();

  router.push("/");
};
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
