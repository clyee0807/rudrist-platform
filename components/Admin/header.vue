<script setup>
// Admin: header
import { useClearCookie } from '@/composables/clearCookie.js';
import { reloadNuxtApp } from "nuxt/app";

const { clearCookie } = useClearCookie();
const router = useRouter()

const currencyDropDownItems = ref([
    { name: "ETH", icon: "/_nuxt/assets/img/currency/Ethereum.png"}, 
    { name: "BTC",  icon: "/_nuxt/assets/img/currency/Bit.png"},
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

// popup control
const isMarkPricePopupOpen = ref(false);
const isApprovalPopupOpen = ref(false);

const openMarkPricePopup = () => {
    isMarkPricePopupOpen.value = !isMarkPricePopupOpen.value;
    console.log(`isMarkPricePopupOpen: ${isMarkPricePopupOpen.value}`);
}
const closeMarkPricePopup = () => {
    isMarkPricePopupOpen.value = false;
}

const openApprovalPopup = () => {
    isApprovalPopupOpen.value = !isApprovalPopupOpen.value;
    console.log(`isApprovalPopupOpen: ${isApprovalPopupOpen.value}`);
}
const closeApprovalPopup = () => {
    isApprovalPopupOpen.value = false;
}
</script>

<template>
    <header class="flex items-center w-full h-18 px-4 py-3">
        <h2 class="title text-black-100 dark:text-white-100 h1-font font-normal">Dashboard</h2>
        <div class="relative flex items-center justify-end flex-1 h-full gap-4 px-8">
            <!-- MarkPrice Popup -->
            <button
                class="currency-button w-48 h-[80%] px-2 pb-2 pt-1 border rounded-lg text-left text-gray-200"
                @click="openMarkPricePopup"
            >
                {{ selectedCurrency || "Select Currency..." }}
            </button>
            <div v-if="isMarkPricePopupOpen" class="popup-window">
                <AdminMarkPrice 
                    class="absolute top-[-6%] right-[0%]"
                    @close="closeMarkPricePopup"
                />
            </div>
    
            <!-- Login -->
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

            <!-- LedgerApproval Popup -->
            <a class="relative cursor-pointer before:absolute before:top-1 before:right-1 before:w-4 before:h-4 before:rounded-full [&.active]:before:bg-fuschi-100"
                @click="openApprovalPopup"
            >
                <img class="w-9 h-9 dark:invert" src="/_nuxt/assets/img/application/Notification.png" alt="">
            </a>
            <div v-if="isApprovalPopupOpen" class="popup-window">
                <AdminLedgerApproval 
                    class="w-[64rem] h-[36rem]"
                    @close="closeApprovalPopup"
                />
            </div>
        </div>
    </header>
    <div :class="{'darkWindow': isMarkPricePopupOpen || isApprovalPopupOpen}"></div>
</template>

<style scoped>
.darkWindow {
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    z-index: 998;
    height: 100%;
    width: 100%;
}

.popup-window {
    position: fixed;
    top: 5%;
    bottom: 5%;
    left: 0;
    right: 0;
    z-index: 999;
    margin: auto;
    max-width: 80%;
    max-height: 80%;
}
</style>