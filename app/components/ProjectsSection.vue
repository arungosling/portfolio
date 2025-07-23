<template>
  <section id="projects" class="h-screen mx-auto text-center">
    <div class="before-tag">
    </div>
    <h2 class="text-3xl py-20 font-bold mb-6 relative z-20">Projects</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <!-- <div v-for="(project, i) in projects" :key="i" class="p-4 border rounded-xl dark:border-zinc-700 text-left">
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-zinc-600 dark:text-zinc-300 mb-2">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-blue-600 hover:underline">View Project →</a>
      </div> -->
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'HRMS Portal',
    description: 'A complete HR management system with attendance, payroll, and leave tracking.',
    link: '#'
  },
  {
    title: 'Inventory System',
    description: 'Web-based inventory and billing system built with Laravel and Vue.',
    link: '#'
  }
]
</script>
