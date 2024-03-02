<template>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
        <p class="h2-font">Place Your Orders</p>
        <!-- orderType -->
        <div class="flex w-full text-font">
            <button 
                :class="orderType === 'buy' ? 'bg-Fuschi-100 text-white' : 'bg-white-200 text-gray-900'"
                class="flex-1 py-1 px-4"
                @click="changeOrderTypetoBuy('buy')">
                Buy
            </button>
            <button 
                :class="orderType === 'sell' ? 'bg-lime-100 text-white' : 'bg-white-200 text-gray-900'"
                class="flex-1 py-1 px-4"
                @click="changeOrderTypetoSell('sell')">
                Sell
            </button>
        </div>
        <!-- Dropdown menu -->
        <div class="w-full">
            <div class="relative">
                <select class="block appearance-none w-full bg-white-200 text-font py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="grid-state">
                    <option>Limit Order</option>
                    <option>Market Order</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- 41233.96 -->
        <div class="flex items-center w-full">
            <input type="text" class="w-full py-1 px-4 border rounded text-center text-font" placeholder="41233.96">
            <button class="text-gray-500 focus:outline-none">
    
            </button>
        </div>
        <!-- Amount -->
        <div class="flex items-center w-full">
            <input type="text" class="w-full py-1 px-4 border rounded text-center text-font" placeholder="Amount (BTC)">
            <button class="text-gray-500 focus:outline-none">
    
            </button>
        </div>
        <!-- Range? -->
        <div class="w-full">
            <input type="range" min="1" max="100" value="50" class="slider">
        </div>
        <!-- Total(BTC) -->
        <div class="w-full">
            <input type="text" class="w-full py-1 px-4 border rounded  text-center text-font" placeholder="Total (BTC)">
        </div>
        <!-- Submit Button -->
        <button :class="orderType === 'sell' ? 'bg-lime-100' : 'bg-Fuschi-100'" class="w-full py-3 text-white font-bold rounded">Submit</button>
        <!-- <button class="w-full py-3 bg-Fuschi-100 text-white font-bold rounded">Submit</button> -->
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    
    const orderType = ref('buy'); // buy / sell
    const changeOrderTypetoBuy = () => {
        orderType.value = 'buy';
        console.log('Switch orderType into :', orderType.value);
    }
    const changeOrderTypetoSell = () => {
        orderType.value = 'sell';
        console.log('Switch orderType into :', orderType.value);
    }
    
    </script>
    
    <style scoped>
    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 2px;
        background: #ddd;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }
    
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #EF5DA8; /* Tailwind pink-500 */
        cursor: pointer;
        border-radius: 50%;
    }
    
    .slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: #EF5DA8;
        cursor: pointer;
        border-radius: 50%;
    }
    </style>
    