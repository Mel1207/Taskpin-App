<template>
  <div class="fixed z-50 top-0 left-0 w-full h-[70px]  flex items-center" :class="scrollY >= 80 ? 'bg-white text-cBlack' : 'text-white'"> 
    <div class="container flex items-center justify-between">
      <a href="!#" class="flex items-center gap-[10px] text-lg font-bold">
        <img src="../../assets/taskpin-logo.svg" alt="main logo" v-if="scrollY >= 80">
        <img src="../../assets/logo-main.svg" alt="main logo" v-else>
        Taskpin.io
      </a>
      <ul class="hidden md:flex gap-[30px]">
        <router-link v-for="item in navLinks" :key="item.id" :to="item.path" >{{ item.title }}</router-link>
      </ul>
      <div class="hidden md:flex gap-[10px]">
        <ButtonSet btn-title="Register" :class-list="scrollY >= 80 ? 'text-cBlack text-sm w-[100px] h-[40px] rounded-lg border border-cBlack' : 'w-[100px] h-[40px] rounded-lg text-sm border border-white text-white text-sm'"/>
        <ButtonSet btn-title="Login" class-list="w-[100px] h-[40px] rounded-lg bg-cBlack text-white text-sm"/>
      </div>
      <button class="h-9 w-9 border rounded-lg flex md:hidden items-center justify-center" :class="scrollY >= 80 ? 'border' : 'border-white'">
        <img :src="iconBurgerMenu" alt="icon menu" v-if="scrollY >= 80">
        <img :src="iconBurgerMenuWhite" alt="icon menu" v-else>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ButtonSet from '../buttons/ButtonSet.vue'
import iconBurgerMenuWhite from '../../assets/icon-burger-menu-white.svg'
import iconBurgerMenu from '../../assets/icon-burger-menu.svg'


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

const scrollY = ref(0)

const updateScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

</script>
