<!-- Admin: Account/chart -->
<template>
    <div class="h-full px-6 py-4 bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font">{{ledgerName}}</p>
        <div class="h-[65%] my-auto">
            <Pie :data="chartData" :options="chartOptions" :style="chartStyles"/>
        </div>
    </div>
</template>
 

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
// import * as chartConfig from './chartConfig';

ChartJS.register(ArcElement, Tooltip, Legend);

const ledgerName = 'Portfolio 0';
const chartData = {
    labels: ['Porfolio A', 'Porfolio B', 'Porfolio C', 'Porfolio D'],
    datasets: [
        {
            backgroundColor: ['#FDDB77', '#F66663', '#8AC79C', '#A0E6F3'],
            data: ['147', '20', '80', '10']
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
}
const chartStyles = computed(() => ({
    position: 'relative',
    height: `${chartHeight.value}px`,
}));
const chartHeight = ref(400); // Default height

  
</script>
  