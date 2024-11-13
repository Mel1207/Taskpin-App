<template>
  <div class="h-[890px] w-full hero bg-fixed bg-cover overflow-hidden">
    <div class="container">
      <h1 class="text-center text-white text-3xl md:text-[40px] font-bold pt-[150px] mb-[10px]">Effortlessly organize and track tasks to <br class="hidden md:block"> boost your productivity</h1>
      <p class="text-white text-center mb-[30px] leading-7">A simple yet powerful task management app to help you organize, prioritize, and <br class="hidden md:block"> complete tasks efficiently, keeping your goals within reach.</p>
      <div class="flex gap-5 justify-center">
        <router-link to="/">
          <ButtonSet btn-title="Try our demo" class-list="w-[155px] h-[45px] rounded-lg bg-cBlack text-white text-sm"/>
        </router-link>
        <ButtonSet btn-title="Learn more" class-list="w-[155px] h-[45px] rounded-lg border border-white text-white text-sm"/>
      </div>
      <img src="../assets/img-taskboard.png" alt="taskboard" class="mt-[60px] block mx-auto max-w-[890px]">
    </div>
  </div>
  <section class="py-20">
    <div class="container">
      <p class="text-cBlack text-opacity-70 text-center mb-[30px]">Trusted by <span class="text-cGreen font-bold">millions</span> and partnered with <br> most rewarded organizations</p>
      <div class="flex flex-col items-center gap-10 md:gap-20 md:flex-row justify-center">
        <img src="../assets/organization-1.svg" alt="organization 1">
        <img src="../assets/organization-2.svg" alt="organization 2">
        <img src="../assets/organization-3.svg" alt="organization 3">
        <img src="../assets/organization-4.svg" alt="organization 4">
        <img src="../assets/organization-5.svg" alt="organization 5">
      </div>
    </div>
  </section>
  <section class="py-20 md:py-[100px] bg-cWhite10">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-[30px] mb-[30px]">
        <div class="rounded-[30px] text-center bg-cGreen bg-opacity-10">
          <p class="text-center mt-[50px]">Stay organized and productive by tracking <br> tasks, deadlines, and priorities</p>
          <img src="../assets/iph-1.png" alt="iphone 1" class="mt-[-70px] mx-auto">
        </div>
        <div class="rounded-[30px] text-center bg-cRed bg-opacity-10">
          <p class="text-center mt-[50px]">Boost daily achievements with streamlined <br> task management for better focus.</p>
          <img src="../assets/iph-2.png" alt="iphone 1" class="mt-[-70px] mx-auto">
        </div>
      </div>
      <div class="h-[450px] rounded-[30px] grid grid-cols md:grid-cols-2 items-center px-10 md:px-[60px] bg-cBlue bg-opacity-10 gap-[50px]">
        <div>
          <div class="text-xs text-cBlue py-[5px] px-[10px] rounded-full border border-cBlue mb-[15px] w-max">Featured app</div>
          <h3 class="text-[25px] font-bold mb-[15px]">Manage your task easily <br> and focus on your goal</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that </p>
          <div class="flex gap-[10px] mt-[35px]">
            <ButtonSet btn-title="Get started" class-list="px-[15px] h-[45px] rounded-lg bg-cBlack text-white text-sm"/>
            <ButtonSet btn-title="Learn more" class-list="px-[15px] h-[45px] rounded-lg border border-cBlack text-cBlack text-sm"/>
          </div>  
        </div>
        <img src="../assets/iph-3.png" alt="iphone 3" class="hidden md:block">
      </div>
    </div>
  </section>
  <section class="py-20 md:py-[100px]">
    <div class="container">
      <div class="text-xs text-cGreen bg-cGreen bg-opacity-10 py-[5px] px-[10px] rounded-full mb-[15px] w-max mx-auto">Testimonials</div>
      <h3 class="text-[25px] font-bold text-center mb-[15px]">Millions are enjoying their task</h3>
      <p class="text-center text-cBlack text-opacity-70 mb-[45px]">Lorem Ipsum is simply dummy text of the printing and typesetting <br class="hidden md:block"> industry. Lorem Ipsum has been the dummy text ever </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
        <div class="border rounded-[10px] p-5">
          <img src="../assets/img-5star.svg" alt="rating" class="mx-auto mb-[10px]">
          <p class="text-[14px] italic text-opacity-70 text-cBlack text-center mb-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div class="flex gap-[10px] justify-center">
            <img src="../assets/img-avatar-1.jpg" alt="avatar 1" class="h-[45px] w-[45px] rounded-full object-cover">
            <div>
              <p class="font-semibold">Mel John Pualon</p>
              <p class="text-xs text-cBlack text-opacity-70">CEO - Taskpin.io</p>
            </div>
          </div>
        </div>
        <div class="border rounded-[10px] p-5">
          <img src="../assets/img-5star.svg" alt="rating" class="mx-auto mb-[10px]">
          <p class="text-[14px] italic text-opacity-70 text-cBlack text-center mb-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div class="flex gap-[10px] justify-center">
            <img src="../assets/img-avatar-2.jpg" alt="avatar 1" class="h-[45px] w-[45px] rounded-full object-cover">
            <div>
              <p class="font-semibold">John Doe</p>
              <p class="text-xs text-cBlack text-opacity-70">CEO - Maksmith</p>
            </div>
          </div>
        </div>
        <div class="border rounded-[10px] p-5">
          <img src="../assets/img-5star.svg" alt="rating" class="mx-auto mb-[10px]">
          <p class="text-[14px] italic text-opacity-70 text-cBlack text-center mb-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div class="flex gap-[10px] justify-center">
            <img src="../assets/img-avatar-3.jpg" alt="avatar 1" class="h-[45px] w-[45px] rounded-full object-cover">
            <div>
              <p class="font-semibold">Jamie Ces</p>
              <p class="text-xs text-cBlack text-opacity-70">CEO - Walletmate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 md:py-[100px] bg-cWhite10">
    <div class="container">
      <div class="text-xs text-cGreen bg-cGreen bg-opacity-10 py-[5px] px-[10px] rounded-full mb-[15px] w-max mx-auto">Articles</div>
      <h3 class="text-[25px] font-bold text-center mb-[15px]">We got you covered from community</h3>
      <p class="text-center text-cBlack text-opacity-70 mb-[45px]">Lorem Ipsum is simply dummy text of the printing and typesetting <br class="hidden md:block"> industry. Lorem Ipsum has been the dummy text ever </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
        <div class="border rounded-[10px] p-[15px]">
          <img src="../assets/img-article-1.jpg" alt="article-1" class="w-full rounded-[5px] h-[235px] mb-[10px] object-cover">
          <div class="flex justify-between gap-[15px] items-center">
            <div>
              <p class="font-semibold">Task managing of 2024</p>
              <p class="text-xs text-cBlack text-opacity-70">January 20, 2024</p>
            </div>
            <img src="../assets/icon-go.svg" alt="visit">
          </div>
        </div>
        <div class="border rounded-[10px] p-[15px]">
          <img src="../assets/img-article-2.jpg" alt="article-1" class="w-full rounded-[5px] h-[235px] mb-[10px] object-cover">
          <div class="flex justify-between gap-[15px] items-center">
            <div>
              <p class="font-semibold">Stay On Top of Your Tasks</p>
              <p class="text-xs text-cBlack text-opacity-70">January 20, 2024</p>
            </div>
            <img src="../assets/icon-go.svg" alt="visit">
          </div>
        </div>
        <div class="border rounded-[10px] p-[15px]">
          <img src="../assets/img-article-3.jpg" alt="article-1" class="w-full rounded-[5px] h-[235px] mb-[10px] object-cover">
          <div class="flex justify-between gap-[15px] items-center">
            <div>
              <p class="font-semibold">Smart Task Management</p>
              <p class="text-xs text-cBlack text-opacity-70">January 20, 2024</p>
            </div>
            <img src="../assets/icon-go.svg" alt="visit">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 md:py-[100px]">
    <div class="container">
      <div class="text-xs text-cGreen bg-cGreen bg-opacity-10 py-[5px] px-[10px] rounded-full mb-[15px] w-max mx-auto">FAQ’s</div>
      <h3 class="text-[25px] font-bold text-center mb-[15px]">Frequently asked questions</h3>
      <p class="text-center text-cBlack text-opacity-70 mb-[45px]">Lorem Ipsum is simply dummy text of the printing and typesetting <br class="hidden md:block"> industry. Lorem Ipsum has been the dummy text ever </p>
      <div class="mt-[50px] max-w-[790px] mx-auto">
        <div v-for="item in accData" :key="item.id" class="p-5 bg-cWhite10 mb-5 rounded-[10px] cursor-pointer" @click="toggleAccordion(item.id)">
          <div class="flex justify-between items-center gap-[30px]">
            <p class="text-[20px] font-bold">{{ item.accTitle }}</p>
            <div class="h-[50px] w-[50px] rounded-xl border flex items-center justify-center">
              <img v-if="item.id === $store.state.activeAccordion" src="../assets/icon-minus.svg" alt="">
              <img v-else src="../assets/icon-plus.svg" alt="">
              
            </div>
          </div>
          <div v-if="item.id === $store.state.activeAccordion" class="pr-[70px] leading-7 text-cBlack text-opacity-70 mt-[15px]">{{ item.accContent }}</div>
        </div>
      </div>
    </div>
  </section>
  <div class="section relative z-10">
    <div class="container">
      <div class="bg-cGreen rounded-[30px] h-[450px] px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="max-w-[442px]">
          <div class="text-xs text-white border border-white py-[5px] px-[10px] rounded-full mb-[15px] w-max">Downloads</div>
          <h3 class="text-[25px] font-bold text-white mb-[15px]">Download our mobile app</h3>
          <p class="text-white mb-[45px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that </p>
          <div class="flex gap-5">
            <ButtonSet btn-title="Go to download" class-list="bg-cBlack text-white h-[40px] rounded-lg text-sm w-[155px]" />
            <ButtonSet btn-title="Learn more" class-list=" text-white border border-white h-[40px] rounded-lg text-sm w-[155px]" />
          </div>
        </div>
        <img src="../assets/img-banner.png" alt="Banner" class="hidden md:block">
      </div>
    </div>
  </div>
  <div class="bg-cBlack h-[385px] w-full mt-[-150px] md:mt-[-175px] relative flex items-end">
    <div class="container">
      <div class="flex flex-col gap-5 md:flex-row justify-between items-center pb-[30px] border-b border-white border-opacity-10">
        <router-link to="/" class="text-white text-lg font-bold flex gap-[10px] items-center">
          <img src="../assets/taskpin-logo.svg" alt="taskpin logo">
          Taskpin.io
        </router-link>
        <ul class="flex gap-[30px]">
          <li><a href="#!" class="text-white text-opacity-70">Home</a></li>
          <li><a href="#!" class="text-white text-opacity-70">About</a></li>
          <li><a href="#!" class="text-white text-opacity-70">Articles</a></li>
          <li><a href="#!" class="text-white text-opacity-70">Contact Us</a></li>
        </ul>
      </div>
      <div class="py-[30px] flex justify-between text-xs md:text-base">
        <div class="flex gap-[10px]">
          <a href="#!" class="text-white text-opacity-30">Terms</a>
          <span class="text-white text-opacity-30">|</span>
          <a href="#!" class="text-white text-opacity-30">Privacy Policy</a>
        </div>
        <p class="text-white text-opacity-30">Copyright @ Taskpin</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonSet from '../components/buttons/ButtonSet.vue'
import store from '../store';

const accData = ref([
  { 
    id: 1,
    accTitle: 'How do I setup my task manager?',
    accContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever  text of the printing and typesetting'
  },
  { 
    id: 2,
    accTitle: 'Is Taskpin.io free?',
    accContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever  text of the printing and typesetting'
  },
  { 
    id: 3,
    accTitle: 'How to register an account?',
    accContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text ever  text of the printing and typesetting'
  }
])

const toggleAccordion = (id: number) => {
  store.state.activeAccordion = id
}


</script>