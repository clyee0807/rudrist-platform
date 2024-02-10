<script setup>
import { ref } from 'vue'

const navigations = ref([
    {
        name: "Dashboard",
        icon: "/_nuxt/assets/img/trader/Dashboard.png",
    }, {
        name: "Profolios",
        icon: "/_nuxt/assets/img/trader/Profolios.png",
    }, {
        name: "Transactions",
        icon: "/_nuxt/assets/img/trader/Transactions.png",
    },
]);
</script>

<template>
    <aside class="flex flex-col overflow-hidden w-24 hover:w-80 duration-300 max-w-80 min-w-24 h-full mr-4">
        <SideLogo />
        <nav class="flex flex-col w-full flex-1 gap-2.5 py-4">
            <SideNavigation v-for="(item, idx) in navigations" :name="item.name" :icon="item.icon" :active="idx===0"></SideNavigation>
        </nav>
    </aside>
</template>

<style scoped></style>
