<script>
import { todoStore } from "../store/store.js";
import Popup from "../components/Popup.vue";
import AddToDo from "../components/AddToDo.vue";

export default {
  components: {
    Popup,
    AddToDo,
  },
  data() {
    return {
      todoStore,
      isPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.isPopup = !this.isPopup;
    },
    deleteAllTodos() {
      todoStore.deleteAllTodos();
    },
  },
};
</script>

<template>
  <span class="font-bold text-4xl text-sky-800">Smart To Do</span>
    <span class="font-base text-sm text-slate-400">
    <span v-if="todoStore.todos && todoStore.todos.length > 0">{{ todoStore.todos.length }} To Do</span>
    <span v-else>No To Do Items</span>
  </span>
  <div class="w-full flex justify-end gap-3">
    <button @click="togglePopup" class="px-6 py-2 bg-green-600 text-white font-bold mb-2 w-fit border-[1.5px] 
    hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">+ Add</button>
    <Popup @close-Popup="togglePopup" :isPopup="isPopup">
      <AddToDo @close-Popup="togglePopup" />
    </Popup>
    <button @click="deleteAllTodos" class="px-6 py-2 bg-red-700 text-white font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">- Delete All</button>
  </div>
</template>
