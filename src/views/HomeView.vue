<script setup>
// Import dari Vue dan router
import { onMounted, ref, computed } from "vue";
import { RouterLink } from "vue-router";

// Menyimpan data transaksi dari backend
const transactions = ref([]);

// Kontrol toast notifikasi penghapusan
const showDeleteToast = ref(false);

// Fungsi untuk mengambil data transaksi dari API
const fetchTransactions = async () => {
  const response = await fetch("/api/transactions");
  const data = await response.json();
  transactions.value = data;
};

// Saat komponen dimuat, ambil data
onMounted(() => {
  fetchTransactions();
});

// Fungsi untuk menghapus catatan dan menampilkan toast
const removeTransaction = async (id) => {
  const response = await fetch(`/api/transactions/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    fetchTransactions();
    showDeleteToast.value = true;
    setTimeout(() => {
      showDeleteToast.value = false;
    }, 1500); // sembunyikan toast setelah 1.5 detik
  }
};

// Hitung total semua pengeluaran dalam format mata uang
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
    <!-- ✅ Toast notifikasi penghapusan -->
    <transition name="fade">
      <div
        v-if="showDeleteToast"
        class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded shadow z-50"
      >
        🗑️ Catatan berhasil dihapus!
      </div>
    </transition>

    <!-- 🔙 Tombol kembali ke landing -->
    <RouterLink
      to="/"
      class="inline-flex items-center mb-6 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      <svg
        class="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Kembali ke Halaman Awal
    </RouterLink>

    <!-- 📋 Header dan tombol tambah -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl font-bold text-gray-800">📒 Catatan Pengeluaran</h2>
      <RouterLink
        to="/transactions"
        class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded shadow hover:shadow-lg hover:scale-105 transition"
      >
        + Tambah Catatan
      </RouterLink>
    </div>

    <!-- 💰 Total pengeluaran -->
    <div class="mb-6 text-right text-lg text-gray-700">
      Total Pengeluaran:
      <span class="text-red-500 font-bold">{{ total }}</span>
    </div>

    <!-- 🧾 Daftar catatan -->
    <div class="grid gap-6">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="bg-white shadow-lg border-l-4 border-blue-500 rounded-lg p-6 hover:shadow-xl transition-all"
      >
        <!-- Keperluan -->
        <div class="mb-3">
          <p class="text-sm text-gray-500">Keperluan:</p>
          <p class="font-semibold text-lg text-gray-800">
            {{ transaction.name }}
          </p>
        </div>

        <!-- Nominal -->
        <div class="mb-3">
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

        <!-- Kategori -->
        <div class="mb-3">
          <p class="text-sm text-gray-500">Kategori:</p>
          <p class="italic text-gray-700">{{ transaction.category }}</p>
        </div>

        <!-- Tanggal -->
        <div class="mb-4">
          <p class="text-sm text-gray-500">Tanggal:</p>
          <p class="text-gray-600">
            {{
              transaction.date
                ? new Date(transaction.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : "Tanggal tidak tersedia"
            }}
          </p>
        </div>

        <!-- Tombol aksi -->
        <div class="flex space-x-2">
          <RouterLink
            :to="`/transactions/${transaction.id}`"
            class="flex-1 text-center px-4 py-2 bg-yellow-400 text-white rounded shadow hover:bg-yellow-500 hover:shadow-lg transition"
          >
            ✏️ Edit
          </RouterLink>
          <button
            @click="removeTransaction(transaction.id)"
            class="flex-1 text-center px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 hover:shadow-lg transition"
          >
            🗑️ Hapus
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Untuk efek transisi toast */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Font default */
body {
  font-family: "Inter", sans-serif;
}
</style>
