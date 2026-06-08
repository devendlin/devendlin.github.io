<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
    <!-- NAVBAR SPA -->
    <nav class="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div class="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
        <div class="text-lg font-black text-emerald-400 tracking-wider">🌟 VUE-SPA</div>
        <div class="flex space-x-6 text-sm font-bold">
          <!-- Menggunakan router-link agar URL berubah tanpa reload -->
          <router-link to="/" class="hover:text-emerald-400 transition-colors">Home</router-link>
          <router-link to="/berita" class="hover:text-emerald-400 transition-colors">Berita</router-link>
          <router-link to="/tentang" class="hover:text-emerald-400 transition-colors">Tentang</router-link>
        </div>
      </div>
    </nav>

    <!-- TEMPAT HALAMAN BERGANTI SECARA SPA -->
    <main class="max-w-4xl mx-auto px-4">
      <router-view />
    </main>
  </div>
</template>
