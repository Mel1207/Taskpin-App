<script setup lang="ts">
import { useRouter } from 'vue-router'
import Sidebar from './components/navigation/Sidebar.vue'
import TopNavigation from './components/navigation/TopNavigation.vue'
import MobileMenu from './components/navigation/MobileMenu.vue'

const router = useRouter()

</script>

<template>
  <TopNavigation v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <Sidebar v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <MobileMenu v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <RouterView />
</template>
