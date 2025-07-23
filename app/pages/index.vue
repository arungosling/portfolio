<template>
  <div class="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
    <!-- <div>
      <div ref="follower" class="mouse-follower"></div>
    </div> -->
    <nav class="fixed top-4 z-40 w-full">
    <div class="bg-white dark:bg-gray-900/75 border border-gray-200/50 dark:border-gray-700 rounded-md max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
      
      <!-- Hamburger for mobile -->
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <!-- Nav Items -->
      <div :class="['w-full md:flex md:items-center md:justify-center', isOpen ? 'block' : 'hidden']">
        <ul class="flex flex-col md:flex-row text-center md:space-x-8 text-xl font-medium p-4 md:p-0 border md:border-0 border-gray-100 rounded-lg bg-inherit dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#about-me" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">About</a>
          </li>
          <li>
            <a href="#skills" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">Skills</a>
          </li>
          <li>
            <a href="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <!-- <ContactSection /> -->
    <div>
    <!-- Alien -->
     <a href="mailto:arungosling@gmail.com" target="_blank" title="hi 👽">
        <NuxtImg  src="/img/baby-alien.png" class="fixed alien-img bottom-0 left-4 z-50" width="100" alt="" />
     </a>

    <!-- Talking Bubble -->
    <div
      ref="bubble"
      class="fixed bottom-10 left-28 bg-white text-black p-3 rounded-xl shadow-lg w-60 text-sm font-semibold transition-all duration-300"
    >
      <span ref="bubbleText">👽 Hello, Earthling!</span>
    </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  title: 'Arun Pandi | Full Stack Developer',
  description: 'Portfolio of Arun Pandi — a passionate PHP, Laravel, and Vue.js developer from Madurai. Explore my skills, projects, and experience.',
  ogTitle: 'Arun Pandi | Full Stack Developer Portfolio',
  ogDescription: 'Check out Arun Pandi’s developer portfolio featuring PHP, Laravel, Vue.js, and more. View skills, projects, and contact details.',
})


import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)
const isOpen = ref(false)
const bubbleText = ref(null)
const bubble = ref(null)

const phrases = [
  "Hey there! 👋",
  "Need a backend boost? 💻",
  "Vue is my space suit! 🛸",
  "Let's refactor the universe!",
  "Deploy to Saturn? 🚀"
]

const follower = ref(null)

onMounted(() => {

    setTimeout(() => {
      document.body.classList.add("loaded")
    }, 300)
  const alien = document.querySelector('.alien-img')
  alien.addEventListener('mouseenter', () => {
    gsap.to(alien, { scale: 1.1, duration: 0.2 })
  })
  alien.addEventListener('mouseleave', () => {
    gsap.to(alien, { scale: 1, duration: 0.2 })
  })


  const tl = gsap.timeline({ repeat: -1 })
let index = 0
 const showMessage = () => {
    gsap.fromTo(
      bubble.value,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }
    )

    bubbleText.value.innerText = phrases[index]

    index = (index + 1) % phrases.length

    setTimeout(() => {
      gsap.to(bubble.value, {
        opacity: 0,
        duration: 0.4,
        onComplete: showMessage
      })
    }, 2500)
  }

  showMessage()

    const move = (e) => {
      gsap.to(follower.value, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: 'power2.out',
        visibility : "visible",
      })
    }

    window.addEventListener('mousemove', move)

    onUnmounted(() => {
      window.removeEventListener('mousemove', move)
    })
  })
  
</script>

<style>
html {
  scroll-behavior: smooth;
}
.mouse-follower {
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 20px;
  height: 20px;
  background: #38bff89e; /* Sky blue */
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.2s ease;
  visibility: hidden;
}
.animate-blink {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

body {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

/* Once loaded, fade in */
body.loaded {
  opacity: 1;
}
</style>