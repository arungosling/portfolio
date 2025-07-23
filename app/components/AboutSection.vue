<template>
  <section
    id="about-me"
    class="h-screen flex items-center justify-center px-6"
    v-gsap.scrolltrigger.pinned="{ start: 'top top', end: '+=100%',  pinSpacing: false, scrub: true }"
  >
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Left Column: Image -->
      <div class="flex justify-center">
        <img
          ref="reactBox"
          src="https://ik.imagekit.io/wax4lboi9/img/vecteezy_elegant-artistic-astronaut-on-asteroid-digital-render-of_56404968.png?updatedAt=1753295630944"
          alt="Arun Pandi"
          class="rounded-2xl shadow-xl w-64 h-64 object-cover astronaut-pic"
        />
      </div>

      <!-- Right Column: Text Content -->
      <div>
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <p class="leading-relaxed mb-4" style="font-size: 20px;">
          I'm a backend developer with ~3 years of experience in PHP (Laravel), Vue.js, and MySQL.
          Passionate about writing clean code, optimizing performance, and learning new technologies.
        </p>
        <p class="leading-relaxed" style="font-size: 20px;">
          I'm currently expanding my backend skillset by learning <strong class="text-emerald-500">Python</strong> and <strong class="text-indigo-500">Django</strong>,
          exploring new ways to build scalable and maintainable web applications across different tech stacks.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const reactBox = ref(null)

onMounted(() => {
  const strength = 20

  window.addEventListener('mousemove', (e) => {
    const xPercent = (e.clientX / window.innerWidth - 0.5) * -2
    const yPercent = (e.clientY / window.innerHeight - 0.5) * -2

    gsap.to(reactBox.value, {
      x: xPercent * strength,
      y: yPercent * strength,
      duration: 0.5,
      ease: "power3.out"
    })
  })

  gsap.to(reactBox.value, {
  x: 20,
  y: -10,
  rotateZ: 5,
  duration: 0.5,
  ease: 'power3.out'
})

  gsap.to(reactBox.value, {
    y: '+=20',
    duration: 1,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  })
})
</script>

<style>
/*  */

</style>
