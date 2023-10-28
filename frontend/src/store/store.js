import { reactive } from "vue";

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

  deleteAllTodos() {
    this.todos = [];
  },
});
