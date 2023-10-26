<template>
  <nav class="bg-white shadow-lg max-w-5xl justify-center content-center items-center mx-auto mt-8 rounded-xl">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center">
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-sky-900 text-white", Default: "text-sky-300 hover:bg-sky-700 hover:text-white" -->
              <RouterLink to="/" class="text-slate-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My To Do</RouterLink>
              <RouterLink to="/about" class="text-slate-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
