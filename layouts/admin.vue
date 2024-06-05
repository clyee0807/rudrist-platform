<script setup>
const sideNavigations = ref([
    {
        name: "Dashboard",
        icon: "/_nuxt/assets/img/admin/AdminDashboard.png",
    }, 
    {
        name: " Account",
        icon: "/_nuxt/assets/img/admin/Account.png",
    }, 
    {
        name: "Account Manage",
        icon: "/_nuxt/assets/img/admin/AccountManage.png",
    },
    {
        name: "Portfolio Manage",
        icon: "/_nuxt/assets/img/admin/PortfolioManage.png",
    }
]);
</script>

<template>
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <Side :navigations="sideNavigations"/>
        <main class="flex flex-col flex-1 h-full">
            <Header />
            <slot />
        </main>
    </div>
</template>

<style scoped>
</style>
