<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// Ambil router dan parameter ID dari URL
const router = useRouter();
const route = useRoute();
const id = route.params.id;

// Data yang akan di-edit
const name = ref("");
const price = ref(0);
const category = ref("");

// State untuk menampilkan toast notifikasi
const showToast = ref(false);

// Simpan perubahan data transaksi
const saveData = async () => {
  const transaction = JSON.stringify({
    name: name.value,
    price: price.value,
    category: category.value,
  });

  const response = await fetch(`/api/transactions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: transaction,
  });

  if (response.ok) {
    showToast.value = true; // munculkan toast
    setTimeout(() => {
      showToast.value = false;
      router.push("/home"); // kembali ke halaman utama setelah 1.5 detik
    }, 1500);
  }
};

// Ambil data transaksi saat halaman dibuka
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
  <div class="max-w-xl mx-auto px-4 py-10 relative">
    <!-- 🔔 Toast Notifikasi -->
    <transition name="fade">
      <div
        v-if="showToast"
        class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow z-50"
      >
        ✅ Catatan berhasil diperbarui!
      </div>
    </transition>

    <!-- Tombol Kembali -->
    <button
      @click="router.back()"
      class="inline-flex items-center mb-6 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded shadow hover:shadow-lg hover:brightness-110 transition-all duration-300"
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
      Kembali
    </button>

    <!-- Judul Halaman -->
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Edit Catatan Pengeluaran
    </h1>

    <!-- Form Edit -->
    <form
      @submit.prevent="saveData"
      class="space-y-6 bg-white p-8 rounded-xl shadow-md border border-yellow-300"
    >
      <!-- Keperluan -->
      <div>
        <label
          class="block text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider"
        >
          Buat apa..?
        </label>
        <input
          type="text"
          v-model="name"
          class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
          placeholder="Contoh: Bayar wifi 🔌"
          required
        />
      </div>

      <!-- Nominal -->
      <div>
        <label
          class="block text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider"
        >
          Berapaan..?
        </label>
        <input
          type="number"
          v-model="price"
          class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
          placeholder="Contoh: 20000"
          required
        />
      </div>

      <!-- Kategori -->
      <div>
        <label
          class="block text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider"
        >
          Apaan sih itu..?
        </label>
        <input
          type="text"
          v-model="category"
          class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
          placeholder="Contoh: Tagihan / Belanja"
          required
        />
      </div>

      <!-- Tombol Simpan -->
      <div class="text-right">
        <button
          type="submit"
          class="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-400 text-white px-6 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Simpan Perubahan
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
