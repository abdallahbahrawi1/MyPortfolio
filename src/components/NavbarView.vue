<template>
  <nav>
    <div class="left">
      <span class="icon" @mouseover="showSecondIcon = true" @mouseleave="showSecondIcon = false">
        <transition name="fade">
          <i class="fas fa-user" v-if="!showSecondIcon"></i>
          <i class="fas fa-smile" v-else></i>
        </transition>
      </span>
      <span class="name">Abdallah Bahrawi</span>
    </div>
    <div class="right">
      <router-link to="/" class="nav-link">Home</router-link> 
      <router-link to="/work" class="nav-link">Work</router-link> 
      <router-link to="/about" class="nav-link">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showSecondIcon: false
    };
  }
}
</script>

<style>

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #3E83FB;
}

.name {
  font-size: 24px;
  font-weight: bold;
  color: white;
  position: fixed;
  margin-left: 35px;
}

.icon {
  margin-right: 10px; 
}

.left {
  display: flex;
  align-items: center;
}

.icon i {
  width: 24px;
  font-size: 24px; 
  color: #007bff;

}

.fade-enter-active {
  transition: opacity 1s ease-in-out; 
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.nav-link {
  margin-right: 40px; 
  color: white; 
  text-decoration: none; 
  font-size: 16px; 
  font-weight: bold; 
  transition: color 0.3s ease; 
}

.nav-link:hover {
  opacity: 0.5; 
}
</style>