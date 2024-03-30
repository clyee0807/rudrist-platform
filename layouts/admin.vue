<script setup>
import { ref } from 'vue';
const sideNavigations = ref([
    {
        name: "Dashboard",
        icon: "/_nuxt/assets/img/admin/Dashboard.png",
    }, {
        name: "Money Manage",
        icon: "/_nuxt/assets/img/admin/MoneyManagement.png",
    }, {
        name: "Account Manage",
        icon: "/_nuxt/assets/img/admin/AccountManagement.png",
    },
]);

const selectedLedger = ref('0');  // id of selected ledger
function selectLedger(ledger) {
    console.log('Select ledger:', selectedLedger.value);
    if(ledger === selectedLedger.value) {
        selectedLedger.value = '0';
    }
    else {
        selectedLedger.value = ledger;
    }
}
</script>

<template>
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <Side :navigations="sideNavigations"/>
        <main class="flex flex-col flex-1 h-full">
            <Header />
            <div class="flex flex-row gap-[0.5%]">
                <!-- <BlockCalendar/> -->
                <div class="w-1/3 rounded-lg shadow-lg p-3">
                    <p>This is calendar.</p>
                    <!-- <Calendar/> -->
                </div>
                <div class="w-2/3">
                    <MarkPrice/>
                </div>
            </div>
            <div class="flex flex-row gap-[0.5%] items-stretch">
                <div :class="selectedLedger === '0' ? 'w-3/4' : 'w-7/12'" class = "flex">
                    <CurrencyTrend/>
                </div>
                <div :class="selectedLedger === '0' ? 'w-1/4' : 'w-3/12'" class="w-1/4">
                    <LedgerApproval @selectLedger="selectLedger"/>
                </div>
                <div v-if="selectedLedger !== '0'" class="w-2/12">
                    <LedgerInfo :ledgerId="selectedLedger"/>
                </div>
            </div>
            <!-- <section class="w-full flex-1 rounded-tl-3xl bg-white-200 dark:bg-black-100 p-4">
                <slot></slot>
            </section> -->
        </main>
    </div>
</template>

<style scoped>
section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 24rem 1fr 1fr 24rem;
    grid-template-columns: 16rem 26rem 1fr 26rem;
}
</style>
