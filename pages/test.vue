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
        icon: "/_nuxt/assets/img/trader/Dashboard.png",
    }, {
        name: "Profolios",
        icon: "/_nuxt/assets/img/trader/Profolios.png",
    }, {
        name: "Transactions",
        icon: "/_nuxt/assets/img/trader/Transactions.png",
    },
]);

const isMarkPricePopupOpen = ref(false);
const isApprovalPopupOpen = ref(false);

const openMarkPricePopup = () => {
    isMarkPricePopupOpen.value = !isMarkPricePopupOpen.value;
}
const closeMarkPricePopup = () => {
    isMarkPricePopupOpen.value = false;
}

const openApprovalPopup = () => {
  isApprovalPopupOpen.value = !isApprovalPopupOpen.value;
}
const closeApprovalPopup = () => {
  isApprovalPopupOpen.value = false;
}


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
          
          <!-- popup test -->
          <button 
            class="bg-lime-100 w-20 rounded-md"
            @click="openMarkPricePopup"
          >
            mrakprice
          </button>
          <div v-if="isMarkPricePopupOpen" 
            class="popup-window">
            <MarkPrice @close="closeMarkPricePopup"/>
            
          </div>

          <button 
            class="bg-fuschi-100 w-20 rounded-md"
            @click="openApprovalPopup"
          >
            approval
          </button>
          <div v-if="isApprovalPopupOpen" 
            class="popup-window">
            <LedgerApproval @click="closeApprovalPopup"/>
          </div>
          <!-- end popup test -->

          <section class="w-full flex flex-row flex-1 gap-2 rounded-tl-3xl bg-white-200 dark:bg-black-100 p-4">
            <div class="w-2/3 h-full">
              <Balance/>
            </div>
            <div class="w-1/3 flex flex-col gap-2 h-full">
              <div class="h-3/5">
                <TotalAmount/>
              </div>
              <div class="h-2/5">
                <AddPortfolio/>
              </div>  
            </div>
          </section>
          <div :class="{'darkWindow': isMarkPricePopupOpen || isApprovalPopupOpen}"></div>
        </main>
      </div>
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
  max-width: 60%;
  max-height: 80%;
}
</style>
