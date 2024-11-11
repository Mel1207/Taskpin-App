<template>
  <div class="hidden md:flex h-[70px] w-full fixed left-0 pl-[280px] top-0 border-b items-center justify-between">
    <div class="w-full px-5 flex justify-between items-center">
      <div class="flex gap-[12px] items-center">
        <NavButtonIcon iconName="icon burger menu" :iconSrc="iconBurgerMenu"/>
        <p v-if="router.currentRoute.value.path === '/'" class="font-semibold">Taskboard</p>
        <p v-else class="font-semibold">Task history</p>
      </div>
      <div class="flex gap-[15px] items-center">
        <NavButtonIcon iconName="icon notification" :iconSrc="iconNotification"/>
        <div class="flex items-center gap-[12px]">
          <img src="../../assets/img-avatar.png" alt="avatar" class="h-[35px] w-[35px]">
          <div class="flex flex-col">
            <p class="text-sm font-bold">John Doe</p>
            <span class="text-xs text-[#9F9F9F]">Admin</span>
          </div>
          <NavButtonIcon iconName="icon logout" :iconSrc="iconLogOut"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavButtonIcon from './NavButtonIcon.vue'
import iconLogOut from '../../assets/icon-logout.svg'
import iconNotification from '../../assets/icon-notification.svg'
import iconBurgerMenu from '../../assets/icon-burger-menu.svg'

const router = useRouter()

</script>