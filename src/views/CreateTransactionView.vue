<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// State untuk form input
const name = ref("");
const price = ref(0);
const category = ref("");

// State untuk kontrol toast
const showToast = ref(false);

// Fungsi untuk menyimpan data ke backend
const saveData = async () => {
  const response = await fetch("/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      price: price.value,
      category: category.value,
    }),
  });

  // Jika gagal menyimpan, tampilkan error di console
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Gagal menyimpan:", errorText);
    return;
  }

  // Tampilkan toast berhasil
  showToast.value = true;

  // Tunggu sebentar sebelum redirect
  setTimeout(() => {
    router.push("/home");
  }, 1500); // 1.5 detik delay untuk lihat toast
};
</script>

<template>
  <div class="max-w-xl mx-auto px-4 py-10">
    <!-- Tombol kembali -->
    <button
      @click="router.back()"
      class="inline-flex items-center mb-6 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded shadow hover:shadow-lg hover:brightness-110 transition-all duration-300"
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
      Tambah Catatan Pengeluaran
    </h1>

    <!-- Form Tambah Catatan -->
    <!-- 🎨 Form lebih cantik -->
    <form
      @submit.prevent="saveData"
      class="space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-500"
    >
      <!-- Input: Keperluan -->
      <div>
        <label
          class="block text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider"
        >
          Buat apa..?
        </label>
        <input
          type="text"
          v-model="name"
          class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
          placeholder="Contoh: Beli mie ayam 🍜"
          required
        />
      </div>

      <!-- Input: Nominal -->
      <div>
        <label
          class="block text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider"
        >
          Berapaan..?
        </label>
        <input
          type="number"
          v-model="price"
          class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
          placeholder="Contoh: 15000"
          required
        />
      </div>

      <!-- Input: Kategori -->
      <div>
        <label
          class="block text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider"
        >
          Apaan sih itu..?
        </label>
        <input
          type="text"
          v-model="category"
          class="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
          placeholder="Contoh: Makanan / Transportasi"
          required
        />
      </div>

      <!-- Tombol Simpan -->
      <div class="text-right">
        <button
          type="submit"
          class="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform"
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
          Simpan Catatan
        </button>
      </div>
    </form>

    <!-- 🎉 Toast -->
    <transition name="fade">
      <div
        v-if="showToast"
        class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow z-50"
      >
        <span>✅</span>
        <span>Catatan berhasil disimpan!</span>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Animasi Fade In */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

/* Transisi Toast */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
