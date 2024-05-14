<script setup>
import { ref } from 'vue';
import '../assets/css/main.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// const date = ref();
const date = ref(new Date());

const handleDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(`Selected date is ${day}/${month}/${year}`);
}

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
        <main class="flex flex-col flex-1">
            <Header />
            <div class="h-[40%] flex flex-row gap-[0.5%]">
                <div class="w-[300px] rounded-lg shadow-lg p-3">
                    <VueDatePicker 
                        class="datepicker dp__theme_light"
                        v-model="date"
                        inline auto-apply
                        :enable-time-picker="false"
                        @update:model-value="handleDate"
                    />
                </div>
                <div class="w-full">
                    <MarkPrice/>
                </div>
            </div>
            <div class="h-[50%] mt-[1%] flex flex-row gap-[0.5%] items-stretch">
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
        </main>
    </div>
</template>

<style scoped>

.datepicker {
  /*General*/
  --dp-font-family: "Kanit", system-ui, sans-serif;

  --dp-common-transition: all 0.1s ease-in; /*Generic transition applied on buttons and calendar cells*/

  /*Sizing*/
  --dp-button-height: 32px; /*Size for buttons in overlays*/
  --dp-month-year-row-height: 32px; /*Height of the month-year select row*/
  --dp-month-year-row-button-size: 32px; /*Specific height for the next/previous buttons*/
  --dp-button-icon-height: 20px; /*Icon sizing in buttons*/
  --dp-cell-size: 35px; /*Width and height of calendar cell*/
  --dp-cell-padding: 5px; /*Padding in the cell*/
  --dp-common-padding: 10px; /*Common padding used*/
  --dp-menu-min-width: 260px; /*Adjust the min width of the menu*/
  --dp-action-buttons-padding: 2px 5px; /*Adjust padding for the action buttons in action row*/
  --dp-row-margin:  5px 0; /*Adjust the spacing between rows in the calendar*/
  --dp-calendar-header-cell-padding:  0.5rem; /*Adjust padding in calendar header cells*/
  --dp-overlay-col-padding:  3px; /*Padding in the overlay column*/
  --dp-time-inc-dec-button-size:  32px; /*Sizing for arrow buttons in the time picker*/
  --dp-menu-padding: 6px 8px; /*Menu padding*/
  
  /*Font sizes*/
  --dp-font-size: 1rem; /*Default font-size*/
  --dp-preview-font-size: 0.8rem; /*Font size of the date preview in the action row*/
  --dp-time-font-size: 0.8rem; /*Font size in the time picker*/
  
  /*Transitions*/
  --dp-animation-duration: 0.1s; /*Transition duration*/
  --dp-menu-appear-transition-timing: cubic-bezier(.4, 0, 1, 1); /*Timing on menu appear animation*/
  --dp-transition-timing: ease-out; /*Timing on slide animations*/
}

/* force to change style */
:deep(.dp__theme_light) {
    --dp-background-color: #fff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ffffff;
  --dp-menu-border-color: #ffffff;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}

</style>
