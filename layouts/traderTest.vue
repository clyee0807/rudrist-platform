<script setup>
const sideNavigations = ref([
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
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <Side :navigations="sideNavigations"/>
        <main class="flex flex-col flex-1 h-full">
            <Header />
            <section class="gap-4 w-full flex-1 p-5 rounded-tl-3xl bg-white-200 dark:bg-black-100 grid" style="grid-template-columns: 15% 1fr 25%; grid-template-rows: 54% 46%;">
                <BlockPortfolios class="w-full h-full" style="grid-column: 1 / 2; grid-row: 1 / 3;" />
                <BlockTradingView class="w-full h-full" style="grid-column: 2 / 3; grid-row: 1 / 2;" />
                <BlockSendLedger class="w-full h-full" style="grid-column: 3 / 4; grid-row: 1 / 2;" />
                <BlockPositionOrder class="w-full h-full" style="grid-column: 2 / 3; grid-row: 2 / 3;" />
                <BlockPlaceOrder class="w-full h-full" style="grid-column: 3 / 4; grid-row: 2 / 3;" />
            </section>
        </main>
    </div>
</template>

<style scoped></style>
