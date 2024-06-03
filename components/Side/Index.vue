<script setup>
defineProps(["navigations"]);
</script>

<template>
    <aside class="flex flex-col overflow-hidden w-20 hover:w-80 duration-300 max-w-80 min-w-20 h-full mr-4">
        <div class="flex items-center w-full h-24 gap-4 px-4">
            <img class="h-12 ml-4 shrink-0" src="~/assets/img/application/Logo.svg" alt="">
            <!-- <h1 class="text-black-100 dark:text-white-100 h1-font font-medium text-nowrap">Mid-Office</h1> -->
        </div>
        <nav class="flex flex-col w-full flex-1 gap-2.5 py-4">
            <SideNavigation v-for="(item, idx) in navigations" :name="item.name" :icon="item.icon" :active="idx===0"></SideNavigation>
        </nav>
    </aside>
</template>

<style scoped></style>
