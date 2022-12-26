<script setup lang="ts">
import { ref, watch } from "vue";
import TheChild from "../components/TheChild.vue";
const title = ref("Title");
const text = ref("text");
const array = ref(["a", "b", "c"]);

const meClicked = () => {
  alert("działa");
};
</script>
<template>
  <div class="parent">
    <p>Text2: {{ title }}</p>
    <input v-model="title" />
    <div>{{ text }}</div>
    <p v-for="a in array" :key="a">{{ a }}</p>
  </div>
  <div>
    <TheChild
      :title="title"
      v-model:text="text"
      @onClickMe="meClicked"
      :array="array"
      @onUpdateArr="(arr: string[]) => array = arr"
    />
  </div>
</template>

<style scoped>
.parent {
  margin: 20px;
  border: 1px solid orange;
  width: 300px;
  padding: 5px;
}
</style>
