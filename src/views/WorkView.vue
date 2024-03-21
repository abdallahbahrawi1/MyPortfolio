<template>
  <div class="work">
    <NavbarView />
    <ProjectsView />
  </div>
  
</template>

<script lang="ts">
import NavbarView from '../components/Nav/NavbarView.vue';
import ProjectsView from '../components/ProjectsView.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkView',
  components: {
    NavbarView,
    ProjectsView
  },
});
</script>

<style>

.work {
  height: 100vh; 
  width: 100vw;
  background-image: url('../assets/about-cover.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
