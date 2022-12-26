<script setup lang="ts"></script>

<template>
  <div class="wrapper-g">
    <header>
      <nav class="nav-wrapper">
        <RouterLink activeClass="active-link" to="/home">Composition vs Option</RouterLink>
        <RouterLink activeClass="active-link" to="/about">Async</RouterLink>
        <RouterLink exactActiveClass="active-link" :to="{ name: 'NameWhateverYouWant', params: { id: '1' } }">
          Nested & Jsx
        </RouterLink>
        <RouterLink activeClass="active-link" to="/basics">Basics</RouterLink>
        <RouterLink activeClass="active-link" to="/props">PropsyView</RouterLink>
      </nav>
    </header>
    <RouterView v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback><div>Loading...</div></template>
      </suspense>
    </RouterView>
  </div>
</template>

<style scoped>
.nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
  background-color: #3b3b3b;
}
.nav-wrapper a {
  text-decoration: none !important;
  color: #c9c9c9;
  font-size: 18px;
}
.nav-wrapper a.active-link {
  border-bottom: 2px solid #11ff00;
  margin-top: 2px;
}
</style>
