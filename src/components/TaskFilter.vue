<template>
  <div class="border p-1 rounded-[5px] flex gap-[5px] w-max">
    <div v-for="item in tabItems" :key="item.id" class="cursor-pointer text-[12px] py-[2px] px-[5px] rounded-[3px] w-14 text-center" :class="$store.state.selectedTab === item.id ? 'text-white bg-cGreen': ''" @click="changeTab(item.id)">{{ item.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import store from '../store';

const tabItems = ref([
  { id: 1, title: 'All'},
  { id: 2, title: 'Low'},
  { id: 3, title: 'Medium'},
  { id: 4, title: 'High'}
])

const changeTab = (id: number) => {
  store.state.selectedTab = id
}
</script>
