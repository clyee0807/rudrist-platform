<script setup>
const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;
// definePageMeta({
//   middleware: ["admin-auth"]   // testing purpose
//   // or middleware: 'auth'
// })
const addPortfolio = async () => {
  try {
    const result = await api.portfolio.addPortfolio(
      {
        name: "portfolio4",
        position: [
          "BTC/USDT"
        ]
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('add Portfolio id:', result.id)
  } catch(e) {
    console.error(e)
  }
}

const getPortfolio = async () => {
  try {
    const result = await api.portfolio.getPortfolio(
      {
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('get Portfolios', result.data[0].id)
  } catch(e) {
    console.error(e)
  }
}

const modifyPortfolio = async () => {
  try {
    const result = await api.portfolio.modifyPortfolio(
      {
        name: "portfolio3",
        amount: 5100,
        symbol: "BTC"
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('modify Portfolios', result)
  } catch(e) {
    console.error(e)
  }
}

const removePortfolio = async () => {
  try {
    const result = await api.portfolio.removePortfolio(
      {
        name: "portfolio1"
      }, {
        headers: useRequestHeaders(["cookie"])
      }
    );
    console.log('remove Portfolios', result)
  } catch(e) {
    console.error(e)
  }
}

</script>

<template>
  <!-- <div class="flex justify-center">
    <div class="text-xl font-bold">TEST</div>
  </div> -->
  <!-- <BlockPlaceOrderAltCLyee/> -->
  <!-- <BlockPlaceOrder /> -->
  <PositionOrder />
  <!-- <LedgerApproval/>
  <MarkPrice/>
  <CurrencyTrend/> -->
  <!-- <Portfolios/> -->
  <!-- <BlockCalendar /> -->

  <div class="flex flex-row gap-[0.5%]">
    <!-- <BlockCalendar/> -->
    <div class="w-1/3 rounded-lg shadow-lg p-3">
      <p>This is calendar.</p>
    </div>
    <div class="w-2/3">
      <MarkPrice />
    </div>
  </div>
  <div class="flex flex-row gap-[0.5%] items-stretch">
    <div class="w-3/4 flex">
      <CurrencyTrend />
    </div>
    <div class="w-1/4">
      <LedgerApproval />
    </div>
  </div>
  <div class="flex justify-center">
    <button @click="addPortfolio">add Portfolios</button>
  </div>
  <div class="flex justify-center">
    <button @click="getPortfolio">get Portfolios</button>
  </div>
  <div class="flex justify-center">
    <button @click="modifyPortfolio">modify Portfolios</button>
  </div>
  <div class="flex justify-center">
    <button @click="removePortfolio">remove Portfolios</button>
  </div>
  <div class="flex justify-center">
    <button @click="addOrder">send orders</button>
  </div>
  <div class="flex justify-center">
    <button @click="getOrder">get orders</button>
  </div>
</template>

<style scoped></style>
