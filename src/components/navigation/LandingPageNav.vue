<template>
  <div class="fixed top-0 left-0 w-full h-[70px] flex items-center"> 
    <div class="container flex items-center justify-between">
      <a href="!#" class="flex items-center gap-[10px] text-white text-lg font-bold">
        <img src="../../assets/logo-main.svg" alt="main logo">
        Taskpin.io
      </a>
      <ul class="flex gap-[30px]">
        <router-link v-for="item in navLinks" :key="item.id" :to="item.path" class="text-white">{{ item.title }}</router-link>
      </ul>
      <div class="flex gap-[10px]">
        <ButtonSet btn-title="Register" class-list="w-[100px] h-[40px] rounded-lg border border-white text-white text-sm"/>
        <ButtonSet btn-title="Login" class-list="w-[100px] h-[40px] rounded-lg bg-cBlack text-white text-sm"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonSet from '../buttons/ButtonSet.vue';


const navLinks = ref([
  {
    id: 1,
    title: 'Home',
    path: '/new-page'
  },
  {
    id: 2,
    title: 'About',
    path: '/new-page'
  },
  {
    id: 3,
    title: 'Articles',
    path: '/new-page'
  },
  {
    id: 4,
    title: 'Contact us',
    path: '/new-page'
  },
])

</script>
