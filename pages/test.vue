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
            <section class="w-full flex flex-row flex-1 gap-2 rounded-tl-3xl bg-white-200 dark:bg-black-100 p-4">
              <div class="w-3/4 h-full">
                <Balance/>
              </div>
              <div class="w-1/4 flex flex-col gap-2 h-full">
                <TotalAmount/>
                <AddPortfolio/>
              </div>
            </section>
        </main>
    </div>
</template>

<style scoped></style>
