<template>
	<div class="order-container h-2/3 p-[1%] rounded-lg shadow-lg">
		<div class="flex flex-row justify-between items-center">
			<p v-if="currentView === 'positions'" class="h2-font">Pending Orders</p>
			<p v-else class="h2-font">Positions</p>
			<div class="relative ml-[60%]">
				<div v-if="currentView === 'positions'" class="dropdown tag-font" @click="toggleDropdown" @blur="closeDropdown" tabindex="0">
					<button class="dropdown-button pl-2 inline-flex border rounded-lg items-center">{{ currentCurrency }}
						<svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					<div class="dropdown-content flex flex-col absolute left-0 z-10 my-1 bg-white shadow-lg rounded-md" v-show="isDropdownOpen">
						<button class="text-center px-3">ABC</button>
						<button class="text-center px-3">ABC</button>
						<button class="text-center px-3">ABC</button>
					</div>
				</div>
			</div>
			<button class="shadow-inner py-2 px-3 rounded-lg" @click="switchView">
				<p class="tag-font">{{currentView}}</p>
			</button>
		</div>
		<div v-if="currentView === 'orders'">
			<template v-for="order in orders" :key="order.orderId">
				<div class="flex flex-row justify-between items-center shadow-lg rounded-lg px-[0.5%] py-[1%] my-[2%]">
					<div>
						<p class="order-id tag-font ">#{{ order.orderId }}</p>
						<p class="order-pCur text-font">{{ order.payingCurrency }}</p>
					</div>
					<div>
						<p class="order-scheduled tag-font">{{ order.scheduled }}</p>
						<p class="order-time text-font">{{ order.time }}</p>
					</div>	
					<div class="flex flex-row px-5 h-2/3 items-center bg-gray-100 rounded-lg">
						<p class="order-tCur tag-font">{{ order.targetCurrency }}</p>
						<p class="order-amount tag-font">&nbsp{{ order.amount }}</p>
					</div>	
					<button @click="handleClick(order.orderId)">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 330 330">
							<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606	C255,161.018,253.42,157.202,250.606,154.389z"/>
						</svg>
					</button>
				</div>
			</template>
		</div>
		<div v-else class="px-[2%]">
			<template v-for="order in orders" :key="order.orderId">
				<div class="flex items-center my-2">
					<div class="flex-1 text-left">
						<p class="order-pCur text-font">{{ order.payingCurrency }}</p>
					</div>
					<div class="flex-1 text-right">
						<p class="tag-font">{{ order.amount }}</p>
					</div>
					<div class="flex-none mx-4" style="width: 50px;"> 
						<p class="tag-font text-center">=</p>
					</div>
					<div class="flex-1 text-left">
						<p class="tag-font">{{ currentCurrency }}</p>
					</div>
					<div class="flex-1 text-right">
						<p class="text-font">1234</p>
					</div>
				</div>
				<hr/>
			</template>
			<div class="flex justify-center my-2">
				<div class="flex-1">
					<p>&nbsp</p> 
				</div>
				<div class="flex-1">
					<p>&nbsp</p>
				</div>
				<div class="flex-none mx-4" style="width: 50px;"> 
					<p class="tag-font text-center">=</p>
				</div>
				<div class="flex-1 text-left">
					<p class="text-font">{{ currentCurrency }}</p>
				</div>
				<div class="flex-1 text-right">
					<p class="text-font">23589</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'


const orders = 
[
  {
		time: "2:00PM, 12 Sep 2019",
		orderId: "3415-414",
		scheduled: false,  // ASAP
		amount: 7080, // amount of target currency
		payingCurrency: "ETH",
		targetCurrency: "BTC",
		exchangeRate: 0.55,
	},
	{
		time: "5:00PM, 12 Aug 2023",
		orderId: "4463-562",
		scheduled: true,  // schedule
		amount: 8012, // amount of target currency
		payingCurrency: "BTC",
		targetCurrency: "ETH",
		exchangeRate: 0.45,
	},
	{
		time: "8:00PM, 15 Nov 2023",
		orderId: "7854-123",
		scheduled: false,
		amount: 11111111115, // amount of target currency
		payingCurrency: "ETH",
		targetCurrency: "BTC",
		exchangeRate: 0.02,
	}
];

/* ---------- orders ---------- */
const currentView = ref('orders'); // orders / positions
const switchView = () => {
	currentView.value = currentView.value === 'positions' ? 'orders' : 'positions';
	console.log('Switching view into', currentView.value);
}

const currentCurrency = ref('TWD');
const switchCurrency = () => {
	currentCurrency.value = currentCurrency.value === 'BTC' ? 'ETH' : 'BTC';
	console.log('Switching currency into', currentCurrency.value);
}

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  	isDropdownOpen.value = !isDropdownOpen.value;
}
const closeDropdown = () => {
  	isDropdownOpen.value = false;
}

/* ---------- positions ---------- */
const handleClick = (id) => {
  console.log('Order clicked:', id);
}


</script>

