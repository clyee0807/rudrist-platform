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
            <section class="flex flex-col gap-4 w-full flex-1 p-5 rounded-tl-3xl bg-white-200 dark:bg-black-100">
                <div class="flex flex-1 flex-row gap-4">
                    <!-- <BlockCalendar/> -->
                    <div class="w-1/3 rounded-lg shadow-lg p-3">
                        <p>This is calendar.</p>
                        <!-- <Calendar/> -->
                    </div>
                    <div class="w-2/3">
                        <MarkPrice />
                    </div>
                </div>
                <div class="flex flex-row gap-4 h-96">
                    <div class="flex w-2/3">
                        <BlockPositionOrder />
                    </div>
                    <div class="w-1/3">
                        <BlockPlaceOrder />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped></style>
