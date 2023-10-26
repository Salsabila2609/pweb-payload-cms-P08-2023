<template>
  <header>
    <Navbar />
  </header>
  <section class="justify-center text-center m-24 text-sky-800">
    <h1 class="text-6xl font-bold">Meet Our Team</h1>
    <p class="caption" style="padding-bottom: 3rem">Halo, kami dari kelompok P08 Praktikum Pemrograman Web</p>
    <div class="flex flex-wrap justify-center gap-10">
      <div class="card p-8 h-80 bg-white shadow-lg text-center rounded-2xl overflow-hidden transition-transform hover:scale-90">
        <div>
          <img src="../assets/images/adfi.jpg" alt="Adfi" class="border-8 h-48 w-48 rounded-full object-cover mx-auto" />
        </div>
        <div v-for="(item, index) in adfi" :key="index" ref="adfi" class="mt-4">
          <h3 class="text-sky-800 text-lg font-bold mt-2">{{ item.name }}</h3>
          <p class="text-sky-800 text-md">{{ item.nrp }}</p>
        </div>
      </div>
      <div class="card p-8 h-80 bg-white shadow-lg text-center rounded-2xl overflow-hidden transition-transform hover:scale-90">
        <div>
          <img src="../assets/images/caca.jpg" alt="Caca" class="border-8 h-48 w-48 rounded-full object-cover mx-auto" />
        </div>
        <div v-for="(item, index) in caca" :key="index" ref="caca" class="mt-4">
          <h3 class="text-sky-800 text-lg font-bold mt-2">{{ item.name }}</h3>
          <p class="text-sky-800 text-md">{{ item.nrp }}</p>
        </div>
      </div>
      <div class="card p-8 h-80 bg-white shadow-lg text-center rounded-2xl overflow-hidden transition-transform hover:scale-90">
        <div>
          <img src="../assets/images/hafiz.jpg" alt="Hafiz" class="border-8 h-48 w-48 rounded-full object-cover mx-auto" />
        </div>
        <div v-for="(item, index) in hafiz" :key="index" ref="hafiz" class="mt-4">
          <h3 class="text-sky-800 text-lg font-bold mt-2">{{ item.name }}</h3>
          <p class="text-sky-800 text-md">{{ item.nrp }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      adfi: [
        {
          name: "Iki Adfi Nur Mohamad",
          nrp: 5027221033,
        },
      ],
      hafiz: [
        {
          name: "Zulfa Hafizh Kusuma",
          nrp: 5027221038,
        },
      ],
      caca: [
        {
          name: "Salsabilla Amalia Harjanto",
          nrp: 5027221033,
        },
      ],
    };
  },
};
</script>
