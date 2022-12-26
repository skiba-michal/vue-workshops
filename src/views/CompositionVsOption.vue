<script setup lang="ts">
import CompositionApiExample from "../components/CompositionApiExample.vue";
import OptionApiExample from "../components/OptionApiExample.vue";
</script>

<template>
  <div class="wrapper">
    <div class="item">
      <CompositionApiExample />
    </div>
    <div>
      <OptionApiExample />
    </div>
  </div>
</template>
<style scoped>

.wrapper {
  width: 100%;
  display: flex;
  gap: 10px;
}
.item {
  width: calc(50% - 10px);
}
</style>
