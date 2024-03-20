<template>
  <div class="home">
    <NavbarView />
    <Header />
  </div>
</template>

<script lang="ts">
import NavbarView from '../components/NavbarView.vue';
import Header from "../components/HeaderView.vue"
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarView,
    Header
  },
});
</script>

<style>
.home {
  height: 100vh; 
  width: 100vw;
  background-image: url('../assets/blue.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

header {
  margin-top: 200px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h5 {
  font-size: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

h1,
h2,
h3,
h4,
h5 {
    font-weight: 500;
}
</style>
