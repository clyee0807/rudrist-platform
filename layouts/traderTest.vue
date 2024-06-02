<script setup>
const sideNavigations = ref([
    {
        name: "Dashboard",
        icon: "/_nuxt/assets/img/trader/Dashboard.png",
    }, {
        name: "Portfolios",
        icon: "/_nuxt/assets/img/trader/Profolios.png",
    }, 
]);
</script>

<template>
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <Side :navigations="sideNavigations"/>
        <main class="flex flex-col flex-1 h-full">
            <Header />
            <section class="gap-4 w-full flex-1 p-5 rounded-tl-3xl bg-white-200 dark:bg-black-100 grid" style="grid-template-columns: 15% 1fr 25%; grid-template-rows: 54% 46%;">
            <slot />
            </section>
        </main>
    </div>
</template>

<style scoped></style>
