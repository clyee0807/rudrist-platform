<template>
<div class="h-full px-6 py-4 bg-white-100 rounded-xl shadow-md flex flex-col">
    <div class="flex justify-between items-center mb-4 mx-2">
        <p class="h2-font">Ledger Approval</p>
        <button @click="handleClosePopup" class="">X</button>
    </div>
    <div class="flex flex-row gap-3 flex-1">
        <!-- ledgers -->
        <div :class="selectedLedger === '0' ? 'w-full' : 'w-2/3'">
            <div class="min-h-[50%] max-h-[75%] overflow-y-auto">
                <div v-for="ledger in ledgers" :key="ledger.ledgerId">
                    <div class="flex flex-row h-16 justify-between items-center rounded-md border-2 px-[0.5%] py-[3%] my-[2%] cursor-pointer" 
                        :class=" ledger.ledgerId === selectedLedger ? 'border-lime-100' : 'border-gray-100'"
                        @click="handleSelectLedger(ledger.ledgerId)"
                    >
                        <div class="w-1/2">
                            <p class="text-font text-center">Ledger</p>
                        </div>
                        <div class="w-1/2 flex flex-row items-center justify-center">
                            <p class="text-font">$&nbsp;</p>
                            <p class="text-font text-center">{{ ledger.quantity }}&nbsp;</p>
                            <p class="tag-font text-center ">&nbsp;BTC</p>
                        </div>	
                    </div>
                </div>  
            </div>
            <!-- approve buttons -->
            <div class="flex flex-col gap-4" :class="selectedLedger === '0' ? 'mt-[3.5rem]' : 'mt-[6rem]'">
                <button class="w-full py-[0.5%] bg-white-200 text-gray-200 rounded">
                    Disapproval
                </button>
                <button class="w-full py-[0.5%] bg-lime-100 text-white-100 rounded">
                    Approval
                </button>
            </div>
        </div>

        <!-- ledger information -->
        <div v-if="selectedLedger !== '0'" class="w-1/3">
            <AdminLedgerInfo :ledgerId="selectedLedger" />
        </div>  
    </div>
</div>  
</template>
    
<script setup>
const ledgers = [
    {
        ledgerId: '1',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 322041,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
    {
        ledgerId: '2',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 234513,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
    {
        ledgerId: '3',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 958265,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
    {
        ledgerId: '4',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 958265,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
]

import { ref, defineEmits } from 'vue';
const emit = defineEmits(['selectLedger', 'close']);
const handleClosePopup = () => {
 	emit('close');
};


const selectedLedger = ref('0');  // not select any ledger
const handleSelectLedger = (id) => {
    if(selectedLedger.value === id) {
        selectedLedger.value = '0';
    }
    else {
        selectedLedger.value = id;
    }
    emit('selectLedger', id);
    console.log('Ledger clicked:', selectedLedger.value);
}
</script>
    
<style></style>