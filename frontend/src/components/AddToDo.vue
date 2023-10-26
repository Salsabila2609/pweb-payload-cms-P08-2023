<template>
  <span class="text-sky-800 font-bold text-2xl">Add Your To Do</span>
  <div class="flex flex-col gap-3">
    <div>
      <label class="text-sky-800 font-semibold">To Do Name</label>
      <div class="flex flex-row">
        <input ref="todoNameInput" v-model="inputName" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-text w-full" />
        <svg
          @click="startSpeechRecognition"
          aria-hidden="true"
          type="button"
          class="h-10 w-6 absolute right-10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-sky-800 font-semibold">Deadline</label>
      <input type="date" v-model="inputDeadline" class="px-3 py-2 bg-slate-100 rounded-md text-gray-800 focus:outline-sky-800 cursor-pointer" />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-sky-800 font-semibold">Priority</label>
      <select v-model="inputPriority" class="px-3 py-2 bg-slate-100 rounded-md focus:outline-sky-800 cursor-pointer">
        <option value="Low" class="cursor-pointer">Low</option>
        <option value="Medium" class="cursor-pointer">Medium</option>
        <option value="High" class="cursor-pointer">High</option>
      </select>
    </div>
  </div>
  <button @click="addTodo" class="px-4 py-2 mt-1 bg-sky-800 w-fit h-fit text-white font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300">Submit</button>
</template>


<script>
import axios from 'axios';
import { todoStore } from "../store/store.js";
export default {
  emits: ["close-popup", "todo-added"], 
  data() {
    return {
      inputName: "",
      inputDeadline: "",
      inputPriority: "Low",
    };
  },
  methods: {
  addTodo() {
  if (this.inputName === "" || this.inputDeadline === "") return;

  const newTodo = {
    name: this.inputName,
    deadline: this.inputDeadline,
    priority: this.inputPriority,
    status: "1", 
  };

  axios
    .post('http://localhost:3000/api/todo', newTodo)
    .then((response) => {
      console.log('Todo added successfully:', response.data);
      this.$emit('todo-added', response.data);

      this.inputName = "";
      this.inputDeadline = "";
      this.inputPriority = "Low";
      this.$emit("close-popup");
      todoStore.addTodo(response.data);
    })
    .catch((error) => {
      console.error('Error adding todo:', error);
    });
    },
    startSpeechRecognition() {
      const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new speechRecognition();
      recognition.lang = "id-ID";
      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        this.inputName = result;
      };
      recognition.start();
    },
  },
};
</script>

