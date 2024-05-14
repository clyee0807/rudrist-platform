<template>
    <div class="px-6 py-4 h-auto bg-white-100 rounded-xl shadow-md flex flex-col">
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
  
        <div v-if="currentStep === 1">
            <div class="shadow-inner h-32 p-2">
                <p class="text-font pb-2">Name</p>
                <input 
                    class="border-2 rounded-md h-16 w-full"
                    type="text" 
                    v-model="portfolioName"
                >
            </div>
        </div>
    
        <!-- Placeholder for other steps -->
        <div v-if="currentStep === 2">
            <div class="shadow-inner h-32 p-2">
                <p class="text-font pb-2">我是step2</p>
                <input 
                    class="border-2 rounded-md h-16 w-full"
                    type="text" 
                    v-model="portfolioName"
                >
            </div>
        </div>
        
        <div v-if="currentStep === 3">
            <div class="shadow-inner h-32 p-2">
                <p class="text-font pb-2">我是step3</p>
                <input 
                    class="border-2 rounded-md h-16 w-full"
                    type="text" 
                    v-model="portfolioName"
                >
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
  