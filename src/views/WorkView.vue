<template>
  <div class="work">
    <NavbarView />
    <h1>my work</h1>
  </div>
  
</template>

<script lang="ts">
import NavbarView from '../components/NavbarView.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkView',
  components: {
    NavbarView
  },
});
</script>

<style>

.work {
  height: 100vh; 
  width: 100vw;
  background-color: #1a237e; 
  color: #ffffff; 
}
</style>
