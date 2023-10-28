<script>
import { todoStore } from "../store/store.js";
import Popup from "../components/Popup.vue";
import AddToDo from "../components/AddToDo.vue";
import qs from "qs";

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
    async deleteAllTodos() {
      const stringifiedQuery = qs.stringify(
        {
          where: null,
        },
        { addQueryPrefix: true }
      );

      try {
        const req = await fetch("http://localhost:3000/api/todo", {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: stringifiedQuery,
        });
        const data = await req.json();

        if (data.status === "success") {
          // Clear the To Do list.
          this.todoStore.todos = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    togglePopup() {
      this.isPopup = !this.isPopup;
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
    <button @click="togglePopup" class="px-6 py-2 bg-green-600 text-white font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">+ Add</button>
    <Popup @close-Popup="togglePopup" :isPopup="isPopup">
      <AddToDo @close-Popup="togglePopup" />
    </Popup>
    <button @click="deleteAllTodos" class="px-6 py-2 bg-red-700 text-white font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">- Delete All</button>
  </div>
</template>
