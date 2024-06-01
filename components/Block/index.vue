<script setup>
defineProps(["row", "col"]);
</script>

<template>
    <section :style="['grid-row:'+row, 'grid-column:'+col]" 
              class="w-full h-full p-4 rounded-xl drop-shadow-xl bg-white-100 dark:bg-black-200">
        <slot></slot>
    </section>
</template>

<style scoped></style>
