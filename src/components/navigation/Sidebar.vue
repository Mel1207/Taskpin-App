<template>
  <div class="w-[280px] h-screen fixed left-0 top-0 bg-[#141315]">
    <div class="h-[70px] w-full flex items-center px-5 gap-2">
      <img src="../../assets/taskpin-logo.svg" alt="main logo">
      <p class="text-lg font-bold text-white">Taskpin.io</p>
    </div>
    <div class="flex flex-col pt-10 px-5 pb-5 gap-[10px]">
      <router-link to="/">
        <div class="rounded-lg p-[10px] flex items-center gap-2">
          <img src="../../assets/icon-taskboard.svg" alt="icon taskboard">
          <p class="text-sm text-white">Taskboard</p>
        </div>
      </router-link>
      <router-link to="/task-history">
        <div class="rounded-lg p-[10px] flex items-center gap-2">
          <img src="../../assets/icon-task-history.svg" alt="icon task history">
          <p class="text-sm text-white">Task history</p>
        </div>
      </router-link>
      <router-link to="/landing-page">
        <div class="rounded-lg p-[10px] flex items-center gap-2">
          <img src="../../assets/icon-landing-page.svg" alt="icon task history">
          <p class="text-sm text-white">Landing page</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>