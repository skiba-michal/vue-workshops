<script setup lang="ts">
import { computed, watch, onMounted, ref } from "vue";

// DATA
const message = ref("Message1");
const message2 = ref("Message2");
const userData = ref({
  firstName: "Janusz",
  lastName: "Kowalski",
});

// COMPUTER

const computedMessage = computed(() => {
  return message.value + message2.value;
});

// WATCH

watch(message, (newMessage, oldMessage) => {
  console.log("composition - NewMessage", newMessage);
  console.log("composition - OldMessage", oldMessage);
});

watch(
  () => message.value + message2.value,
  sum => {
    console.log("composition - messages", sum);
  }
);

watch(
  userData,
  value => {
    console.log("composition - user data", value);
  },
  { deep: true }
);

// LIFECYCLE

onMounted(() => {
  console.log("Mounted");
});

// METHODS

const toggleMessage = () => {
  message.value = "Message - toggled";
};

const notify = () => {
  alert("navigation was prevented.");
};

const toggleNames = () => {
  const first = userData.value.firstName;
  const last = userData.value.lastName;
  userData.value.firstName = last;
  userData.value.lastName = first;
};
</script>

<template>
  <p class="title">COMPOSITION API</p>
  <h1>{{ message }}</h1>

  <button @click="toggleMessage">Change message1</button>
  <button @click="message += '!'">Append "!"</button>

  <a href="https://wp.pl" @click.prevent="notify"> Link </a>

  <p><b>Computed message:</b> {{ computedMessage }}</p>

  <div class="user-data">
    <p>{{ userData.firstName }}</p>
    <p>{{ userData.lastName }}</p>
    <button @click="toggleNames">Toggle name</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 20px;
  margin-bottom: 15px;
}
.title {
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
}

.user-data {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
</style>
