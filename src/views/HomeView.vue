<script setup>
import { onMounted, ref } from "vue";

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
</script>

<template>
  <main>
    <div>Catatanmu</div>
    <div>
      <RouterLink to="/transactions">Tambah Catatan</RouterLink>
    </div>
    <div>
      <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
          <div>Buat apa..?: {{ transaction.name }}</div>
          <div>Berapaan..?: {{ transaction.price }}</div>
          <div>Apaan sih itu..?: {{ transaction.category }}</div>
          <div>
            <RouterLink :to="`/transactions/${transaction.id}`"
              >Edit</RouterLink
            >
          </div>
          <div>
            <button @click="removeTransaction(transaction.id)">
              Hapus Catatan
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
