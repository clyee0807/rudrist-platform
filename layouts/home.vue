<script setup>
const title = ref("Rudrist - HomePage");
const description = ref("The HomePage of Rudrist Platform");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<template>
  <div class="p-10">
    <slot />
  </div>
</template>

<style scoped></style>
