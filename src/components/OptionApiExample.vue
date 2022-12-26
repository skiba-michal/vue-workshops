<script lang="ts">

export default {
  // DATA
  data() {
    return {
      message: "Message1",
      message2: "Message2",
      userData: {
        firstName: "Janusz",
        lastName: "Kowalski",
      },
    };
  },

  // COMPUTED

  computed: {
    computedMessage() {
      return this.message + this.message2;
    },
  },

  // WATCH
  watch: {
    message(newMessage, oldMessage) {
      console.log("option - NewMessage", newMessage);
      console.log("option - OldMessage", oldMessage);
    },
    computedMessage(val) {
      console.log("option - messages", val);
    },
    userData: {
      handler(userData) {
        console.log("option - user data", userData);
      },
      deep: false,
      immediate: false,
    },
    "userData.firstName"(val) {
      console.log("option - firstname", val);
    },
  },

  // LIFECYCLE

  mounted() {
    console.log("Mounted");
  },

  // METHODS

  methods: {
    toggleMessage(): void {
      this.message = "Message - toggled";
    },
    toggleNames(): void {
      const first = this.userData.firstName;
      const last = this.userData.lastName;
      this.userData.firstName = last;
      this.userData.lastName = first;
    },
    notify(): void {
      alert("navigation was prevented.");
    },
  },
};
</script>

<template>
  <p class="title">OPTION API</p>
  <h1>{{ message }}</h1>
  <button @click="toggleMessage">Change message1</button>
  <button @click="message += '!'">Append "!"</button>

  <a href="https://wp.pl" @click.prevent="notify"> Link </a>

  <h2><b>Computed message:</b> {{ computedMessage }}</h2>

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
