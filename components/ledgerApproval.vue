<template>
    <div class="p-6 mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
        <p class="h2-font">Ledger Approval</p>  
        <div v-for="ledger in ledgers" :key="ledger.ledgerId">
			<div class="flex flex-row justify-between items-center rounded-md border-4 px-[0.5%] py-[2%] cursor-pointer" 
                :class=" ledger.ledgerId === selectedLedger ? 'border-lime-100' : 'border-gray-100'"
                @click="handleSelectLedger(ledger.ledgerId)"
            >
				<div class="w-1/2">
					<p class="h2-font text-center">Ledger</p>
				</div>
				<div class="w-1/2 flex flex-row items-center justify-center">
                    <p class="h2-font">$&nbsp;</p>
                    <p class="h2-font text-center">{{ ledger.quantity }}&nbsp;</p>
                    <p class="text-font text-center ">&nbsp;BTC</p>
                </div>	
			</div>
		</div>

        <button class="w-full py-1 bg-white-200 text-gray-200 rounded">
            Disapproval
        </button>
        <button class="w-full py-1 bg-lime-100 text-white-100 rounded">
            Approval
        </button>
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
const emit = defineEmits(['selectLedger']);

const selectedLedger = ref('0');  // not select any ledger
const handleSelectLedger = (id) => {
    if(selectedLedger.value === id) {
        selectedLedger.value = '0';
    }
    else {
        selectedLedger.value = id;
    }
    emit('selectLedger', id);
    // console.log('Ledger clicked:', selectedLedger.value);
}
</script>
    
<style></style>