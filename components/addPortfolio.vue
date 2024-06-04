<template>
    <div class="px-6 py-4 h-full bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font">Add Portfolio</p>  
        <div class="flex flex-row justify-between my-3">
            <button 
                v-for="step in steps" 
                :key="step" 
                :class="{'active-step': currentStep === step}"
                @click="currentStep = step"
                class="tag-font text-white-100 px-5 py-1 bg-lime-100 rounded-md"
            >
                Step {{ step }}
            </button>
        </div>
  
        <div class="rounded-md shadow-inner h-[60%] px-2 py-3">
            <div v-if="currentStep === 1">
                    <p class="text-font pb-2">Name</p>
                    <input 
                        class="border-2 rounded-md h-16 w-full"
                        type="text" 
                        v-model="portfolioName"
                    >
                
            </div>
        
            <div v-if="currentStep === 2">
                <p class="text-font pb-2">Available Positions</p>
                <div class="dropdown tag-font relative" @click="toggleRemoveDropdown" @blur="closeRemoveDropdown" tabindex="0">
					<button class="dropdown-button w-full h-8 flex items-center justify-between pl-2 border rounded-lg ">
                        Account 6512858
						<svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					<div class="dropdown-content w-full flex flex-col absolute z-10 my-1 bg-white-100 shadow-lg rounded-md" v-show="isRemoveDropdownOpen">
						<button class="text-left pl-2 py-1">ABC</button>
						<button class="text-left pl-2 py-1">ABC</button>
						<button class="text-left pl-2 py-1">ABC</button>
					</div>
				</div>
            </div>
            
            <div v-if="currentStep === 3" 
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
    
        <div class="mt-2 navigation-buttons flex flex-row">
        <!-- <div class=""> -->
            <button 
                @click="changeStep(-1)" 
                :disabled="currentStep === 1"
            >Previous step</button>
            <button 
                @click="changeStep(1)" 
                :disabled="currentStep === steps.length"
            > Next step</button>
        </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
  
const steps = [1, 2, 3];
const currentStep = ref(1);
const portfolioName = ref('');

const changeStep = (direction) => {
const nextStep = currentStep.value + direction;
    if (nextStep >= 1 && nextStep <= steps.length) {
        currentStep.value = nextStep;
    }
};
const isAddDropdownOpen = ref(false);
const isRemoveDropdownOpen = ref(false);
const addCurrentCurrency = ref('TWD');
const removeCurrentCurrency = ref('TWD');

const toggleAddDropdown = () => {
    isAddDropdownOpen.value = !isAddDropdownOpen.value;
}
const closeAddDropdown = () => {
    isAddDropdownOpen.value = false;
}

const toggleRemoveDropdown = () => {
    isRemoveDropdownOpen.value = !isRemoveDropdownOpen.value;
}
const closeRemoveDropdown = () => {
    isRemoveDropdownOpen.value = false;
}


</script>
  
<style scoped>
.add-portfolio-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
  
.steps button {
    margin-right: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #eee;
    cursor: pointer;
}
  
.steps .active-step {
    background-color: #20C997;
    color: white;
}
  
.form-group {
    margin-bottom: 20px;
}

.navigation-buttons button {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #20C997;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
}
  
.navigation-buttons button:disabled {
    background-color: #E8E8E8;
    color: #B8B8B8;
    cursor: not-allowed;
    border-radius: 10px;
}
</style>
  