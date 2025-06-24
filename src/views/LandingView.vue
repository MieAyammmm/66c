<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <header class="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 class="text-xl font-bold text-blue-600">DompetKita</h1>
      <nav class="space-x-4">
        <a href="#fitur" class="hover:text-blue-600">Fitur</a>
        <a href="#cara-kerja" class="hover:text-blue-600">Cara Kerja</a>
        <a href="#tentang" class="hover:text-blue-600">Tentang</a>
        <router-link
          to="/home"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >Coba Sekarang</router-link
        >
      </nav>
    </header>

    <!-- Hero Section -->
    <section
      class="flex flex-col items-center justify-center text-center py-20 px-6 bg-blue-50"
    >
      <h2 class="text-3xl font-bold mb-4">
        💸 Kelola Pengeluaranmu Dengan Lebih Mudah!
      </h2>
      <p class="text-lg max-w-2xl mb-6">
        Catat semua pengeluaran harian, mingguan, atau bulanan. Dapatkan
        visualisasi dan kontrol penuh atas keuanganmu.
      </p>
      <router-link
        to="/home"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg"
        >Coba Sekarang - Gratis</router-link
      >
    </section>

    <!-- Fitur Utama -->
    <section id="fitur" class="py-20 px-6 bg-white">
      <h3 class="text-2xl font-bold text-center mb-12">
        Kenapa Pakai <span class="text-blue-600">DompetKita</span>?
      </h3>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-4xl mb-4">📌</div>
          <h4 class="font-bold mb-2">Catat dengan Cepat</h4>
          <p>Input pengeluaran hanya butuh beberapa detik.</p>
        </div>
        <div>
          <div class="text-4xl mb-4">📱</div>
          <h4 class="font-bold mb-2">Akses Kapan Saja</h4>
          <p>Bisa digunakan lewat laptop maupun HP.</p>
        </div>
        <div>
          <div class="text-4xl mb-4">🔐</div>
          <h4 class="font-bold mb-2">Privasi Aman</h4>
          <p>Semua data hanya tersimpan di perangkatmu.</p>
        </div>
      </div>
    </section>

    <!-- Cara Kerja -->
    <section id="cara-kerja" class="py-20 px-6 bg-gray-100">
      <h3 class="text-2xl font-bold text-center mb-12">
        Bagaimana Cara Kerjanya?
      </h3>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-4xl mb-4">🚀</div>
          <h4 class="font-bold mb-2">1. Klik "Coba Sekarang"</h4>
          <p>Langsung mulai tanpa perlu daftar akun.</p>
        </div>
        <div>
          <div class="text-4xl mb-4">💵</div>
          <h4 class="font-bold mb-2">2. Catat Pengeluaran</h4>
          <p>Masukkan pengeluaran harianmu secara rutin.</p>
        </div>
        <div>
          <div class="text-4xl mb-4">📂</div>
          <h4 class="font-bold mb-2">3. Simpan & Kelola</h4>
          <p>Kembali kapan saja untuk melanjutkan pencatatan.</p>
        </div>
      </div>
    </section>

    <!-- CTA Akhir -->
    <section class="py-20 px-6 bg-blue-600 text-white text-center">
      <h3 class="text-3xl font-bold mb-4">
        📌 Mulai Atur Keuanganmu Hari Ini!
      </h3>
      <p class="mb-6">
        Gunakan DompetKita secara gratis dan rasakan perbedaannya.
      </p>
      <router-link
        to="/home"
        class="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 text-lg"
        >Coba Sekarang Gratis</router-link
      >
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center text-sm text-gray-500 bg-white">
      <p>&copy; 2025 DompetKita. Dibuat dengan Vue.js dan ❤️ di Indonesia.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>
