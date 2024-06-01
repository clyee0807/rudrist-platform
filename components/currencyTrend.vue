<!-- https://tw.tradingview.com/widget/ -->
<template>
    <div class="tradingview-widget-container h-full w-full rounded-lg shadow-lg p-3">
        <div id="tradingview_71878" style="height: calc(100% - 32px); width: 100%;"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const loadTradingViewScript = () => {
    return new Promise((resolve) => {
        if (document.getElementById('tradingview-widget-loading-script')) {
            resolve();
        } 
        else {
            const script = document.createElement('script');
            script.id = 'tradingview-widget-loading-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = () => resolve();
            document.head.appendChild(script);
        }
    });
};

const createWidget = () => {
    if (document.getElementById('tradingview_71878') && 'TradingView' in window) {
        new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "zh_TW",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_71878"
        });
    }
};

onMounted(async () => {
    await loadTradingViewScript();
    createWidget();
});

</script>

<style>

</style>