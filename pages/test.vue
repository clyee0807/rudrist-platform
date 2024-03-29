<script setup>
</script>

<template>
  <!-- <div class="flex justify-center">
    <div class="text-xl font-bold">TEST</div>
  </div> -->
  <!-- <BlockPlaceOrderAltCLyee/> -->
  <!-- <BlockPlaceOrder /> -->
  <PositionOrder/>
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
      <MarkPrice/>
    </div>
  </div>
  <div class="flex flex-row gap-[0.5%] items-stretch">
    <div class="w-3/4 flex">
      <CurrencyTrend/>
    </div>
    <div class="w-1/4">
      <LedgerApproval/>
    </div>
  </div>
</template>

<style scoped></style>
