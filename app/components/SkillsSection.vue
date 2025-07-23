<template>
  <section ref="pinSection" id="skills" class="pin-section skill-bg text-white">
    <div ref="scrollContainer" class="w-full">
      <div class="sticky top-0 min-h-screen flex items-center justify-center px-4 py-10">
        <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!-- Left Column -->
          <div class="flex flex-col justify-center text-center lg:text-left">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
            <ul class="space-y-2 text-base sm:text-lg leading-relaxed">
              <li><strong>Languages:</strong> PHP, JavaScript, Python (basic), SQL</li>
              <li><strong>Frameworks:</strong> Laravel, Vue.js, jQuery, Django (learning)</li>
              <li><strong>Web:</strong> HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap</li>
              <li><strong>Database:</strong> MySQL, phpMyAdmin</li>
              <li><strong>Tools:</strong> Git, VS Code, Postman, XAMPP</li>
            </ul>
          </div>

          <!-- Right Column: Card Stack -->
          <div class="relative flex items-center justify-center h-[300px] sm:h-[400px]">
            <div class="cards-container relative w-full h-full">
              <section
                v-for="(card, i) in cards"
                :key="i"
                class="card z-10 absolute left-1/2 top-1/2 w-36 sm:w-52 h-36 sm:h-52 rounded-lg overflow-hidden shadow-lg transform"
              >
                <NuxtImg 
                  :src="card.img"
                  alt="Card Image"
                  class="w-full h-full object-cover"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const pinSection = ref(null)

const cards = [
  { img: '/img/html.png' },
  { img: '/img/css.png' },
  { img: '/img/javascript.png' },
  { img: '/img/php.png' },
  { img: '/img/python.png' },
  { img: '/img/laravel.png' }
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const cardEls = gsap.utils.toArray('.card')
  const offsetPerCard = window.innerHeight / 2

  // Set initial card positions
  gsap.set(cardEls, {
    xPercent: -50,
    yPercent: -50,
    zIndex: (i) => cardEls.length - i,
    autoAlpha: 1
  })

  // Animate stacked cards upward on scroll
  gsap.to(cardEls, {
    y: -offsetPerCard-100,
    stagger: {
      each: 0.5
    },
    scrollTrigger: {
      trigger: pinSection.value,
      start: 'top top',
      end: () => `+=${cardEls.length * offsetPerCard}`,
      pin: true,
      scrub: true,
      markers: false
    }
  })
})
</script>

<style scoped>
.card {
  opacity: 0;
  visibility: hidden;
}
</style>
