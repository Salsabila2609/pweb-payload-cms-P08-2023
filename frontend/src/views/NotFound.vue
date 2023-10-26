<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <img src="../assets/images/404.png" alt="Page Not Found" class="mt-8" width="250" height="200" />
    <h1 class="text-7xl font-bold text-red-700 mb-4">404 ERROR</h1>
    <h3 class="text-4xl font-bold text-red-700 mb-4">NOT FOUND</h3>
    <p class="text-xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
    <RouterLink to="/" class="px-4 py-2 bg-red-700 text-white font-semibold rounded-full text-sm hover:bg-red-800 hover:scale-105 transition-all ease-in-out duration-300">Back to Home</RouterLink>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>


