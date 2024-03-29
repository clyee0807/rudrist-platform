<template>
    <div class="h-full p-6 mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
        <p class="h2-font">Ledger #{{ledgerId}} Info</p>  
        <div class="">
            <div class="py-5 bg-lime-100 rounded-md">
                <div class="flex flex-row items-center justify-center">
                    <p class="h2-font text-center">$ &nbsp;{{ dummyLedger.quantity }}&nbsp;</p>
                    <p class="text-font text-center ">BTC</p>
                </div>
            </div>
            <div class="my-2 py-2 bg-white-200">
                <p class="my-2 text-font text-center">From</p>
                <div class="border-4 border-lime-100 rounded-md">
                    <p class="h2-font text-center">Portfolio A</p>
                </div>
                <p class="my-2 text-font text-center">To</p>
                <div class="border-4 border-lime-100 rounded-md">
                    <p class="h2-font text-center">Portfolio B</p>
                </div>
            </div>
            <div class="py-2">
                <p class="my-[5%] text-gray-300 text-font text-center">Trader Name</p>
                <p class="text-gray-300 h2-font text-center">Trader1</p>
            </div>
        </div>
        
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
const props = defineProps(["ledgerId"]);
console.log('Ledger Info:', props.ledgerId);


// Call an api to get ledger info by ledgerId
// for now, we will use a dummy data
const dummyLedger = {
    ledgerId: '1',
    quoteCurrency: 'string',
    baseCurrency: 'string',
    quantity: 322041,
    price: 543,
    sendPid: 'ObjectID', 
    receivePid: 'ObjectID', 
};

</script>
    
<style></style>