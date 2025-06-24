<script setup>
import { onMounted, ref, computed } from "vue";
import { RouterLink } from "vue-router";

const transactions = ref([]);

const fetchTransactions = async () => {
  const response = await fetch("/api/transactions");
  const data = await response.json();
  transactions.value = data;
};

onMounted(() => {
  fetchTransactions();
});

const removeTransaction = async (id) => {
  const response = await fetch(`/api/transactions/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    fetchTransactions();
  }
};

const total = computed(() => {
  const jumlah = transactions.value.reduce(
    (sum, t) => sum + Number(t.price),
    0
  );
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(jumlah);
});
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Catatan Pengeluaran</h2>
      <RouterLink
        to="/transactions"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Tambah Catatan
      </RouterLink>
    </div>

    <!-- Total -->
    <div class="mb-6 text-right text-lg text-gray-700">
      Total Pengeluaran:
      <span class="text-red-500 font-semibold">{{ total }}</span>
    </div>

    <!-- Daftar Catatan -->
    <div class="grid gap-4">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="bg-white shadow rounded p-4"
      >
        <div class="mb-2">
          <p class="text-sm text-gray-500">Keperluan:</p>
          <p class="font-semibold text-lg">{{ transaction.name }}</p>
        </div>
        <div class="mb-2">
          <p class="text-sm text-gray-500">Nominal:</p>
          <p class="text-green-600 font-semibold">
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 2,
              }).format(transaction.price)
            }}
          </p>
        </div>
        <div class="mb-4">
          <p class="text-sm text-gray-500">Kategori:</p>
          <p class="italic text-gray-700">{{ transaction.category }}</p>
        </div>
        <div class="flex space-x-2">
          <RouterLink
            :to="`/transactions/${transaction.id}`"
            class="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Edit
          </RouterLink>
          <button
            @click="removeTransaction(transaction.id)"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
