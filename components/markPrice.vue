<template>
	<div class="order-container p-[1%] rounded-lg shadow-lg">
		<p class="h2-font">Mark Price</p>
		<div class="flex items-center shadow-lg rounded-lg p-[1%] my-[2%]">
			<div class="w-1/12">
				<p class="tag-font">#</p>
			</div>
			<div class="w-4/12 text-center">
				<p class="tag-font">Enter Mark Price</p>
			</div>
			<div class="w-7/12 text-left">
				<p class="tag-font">Calendar</p>
			</div>
		</div>
		<div v-for="order in orders" :key="order.orderId">
			<div class="flex flex-row justify-between items-center shadow-lg rounded-lg px-[0.5%] py-[1%] my-[2%]">
				<div class="w-2/12">
					<p class="order-pCur text-font">{{ order.payingCurrency }}</p>
				</div>
				<div class="w-3/12">
					<input class="bg-white-200 rounded-md px-2 w-[80%]" type="text" placeholder="Price">
				</div>	
				<div class="w-3/12 items-center">
					<p class="order-tCur text-font">{{ order.time }}</p>
				</div>	
				<div class="w-4/12 flex flex-row gap-2">
					<button class="bg-lime-100 text-white-100 rounded-md px-2 w-[80%]">
						OK
					</button>
					<button class="bg-white-100 text-lime-100 border-2 border-lime-100 rounded-md px-2 w-[80%]">
						SHOW
					</button>
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

