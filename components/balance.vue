
<template>
    <div class="px-6 py-4 mx-auto h-full bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font pb-[2%]">Balance</p>  
        <div class="portfolio w-1/3 px-2 pb-3" v-for="portfolio in portfolios" :key="portfolio.id"	>
            <div>{{ portfolio.name }}</div>
            <div class="flex flex-row justify-end items-center">
                <div class="">${{ portfolio.amount.toLocaleString() }} TWD</div>
                <div @click="handleDelectPortfolio(portfolio.id)">
                    <svg class="ml-2 w-5 h-5 text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </div>
            </div>
		</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Initialize portfolios as a reactive reference
const portfolios = ref([
    { id: 1, name: 'Portfolio A', amount: 147724 },
    { id: 2, name: 'Portfolio B', amount: 322041 },
    { id: 3, name: 'Portfolio C', amount: 2679 },
    { id: 4, name: 'Portfolio B', amount: 322041 },
    { id: 5, name: 'Portfolio B', amount: 1451 },
    { id: 6, name: 'Portfolio B', amount: 3465232 },
    { id: 7, name: 'Portfolio B', amount: 12345 },
]);

const handleDelectPortfolio = (pid) => {
    console.log(`Delete portfolio ${pid}`);
    portfolios.value = portfolios.value.filter(portfolio => portfolio.id !== pid);
}

</script>



<style scoped>
.portfolio {
    /* cursor: pointer;  */
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 8px;
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