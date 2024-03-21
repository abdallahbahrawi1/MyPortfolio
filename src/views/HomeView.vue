<template>
  <div class="home">
    <NavbarView v-if="!mobileView"/>
    <div class="home-content" :class="{'open': showNav}">
      <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
    <NavigationMobile v-if="showNav" />
    <div class="centered">
      <Header />
    </div>
  </div>
</template>

<script lang="ts">
import NavbarView from '../components/Nav/NavbarView.vue'
import NavigationMobile from '../components/Nav/NavigationMobile.vue'
import Header from "../components/HeaderView.vue"
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarView,
    Header,
    NavigationMobile
  },
  data() {
    return {
      mobileView: false,
      showNav: false
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
      if(!this.mobileView) this.showNav = false;
    }
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView)
  }
});
</script>

<style>

#navigation-icon {
  padding: 40px 0 0 40px;
  margin-right: 10px;
  cursor: pointer; 
  margin-bottom: -50px;
}

#navigation-icon i {
  font-size: 2rem;
  color: white;
}

.home {
  height: 100vh; 
  width: 100vw;
  background-image: url('../assets/blue.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.top-bar {
  display: flex;
  width: 100%;
}

.home-content {
  top: 10px;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.open {
  transform: translateX(150px);
}
</style>
