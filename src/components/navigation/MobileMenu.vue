<template>
  <div class="h-20 md:hidden w-full fixed bottom-0 left-0 z-10 bg-white px-[30px] flex items-center justify-between border-t">
    <router-link to="/">
      <div class="rounded-lg p-[10px] flex items-center flex-col gap-[5px] text-cBlack">
        <img src="../../assets/icon-mobile-taskboard.svg" alt="icon taskboard">
        <p class="text-cBlack text-[10px]">Taskboard</p>
      </div>
    </router-link>
    <router-link to="/task-history">
      <div class="rounded-lg p-[10px] flex items-center flex-col gap-[5px] text-cBlack">
        <img src="../../assets/icon-mobile-taskhistory.svg" alt="icon taskboard">
        <p class="text-cBlack text-[10px]">Task history</p>
      </div>
    </router-link>
    <router-link to="/landing-page">
      <div class="rounded-lg p-[10px] flex items-center flex-col gap-[5px] text-cBlack">
        <img src="../../assets/icon-mobile-landing.svg" alt="icon taskboard">
        <p class="text-cBlack text-[10px]">Landing page</p>
      </div>
    </router-link>
    <router-link to="/">
      <div class="rounded-lg p-[10px] flex items-center flex-col gap-[5px] text-cBlack">
        <img src="../../assets/img-avatar.png" alt="avatar" class="h-[25px] w-[25px]">
        <p class="text-cBlack text-[10px]">Account</p>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>