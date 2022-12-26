<script setup lang="ts">
import { ref, watch } from "vue";
import TheSlot from "../components/TheSlots.vue";

const text1 = ref("message");
const text2 = ref("message");
const text3 = ref("lazy");
const text4 = ref("trim");
const number = ref(1);
const show = ref(false);
const lista = ref(["Janek", "Krzysiu", "Zbyszek"]);
const obj = ref({
  name: "Jan",
  surname: "Kowalski",
  age: 58,
});

watch(text3, t => {
  console.log("lazy value: ", t);
});

watch(text4, t => {
  console.log("trim value: ", t);
});

const onEventChange = (e: Event) => {
  text1.value = (e.target as HTMLInputElement).value;
};

const toggle = () => (show.value = !show.value);

const onEnter = () => {
  alert("enter clicked");
};
</script>
<template>
  <div class="section">
    <p>Text1: {{ text1 }}</p>
    <input :value="text1" @keyup.enter="onEnter" />
  </div>
  <div class="section">
    <p>Text2: {{ text2 }}</p>
    <input v-model="text2" />
  </div>
  <div class="section">
    <p>Text3 lazy: {{ text3 }}</p>
    <input v-model.lazy="text3" />
  </div>
  <div class="section">
    <p>Text4 trim: {{ text4 }}</p>
    <input v-model.trim="text4" />
  </div>
  <div class="section">
    <p>Number: {{ number }}</p>
    <input v-model.number="number" />
  </div>

  <h1>V-show vs v-if v-on</h1>
  <button @click="toggle">Toggle</button>
  <div v-if="show">A kuku v-if</div>
  <div v-show="show">A kuku v-show</div>
  <h1>V-for</h1>
  <div class="section">
    <div v-for="(e, index) in lista" :key="e">{{ e }} {{ index }}</div>
  </div>
  <div class="section">
    <div v-for="(e, key, index) in obj" :key="e">{{ key }}: {{ e }} {{ index }}</div>
  </div>

  <TheSlot>
    <template v-slot:header><div>Header</div></template>
    <div class="test">Body</div>
    <template v-slot:footer>Footer</template>
  </TheSlot>
</template>

<style scoped>
.section {
  margin: 10px;
}
.test {
  padding: 5px;
}
h1 {
  font-size: 20px;
  margin: 20px 0 20px 10px;
}
</style>
