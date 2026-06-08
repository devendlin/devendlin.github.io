<template>
  <div class="text-center max-w-3xl mx-auto py-12">
    <h1 class="text-5xl font-black tracking-tight leading-tight mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
      Kuasai Coding Lebih Cepat Bersama Vue 3
    </h1>
    <p class="text-slate-400 text-lg mb-8">
      Platform belajar pemrograman modern dengan studi kasus dunia nyata menggunakan teknologi frontend terbaik saat ini.
    </p>
    
    <!-- PENGGUNAAN V-MODEL -->
    <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-md mx-auto shadow-2xl text-left">
      <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Nama Anda :</label>
      <input v-model="namaSiswa" type="text" placeholder="Masukkan nama Anda..." 
        class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors mb-4" />
      
      <!-- PENGGUNAAN V-IF / V-ELSE -->
      <p v-if="namaSiswa" class="text-sm text-emerald-400 font-medium">
        👋 Halo <span class="font-bold underline">{{ namaSiswa }}</span>, selamat datang di kelas dasar kami!
      </p>
      <p v-else class="text-sm text-slate-500 italic">
        Silakan ketik nama Anda untuk melihat simulasi data reaktif Vue.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const namaSiswa = ref('')
</script>
