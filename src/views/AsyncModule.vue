<template>
  <h1>Async</h1>
</template>

<script lang="ts">
const asyncSetTimeout = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default {
  async setup() {
    await asyncSetTimeout(3000);
  },
};
</script>
