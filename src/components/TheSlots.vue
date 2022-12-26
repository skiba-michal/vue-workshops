<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: red;
}
.body {
  margin: 10px 0;
  background: blue;
  color: white;
}

.footer {
  background: orange;
  color: white;
}
.wrapper {
  width: 300px;
}
</style>
