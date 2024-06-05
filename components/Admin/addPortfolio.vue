<template>
    <div class="px-6 py-4 h-full bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font">Add Portfolio</p>  
        <div class="w-full justify-between my-3">
            <ul class="option-bs flex rounded-lg overflow-hidden bg-white-200">
                <li 
                    v-for="(item, idx) in optionsBS" 
                    :class="{active: idx === currentStep}" 
                    class="relative flex items-center justify-center flex-1 h-full font-medium tracking-widest 
                            [&.active]:text-white-100 text-black-100 
                            after:absolute after:left-full after:border-[0.75rem] after:border-solid after:border-transparent
                            before:absolute before:right-full before:border-[0.75rem] before:border-solid before:border-transparent" 
                    @click="onChangeBS(idx, item.color)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="rounded-md shadow-inner h-[60%] px-2 py-3">
            <div v-if="currentStep === 0">
                    <p class="text-font pb-2">Name</p>
                    <input 
                        class="border-2 rounded-md h-16 w-full"
                        type="text" 
                        v-model="portfolioName"
                    >
            </div>
        
            <div v-if="currentStep === 1">
                <p class="text-font pb-2">Available Positions</p>
                <div class="dropdown tag-font relative" @click="toggleDropdown" @blur="closeDropdown" tabindex="0">
					<button class="dropdown-button w-full h-8 flex items-center justify-between pl-2 border rounded-lg ">
                        Account 6512858
						<svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					<div class="dropdown-content w-full flex flex-col absolute z-10 my-1 bg-white-100 shadow-lg rounded-md" v-show="isDropdownOpen">
						<button class="text-left pl-2 py-1">ABC</button>
						<button class="text-left pl-2 py-1">ABC</button>
						<button class="text-left pl-2 py-1">ABC</button>
					</div>
				</div>
            </div>
            
            <div v-if="currentStep === 2" 
                class="flex flex-col gap-2"    
            >
                <p class="text-font pb-2">Confirm</p>
                <button class="text-white-100 px-5 py-1 bg-lime-100 rounded-md">
                    Create Portfolio
                </button>
                <button class="text-gray-200 px-5 py-1 bg-white-300 rounded-md">
                    Cancel
                </button>
            
            </div>
        </div>
    
        <div class="mt-2 navigation-buttons flex flex-row justify-between gap-2">
            <button 
                class="w-1/2 text-white-100 px-5 py-1 bg-lime-100 rounded-md"
                :class="{'bg-white-300 cursor-not-allowed': currentStep === 0, 'bg-lime-100': currentStep !== 0}"
                @click="changeStep(-1)" 
                :disabled="currentStep.value === 0"
            >Previous step</button>
            <button 
                class="w-1/2 text-white-100 px-5 py-1 bg-lime-100 rounded-md"
                :class="{'bg-white-300 cursor-not-allowed': currentStep === steps.length - 1, 'bg-lime-100': currentStep !== steps.length - 1}"
                @click="changeStep(1)" 
                :disabled="currentStep.value === steps.length-1"
            > Next step</button>
        </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
const portfolioName = ref('');

// dropdown from available positions
const isDropdownOpen = ref(false);
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}
const closeDropdown = () => {
    isDropdownOpen.value = false;
}

// Step transfer
const steps = [0, 1, 2];
const currentStep = ref(0);
const optionsBS = ref([
    { name: 'Step 1', color: '--lime-100',}, 
    { name: 'Step 2', color: '--lime-100',},
    { name: 'Step 3', color: '--lime-100',}
]);

const changeStep = (direction) => {
    const nextStep = currentStep.value + direction;
    if (nextStep >= 0 && nextStep <= steps.length - 1) {
        currentStep.value = nextStep;
    }
    console.log(`currtentStep: ${currentStep.value}`);
};

const onChangeBS = (idx, color) => {
    currentStep.value = idx;
    console.log(`currentStep: ${currentStep.value}`);
    document.documentElement.style.setProperty('--active-color', getComputedStyle(document.documentElement).getPropertyValue(color));
}
onMounted(() => {  // default color for step 1
    document.documentElement.style.setProperty('--active-color', getComputedStyle(document.documentElement).getPropertyValue('--lime-100'));
});

</script>
  
<style scoped>
.option-bs li.active {
    background-color: var(--active-color);
}
.option-bs li.active:before {
    border-right-color: var(--active-color);
}
.option-bs li.active:after {
    border-left-color: var(--active-color);
}
.add-portfolio-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
  
</style>
  