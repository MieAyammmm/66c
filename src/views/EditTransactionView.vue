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

  router.push("/home");
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
  <div class="max-w-xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Edit Catatan Pengeluaran
    </h1>
    <form
      @submit.prevent="saveData"
      class="space-y-6 bg-white p-6 rounded shadow"
    >
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Buat apa..?</label
        >
        <input
          type="text"
          v-model="name"
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contoh: Makan siang"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Berapaan..?</label
        >
        <input
          type="number"
          v-model="price"
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contoh: 15000"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Apaan sih itu..?</label
        >
        <input
          type="text"
          v-model="category"
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contoh: Makanan / Transportasi"
          required
        />
      </div>

      <div class="text-right">
        <button
          type="submit"
          class="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
        >
          Simpan Perubahan
        </button>
      </div>
    </form>
  </div>
</template>
