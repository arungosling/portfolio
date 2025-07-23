<template>
  <section
    v-gsap.scrolltrigger.pinned="{ start: 'top top', end: '+=100%',   pinSpacing: false, scrub: true, markers: true }"
    class="h-screen banner-section  flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-black via-zinc-900 to-zinc-800"
  >
    <div class="banner-text text-white">
      <h1 class="  mb-2">
        <i style="line-height: 3;" class="md:text-2xl font-bold">こんにちは (HI)</i> <span style="font-size: 35px;">😽 </span><br>
        <span style="font-size: 20px;">I Am</span> <strong ref="title"> <span style="color: yellow; font-weight: 500;"> <</span><span style="font-weight:600;">Arun</span><span style="color: yellow; font-weight: 500;">/></span></strong>
      </h1>
      <p class="text-xl">
        I Am A <span ref="textElement" class="text-emerald-400 font-semibold"></span
        ><span class="animate-blink">|</span>
      </p>
    </div>

    <div class="z-10 astronaut-section flex flex-wrap justify-around w-full mt-10 gap-4" >
      <section
        v-gsap.parallax.faster-10
        v-gsap.magnetic.weaker
        class="astronaut-div place-items-center"
      >
        <NuxtImg 
          class="float-animation"
          src="/img/vecteezy_sought-after-avant-garde-a-lone-astronaut-floating-in-space_62246583.png"
          width="250"
          alt="Astronaut with Laptop"
        />
      </section>

      <section
        v-gsap.parallax.faster-10
        v-gsap.magnetic.weaker
        class="astronaut-div"
      >
        <NuxtImg 
          class="float-animation"
          src="/img/vecteezy_whimsical-exquisite-a-lone-astronaut-floating-in-space_62244253-min.png"
          width="250"
          alt="Floating Astronaut"
        />
      </section>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const textElement = ref(null)

const texts = [
  { text: "Laravel Expert 🧠", color: "#38bdf8" },
  { text: "Vue.js Enthusiast 💚", color: "#facc15" },
  { text: "Performance Optimizer 🚀", color: "#34d399" }
]

onMounted(() => {
  let tl = gsap.timeline({ repeat: -1 })

  texts.forEach(({ text, color }) => {
    tl.to(textElement.value, {
      duration: 2,
      text: text,
      color: color,
      ease: "none"
    }).to({}, { duration: 1 }) // pause
      .to(textElement.value, {
        duration: 2,
        text: "",
        ease: "power2.out"
      })
  })

})

</script>

<style scoped>
.animate-blink {
  animation: blink 2s step-start infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
