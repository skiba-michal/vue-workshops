<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
  array: string[];
}>();

const emit = defineEmits(["update:text", "onUpdateArr", "onClickMe"]);
const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;

  emit("update:text", value);
};

const updateArray = () => {
  emit("onUpdateArr", [...props.array, `${props.array.length + 1}`]);
};
</script>

<template>
  <div v-once><b>Title v-once</b>{{ title }}</div>
  <div><b>Title:</b> {{ title }}</div>
  <div><b>Text:</b> {{ text }}</div>
  <input type="text" :value="text" @input="updateValue" />
  <button @click="$emit('onClickMe')">click me</button>
  <button @click="updateArray">click me array</button>
</template>

<style scoped></style>
