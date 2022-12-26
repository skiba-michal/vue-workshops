<script setup lang="ts"></script>
<template>
  <div>
    <div class="nav">
      <RouterLink activeClass="active-link" :to="`/user/${$route.params.id}/profile`">Profile</RouterLink>
      <RouterLink activeClass="active-link" :to="`/user/${$route.params.id}/posts`">Posts</RouterLink>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
}
.nav a {
  text-decoration: none !important;
  color: black;
  font-size: 18px;
}

.nav a.active-link {
  border-bottom: 2px solid blue;
}
</style>
