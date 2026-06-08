<template>
  <div class="py-12 space-y-8">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
      <div>
        <h2 class="text-3xl font-extrabold text-white">Materi Pembelajaran</h2>
        <p class="text-slate-400 text-sm mt-1">Cari materi coding yang ingin Anda pelajari di bawah ini.</p>
      </div>
      
      <!-- INPUT PENCARIAN (v-model) -->
      <div class="w-full md:w-72">
        <input v-model="kataKunci" type="text" placeholder="Cari materi kursus..." 
          class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-all text-slate-100" />
      </div>
    </div>

    <!-- PERULANGAN DATA KURSUS (v-for & v-if) -->
    <div v-if="kursusTerfilter.length > 0" class="grid md:grid-cols-2 gap-6">
      <div v-for="k in kursusTerfilter" :key="k.id" 
        class="p-6 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl flex flex-col justify-between hover:border-emerald-500/30 transition-all">
        <div>
          <!-- DINAMIS CLASS BINDING (:class) -->
          <span :class="['px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider', 
            k.level === 'Pemula' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400']">
            {{ k.level }}
          </span>
          <h3 class="text-xl font-bold mt-3 mb-2 text-white">{{ k.nama }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">{{ k.deskripsi }}</p>
        </div>
        
        <div class="flex justify-between items-center border-t border-slate-700/60 pt-4">
          <span class="text-xs text-slate-500">Durasi: {{ k.durasi }}</span>
          <button @click="ikutiKelas(k.nama)" class="bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer">
            Ikuti Kelas
          </button>
        </div>
      </div>
    </div>

    <!-- TAMPILAN JIKA DATA KOSONG (v-else) -->
    <div v-else class="text-center py-16 bg-slate-800 rounded-2xl border border-slate-700 border-dashed">
      <p class="text-slate-500 text-lg">Materi "{{ kataKunci }}" tidak ditemukan.</p>
      <button @click="kataKunci = ''" class="mt-2 text-sm text-emerald-400 hover:underline cursor-pointer">Bersihkan Pencarian</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const kataKunci = ref('')
const daftarKursus = ref([
  { id: 1, nama: 'Dasar-Dasar Vue.js 3', level: 'Pemula', durasi: '4 Jam', deskripsi: 'Belajar deklarasi data, event handling, conditional rendering, dan lifecycle secara mendalam.' },
  { id: 2, nama: 'Tailwind CSS v4 Utilitas', level: 'Pemula', durasi: '3 Jam', deskripsi: 'Menguasai pembuatan tata letak responsif menggunakan utility class terbaru tanpa konfigurasi rumit.' },
  { id: 3, nama: 'Integrasi Vue + Laravel API', level: 'Menengah', durasi: '6 Jam', deskripsi: 'Menghubungkan frontend Vue mandiri dengan sistem backend database keamanan milik framework Laravel.' }
])

const kursusTerfilter = computed(() => {
  return daftarKursus.value.filter(k => 
    k.nama.toLowerCase().includes(kataKunci.value.toLowerCase())
  )
})

const ikutiKelas = (namaMateri) => {
  alert(`Pendaftaran sukses untuk kelas: ${namaMateri}`)
}
</script>
