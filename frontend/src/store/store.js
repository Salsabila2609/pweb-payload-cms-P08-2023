import { reactive } from "vue";

// Fungsi untuk menyimpan data ke local storage (tidak digunakan)
const saveToLocalStorage = (key, data) => {
  // Kosongkan atau hapus fungsi ini
};

// Fungsi untuk mengambil data dari local storage (tidak digunakan)
const getFromLocalStorage = (key) => {
  // Kosongkan atau hapus fungsi ini
};

export const todoStore = reactive({
  todos: [],

  createTodo(todo) {
    this.todos.push(todo);
    // Tidak ada penyimpanan ke local storage
  },

  updateTodo(updatedtodo) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === updatedtodo.id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1, updatedtodo);
    } else {
      this.todos.push(updatedtodo);
    }
  },
});
