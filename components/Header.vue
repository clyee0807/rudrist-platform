<script setup>
import { useClearCookie } from '@/composables/clearCookie.js';
import { reloadNuxtApp } from "nuxt/app";

const { clearCookie } = useClearCookie();
const router = useRouter()

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

const userDropDownItems = ref([
    { name: "login"},
    { name: "logout"}
])

const showLogin = ref(false)

const triggerLogin = () => {
    showLogin.value = showLogin.value === true ? false : true;
}

const login = () => {
    router.push('/login')
}

const logout = () => {
    clearCookie();
    reloadNuxtApp({
        ttl: 1000,
    });
    console.log('logout')
}
</script>

<template>
    <header class="flex items-center w-full h-18 px-4 py-3">
        <h2 class="title text-black-100 dark:text-white-100 h1-font font-normal">Dashboard</h2>
        <div class="relative flex items-center justify-end flex-1 h-full gap-4 px-8">
            <DropDown class="text-center text-xl font-normal text-black-100 dark:text-white-100" width="10rem" height="2.5rem" :items="currencyDropDownItems"/>
            <PromptButton 
                class="w-9 h-9"
                icon="/_nuxt/assets/img/application/Profile.png"
                :active="false"
                @click="triggerLogin"
            />
            <div 
                class="absolute flex flex-col -bottom-20 right-[3.7rem] z-10 rounded-xl border-2 border-gray-200 px-2 py-2"
                :class="{ hidden: !showLogin }"
            >
                <button class="cursor-pointer h3-font" @click="login">Login</button>
                <button class="cursor-pointer h3-font" @click="logout">Logout</button>
            </div>
            <PromptButton class="w-9 h-9" icon="/_nuxt/assets/img/application/Notification.png" :active="true"/>
            <!-- <ThemeSwitch /> -->
        </div>
    </header>
</template>

<style scoped></style>
