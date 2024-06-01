<template>
	<div class="portfolio-container w-60 h-96 p-2 rounded-lg shadow-lg">
		<p class="h2-font">Portfolios</p>
		<div 
			class="portfolio" 
			v-for="portfolio in portfolios" :key="portfolio.id"
			@click="handleClick(portfolio.id)"
			@mouseover="handleMouseOver($event)"
			@mouseleave="handleMouseLeave($event)"
		>
			<div class="portfolio-id h3-font pl-[5%]">{{ portfolio.id }}</div>
			<div class="flex flex-row px-[10%] justify-between">
				<div class="portfolio-value text-font pl-[35%]">$</div>
				<div class="flex flex-row justify-end items-center">
					<div class="portfolio-value text-font">{{ portfolio.amount }}&nbsp&nbsp</div>
					<div class="portfolio-currency tag-font">{{ portfolio.currency }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

const portfolios = 
[
	{ id: 'Portfolio B', amount: 322041, currency: 'BTC' },
	{ id: 'Portfolio A', amount: 147724, currency: 'USDT' },
	{ id: 'Portfolio C', amount: 2679, currency: 'TWD' }
];

const handleClick = (id) => {
  console.log('Portfolio clicked:', id);
}

const handleMouseOver = (event) => {
  event.currentTarget.classList.add('hover')
}

const handleMouseLeave = (event) => {
  event.currentTarget.classList.remove('hover')
}

</script>

<style scoped>

.portfolio {
  cursor: pointer; 
	background-image: linear-gradient(to right, rgba(1, 89, 191, 0.2) 0%, rgba(1, 89, 191, 0.2) 100%);
	background-size: 0% 100%;
	background-repeat: no-repeat;
  transition: background-color 0.3s; 
}

.portfolio:hover, .portfolio.hover {
  animation: backgroundSlide 0.5s forwards; 
}

@keyframes backgroundSlide {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
</style>