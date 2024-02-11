<script setup></script>

<template>
    <header class="flex items-center w-full h-24">
        <h2 class="title text-black-100 dark:text-white-100 text-4xl font-normal">Dashboard</h2>
        <div class="flex items-center justify-end flex-1 h-full gap-4 px-8">
            <div @click="($event).currentTarget.classList.toggle('active')" class="relative w-40 text-2xl font-normal text-center text-black-100 dark:text-white-100">
                <div class="flex items-center justify-between w-full h-12 px-2 hover:cursor-pointer rounded-3xl border-4 border-gray-200 bg-white-100 dark:bg-black-200">
                    <img class="w-8 h-8" src="~/assets/img/currency/Ethereum.png" alt="">
                    <span class="flex-1">ETH</span>
                    <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="~/assets/img/arrow/Black.png" alt="">
                </div>
                <ul class="[&:not(.active>ul)]:invisible absolute overflow-hidden flex flex-col top-[110%] w-full rounded-3xl border-4 border-gray-200 bg-white-100 dark:bg-black-200">
                    <li class="flex items-center justify-between w-full h-12 px-2 transition-[background] duration-300 hover:cursor-pointer hover:bg-white-200 dark:hover:bg-black-100">
                        <img class="w-8 h-8" src="~/assets/img/currency/Cosmos.png" alt="">
                        <span class="flex-1">Cos</span>
                        <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="">
                    </li>
                    <li class="flex items-center justify-between w-full h-12 px-2 transition-[background] duration-300 hover:cursor-pointer hover:bg-white-200 dark:hover:bg-black-100">
                        <img class="w-8 h-8" src="~/assets/img/currency/Doge.png" alt="">
                        <span class="flex-1">Doge</span>
                        <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="">
                    </li>
                    <li class="flex items-center justify-between w-full h-12 px-2 transition-[background] duration-300 hover:cursor-pointer hover:bg-white-200 dark:hover:bg-black-100">
                        <img class="w-8 h-8" src="~/assets/img/currency/Lite.png" alt="">
                        <span class="flex-1">Lite</span>
                        <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="">
                    </li>
                    <li class="flex items-center justify-between w-full h-12 px-2 transition-[background] duration-300 hover:cursor-pointer hover:bg-white-200 dark:hover:bg-black-100">
                        <img class="w-8 h-8" src="~/assets/img/currency/Polkadot.png" alt="">
                        <span class="flex-1">Polk</span>
                        <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="">
                    </li>
                    <li class="flex items-center justify-between w-full h-12 px-2 transition-[background] duration-300 hover:cursor-pointer hover:bg-white-200 dark:hover:bg-black-100">
                        <img class="w-8 h-8" src="~/assets/img/currency/Ethereum.png" alt="">
                        <span class="flex-1">ETH</span>
                        <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="">
                    </li>
                    <li class="flex items-center justify-between w-full h-12 px-2 transition-[background] duration-300 hover:cursor-pointer hover:bg-white-200 dark:hover:bg-black-100">
                        <img class="w-8 h-8" src="~/assets/img/currency/Bit.png" alt="">
                        <span class="flex-1">BTC</span>
                        <img class="w-6 h-6 m-1 rotate-180 dark:invert" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="">
                    </li>
                </ul>
            </div>
            <div class="w-12 h-12">
                <PromptButton icon="/_nuxt/assets/img/application/Profile.png" :active="false"/>
            </div>
            <div class="w-12 h-12">
                <PromptButton icon="/_nuxt/assets/img/application/Notification.png" :active="true"/>
            </div>
            <ThemeSwitch />
        </div>
    </header>
</template>

<style scoped></style>
