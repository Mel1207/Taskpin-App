<template>
  <div class="flex md:hidden items-center justify-between px-5 pt-5">
    <router-link to="/">
      <img src="../../assets/taskpin-logo.svg" alt="main logo">
    </router-link>
    
    <div class="flex items-center gap-[12px]">
      <NavButtonIcon iconName="icon notification" :iconSrc="iconNotification"/>
      <img src="../../assets/img-avatar.png" alt="avatar" class="h-[35px] w-[35px]">
    </div>
  </div>
</template>

<script setup lang="ts">
import iconNotification from '../../assets/icon-notification.svg'
import NavButtonIcon from './NavButtonIcon.vue'

</script>