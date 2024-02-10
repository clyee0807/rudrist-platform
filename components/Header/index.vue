<script setup></script>

<template>
    <header class="flex items-center w-full h-24">
        <h2 class="text-black-100 dark:text-white-100 text-4xl font-normal">Dashboard</h2>
        <div class="flex items-center justify-end flex-1 h-full gap-4 px-8">
            <div class="relative w-40">
                <div class="flex items-center w-full h-12 p-2 hover:cursor-pointer rounded-3xl border-4 border-gray-200 bg-white-100 dark:bg-black-200">
                    <div class="flex items-center flex-1 h-full gap-2.5">
                        <img class="w-8 h-8" src="~/assets/img/currency/Ethereum.png" alt="">
                        <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">ETH</span>
                    </div>
                    <img class="w-6 h-6 m-1 rotate-180" src="~/assets/img/arrow/Black.png" alt="">
                </div>
                <!--
                <ul class="absolute overflow-hidden flex flex-col gap-2.5 top-14 w-full rounded-3xl border-4 border-gray-200 bg-white-100 dark:bg-black-200">
                    <li class="flex items-center w-full h-12 p-2 pr-10 duration-300 hover:cursor-pointer bg-white-100 dark:bg-black-200 hover:bg-white-200 dark:hover:bg-black-100">
                        <div class="flex items-center flex-1 h-full gap-2.5">
                            <img class="w-8 h-8" src="~/assets/img/currency/Cosmos.png" alt="">
                            <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">Cos</span>
                        </div>
                    </li>
                    <li class="flex items-center w-full h-12 p-2 pr-10 duration-300 hover:cursor-pointer bg-white-100 dark:bg-black-200 hover:bg-white-200 dark:hover:bg-black-100">
                        <div class="flex items-center justify-between flex-1 h-full gap-2.5">
                            <img class="w-8 h-8" src="~/assets/img/currency/Doge.png" alt="">
                            <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">Doge</span>
                        </div>
                    </li>
                    <li class="flex items-center w-full h-12 p-2 pr-10 duration-300 hover:cursor-pointer bg-white-100 dark:bg-black-200 hover:bg-white-200 dark:hover:bg-black-100">
                        <div class="flex items-center justify-between flex-1 h-full gap-2.5">
                            <img class="w-8 h-8" src="~/assets/img/currency/Lite.png" alt="">
                            <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">Lite</span>
                        </div>
                    </li>
                    <li class="flex items-center w-full h-12 p-2 pr-10 duration-300 hover:cursor-pointer bg-white-100 dark:bg-black-200 hover:bg-white-200 dark:hover:bg-black-100">
                        <div class="flex items-center justify-between flex-1 h-full gap-2.5">
                            <img class="w-8 h-8" src="~/assets/img/currency/Polkadot.png" alt="">
                            <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">Polk</span>
                        </div>
                    </li>
                    <li class="flex items-center w-full h-12 p-2 pr-10 duration-300 hover:cursor-pointer bg-white-100 dark:bg-black-200 hover:bg-white-200 dark:hover:bg-black-100">
                        <div class="flex items-center justify-between flex-1 h-full gap-2.5">
                            <img class="w-8 h-8" src="~/assets/img/currency/Ethereum.png" alt="">
                            <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">ETH</span>
                        </div>
                    </li>
                    <li class="flex items-center w-full h-12 p-2 pr-10 duration-300 hover:cursor-pointer bg-white-100 dark:bg-black-200 hover:bg-white-200 dark:hover:bg-black-100">
                        <div class="flex items-center justify-between flex-1 h-full gap-2.5">
                            <img class="w-8 h-8" src="~/assets/img/currency/Bit.png" alt="">
                            <span class="flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-center">BTC</span>
                        </div>
                    </li>
                </ul>
                -->
            </div>
            <div class="w-12 h-12">
                <PromptButton icon="/_nuxt/assets/img/application/Profile.png" :active="false"/>
            </div>
            <div class="w-12 h-12">
                <PromptButton icon="/_nuxt/assets/img/application/Notification.png" :active="true"/>
            </div>
        </div>
    </header>
</template>

<style scoped></style>
