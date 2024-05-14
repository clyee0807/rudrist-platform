<template>
    <Pie :data="chartData" :options="chartOptions" :style="chartStyles"/>
</template>
  
<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
// import * as chartConfig from './chartConfig';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
    labels: ['micky', 'elsa', 'woody', 'alien'],
    datasets: [
        {
            backgroundColor: ['#FDDB77', '#F66663', '#8AC79C', '#A0E6F3'],
            data: [40, 20, 80, 10]
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
}

const chartHeight = ref(400); // Default height
const chartStyles = computed(() => ({
    height: `${chartHeight.value}px`,
    position: 'relative'
}));

  
</script>
  