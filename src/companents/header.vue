<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/p.png" alt="Logo" class="logo" />

      <button class="menu-btn" @click="toggleMenu">
        ☰
      </button>

      <nav :class="['nav', { 'nav-open': menuOpen }]">
        <router-link to="/ovqatlar">Ovqatlar</router-link>
        <router-link to="/ichimliklar">Ichimliklar</router-link>
        <router-link to="/shirinliklar">Shirinliklar</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}

.logo {
  height: 40px;
}

.menu-btn {
  font-size: 24px;
  background: none;
  border: none;
  display: none;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.router-link-exact-active {
  color: #2563eb;
}

/* 🔻 RESPONSIVE: telefon ekranlari uchun */
@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }

  .nav {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: center;
    display: none;
    padding: 10px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .nav.nav-open {
    display: flex;
  }
}
</style>
