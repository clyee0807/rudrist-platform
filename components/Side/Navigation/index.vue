<script setup>
defineProps(["name", "icon", "active"])
</script>

<template>
    <a :class="{active: active}" class="
        relative w-full h-16 px-4 
        flex items-center gap-4 
        from-iris-300 to-transparent [&.active]:bg-gradient-to-r 
        before:absolute before:left-0 before:w-2.5 before:h-full [&.active]:before:bg-iris-100
        hover:cursor-pointer
    ">
        <div class="w-12 min-w-12 max-w-12 h-12 min-h-12 max-h-12 m-2">
            <img class="w-full h-full" :src="icon" alt="">
        </div>
        <h3 class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-nowrap">{{ name }}</h3>
    </a>
</template>

<style scoped></style>
