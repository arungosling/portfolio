<template>
  <section id="contact" class="py-20 px-4 max-w-xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
    <form class="grid gap-4 text-left">
      <input type="text" placeholder="Your Name" class="input" />
      <input type="email" placeholder="Your Email" class="input" />
      <textarea rows="4" placeholder="Message" class="input"></textarea>
      <button class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Send</button>
    </form>
  </section>
</template>

<style scoped>
.input {
  @apply w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white;
}
</style>
