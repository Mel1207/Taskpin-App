<script setup lang="ts">
import Sidebar from './components/navigation/Sidebar.vue'
import TopNavigation from './components/navigation/TopNavigation.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <TopNavigation v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <Sidebar v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <RouterView />
</template>
