<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
    <!-- Navbar -->
    <header
      class="flex flex-col md:flex-row justify-between items-center px-4 py-3 sm:px-6 bg-white shadow w-full max-w-7xl mx-auto"
    >
      <h1 class="text-xl font-bold text-blue-600 mb-2 md:mb-0">DompetKita</h1>
      <nav
        class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto"
      >
        <router-link
          to="/"
          class="w-full md:w-auto text-center py-1 hover:text-blue-600 transition-colors"
        >
          Beranda
        </router-link>
        <router-link
          to="/about"
          class="w-full md:w-auto text-center py-1 hover:text-blue-600 transition-colors"
        >
          Tentang
        </router-link>
        <router-link
          to="/home"
          class="w-full md:w-auto text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Coba Sekarang
        </router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <section class="py-8 px-4 sm:py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 text-center"
        >
          Tentang <span class="text-blue-600">DompetKita</span>
        </h2>

        <div class="bg-white p-5 sm:p-8 rounded-lg shadow-md">
          <!-- 1. App Description -->
          <div class="mb-8">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="mr-2">💡</span> Apa Itu DompetKita?
            </h3>
            <p class="text-gray-700 leading-relaxed">
              DompetKita adalah aplikasi pencatatan pengeluaran berbasis web
              yang menyimpan data secara aman di database cloud. Dibangun dengan
              Vue.js dan backend Cloudflare Workers, aplikasi ini memungkinkan
              Anda mengelola keuangan tanpa perlu instalasi, dengan opsi login
              sederhana untuk akses multi-perangkat.
            </p>
          </div>

          <!-- 2. Goals -->
          <div class="mb-8">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="mr-2">🎯</span> Tujuan Kami
            </h3>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Kami ingin memudahkan siapapun untuk:
            </p>
            <ul class="list-disc pl-5 text-gray-700 space-y-2">
              <li class="leading-relaxed">Mencatat pengeluaran dengan cepat</li>
              <li class="leading-relaxed">
                Memantau kebiasaan belanja harian/mingguan
              </li>
              <li class="leading-relaxed">
                Mengontrol budget tanpa aplikasi yang rumit
              </li>
            </ul>
          </div>

          <!-- 3. Features -->
          <div class="mb-8">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="mr-2">✨</span> Fitur DompetKita
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h4 class="font-bold mb-2 flex items-center">
                  <span class="mr-2">📌</span> CRUD Sederhana
                </h4>
                <p class="text-sm text-gray-600">
                  Create, Read, Update, Delete data pengeluaran
                </p>
              </div>
              <div
                class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h4 class="font-bold mb-2 flex items-center">
                  <span class="mr-2">📱</span> Responsif
                </h4>
                <p class="text-sm text-gray-600">
                  Bisa dipakai di HP atau laptop
                </p>
              </div>
              <div
                class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h4 class="font-bold mb-2 flex items-center">
                  <span class="mr-2">🔒</span> Tanpa Login
                </h4>
                <p class="text-sm text-gray-600">
                  Data disimpan di browser kamu
                </p>
              </div>
              <div
                class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h4 class="font-bold mb-2 flex items-center">
                  <span class="mr-2">💸</span> Gratis
                </h4>
                <p class="text-sm text-gray-600">Tidak ada biaya tersembunyi</p>
              </div>
            </div>
          </div>

          <!-- 4. Creator Info -->
          <div>
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="mr-2">👨‍💻</span> Dibuat Oleh
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Aplikasi ini dikembangkan sebagai proyek tugas untuk mempelajari
              Vue.js dan konsep CRUD. Jika kamu tertarik dengan kodenya, cek
              <a
                href="https://github.com/MieAyammmm/66c"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline hover:text-blue-700 transition-colors"
              >
                repositori GitHub
              </a>
              ini!
            </p>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-10 text-center">
          <router-link
            to="/home"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Coba DompetKita Sekarang
          </router-link>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer
      class="py-4 text-center text-sm text-gray-500 bg-white w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      <p>&copy; 2025 DompetKita. Dibuat dengan ❤️ dan Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.router-link-active {
  @apply text-blue-600 font-medium;
}
</style>
