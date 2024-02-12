<script setup>
import { ref } from 'vue';

const navigations = ref([
    {
        name: "Dashboard",
        icon: "/_nuxt/assets/img/admin/Dashboard.png",
    }, {
        name: "Money Manage",
        icon: "/_nuxt/assets/img/admin/Money Management.png",
    }, {
        name: "Account Manage",
        icon: "/_nuxt/assets/img/admin/Account Management.png",
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
