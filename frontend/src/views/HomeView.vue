<script>
import Popup from "../components/Popup.vue";
import ToDoList from "../components/ToDoList.vue";
import AddToDo from "../components/AddToDo.vue";
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Popup,
    ToDoList,
    AddToDo,
    Header,
    Navbar,
  },
};
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="min-h-full w-full flex flex-col justify-center p-8">
    <div class="w-full h-full justify justify-center flex flex-col mt-3 px-56">
      <Header />
      <ToDoList />
    </div>
  </main>
</template>
