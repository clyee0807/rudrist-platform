<script setup>
const currencyDropDownItems = ref([
    {
        name: "Cos",
        icon: "/_nuxt/assets/img/currency/Cosmos.png",
    }, {
        name: "Doge",
        icon: "/_nuxt/assets/img/currency/Doge.png",
    }, {
        name: "Lite",
        icon: "/_nuxt/assets/img/currency/Lite.png",
    }, {
        name: "Polk",
        icon: "/_nuxt/assets/img/currency/Polkadot.png",
    }, {
        name: "ETH",
        icon: "/_nuxt/assets/img/currency/Ethereum.png",
    }, {
        name: "BTC",
        icon: "/_nuxt/assets/img/currency/Bit.png",
    },
]);
</script>

<template>
    <header class="flex items-center w-full h-18 px-4 py-3">
        <h2 class="title text-black-100 dark:text-white-100 h1-font font-normal">Dashboard</h2>
        <div class="flex items-center justify-end flex-1 h-full gap-4 px-8">
            <DropDown class="text-center text-xl font-normal text-black-100 dark:text-white-100" width="10rem" height="2.5rem" :items="currencyDropDownItems"/>
            <PromptButton class="w-9 h-9" icon="/_nuxt/assets/img/application/Profile.png" :active="false"/>
            <PromptButton class="w-9 h-9" icon="/_nuxt/assets/img/application/Notification.png" :active="true"/>
            <!-- <ThemeSwitch /> -->
        </div>
    </header>
</template>

<style scoped></style>
