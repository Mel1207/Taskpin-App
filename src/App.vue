<script setup lang="ts">
import { useRouter } from 'vue-router'
import Sidebar from './components/navigation/Sidebar.vue'
import TopNavigation from './components/navigation/TopNavigation.vue'
import MobileMenu from './components/navigation/MobileMenu.vue'
import TopMobileNav from './components/navigation/TopMobileNav.vue'
import Modal from './components/modal/Modal.vue'

const router = useRouter()

</script>

<template>
  <Modal v-if="$store.state.showModal"/>
  <TopMobileNav v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <TopNavigation v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <Sidebar v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <MobileMenu v-if="router.currentRoute.value.path !== '/landing-page'"/>
  <RouterView />
</template>
