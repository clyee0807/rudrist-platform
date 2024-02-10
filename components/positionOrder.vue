<template>
	<div class="order-container w-3/4 h-2/3 p-[1%] rounded-lg shadow-lg">
		<div class="flex flex-row justify-between">
			<p class="h2-font">Pending Orders</p>
			<button class="shadow-inner py-2 px-3 rounded-lg">
				<p class="tag-font">Positions</p>
			</button>
		</div>
		<div 
			class="order" 
			v-for="order in orders" :key="order.orderId"
			@mouseover="handleMouseOver($event)"
			@mouseleave="handleMouseLeave($event)"
		>
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
			
		</div>
	</div>
</template>

<script setup>

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
		payingCurrency: "ETH",
		targetCurrency: "BTC",
		exchangeRate: 0.45,
	},
	{
		time: "8:00PM, 15 Nov 2023",
		orderId: "7854-123",
		scheduled: false,
		amount: 1115, // amount of target currency
		payingCurrency: "ETH",
		targetCurrency: "BTC",
		exchangeRate: 0.02,
	}
];

const handleClick = (id) => {
  console.log('Order clicked:', id);
}

const handleMouseOver = (event) => {
  event.currentTarget.classList.add('hover')
}

const handleMouseLeave = (event) => {
  event.currentTarget.classList.remove('hover')
}

</script>

