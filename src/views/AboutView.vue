<template>
  <section class="about-section">
    <NavbarView />
    <h2 class="about-titles">About Me</h2>

    <div class="about-me-container">
        
      <div class="about-me">
        <div class="about-me-image">
          <img src="../assets/about-me.jpg" alt="About Me Image">
        </div>
      </div>

      <div class="about-content">
        <div class="about-cards">
            <article class='about-card'>
              <i class="fa fa-trophy about-icon" aria-hidden="true"></i>
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article class='about-card'>
              <i class="fa fa-user about-icon" aria-hidden="true"></i>

              <h5>Clients</h5>
              <small>1+</small>
            </article>

            <article class='about-card'>
              <i class="fa fa-code about-icon" aria-hidden="true"></i>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article> 
        </div>
          <p>
            Hey there, I'm Abdallah Bahrawi, a computer engineer who loves making websites look great and solving tricky problems.
             During my time at Birzet University, I solved more than 80 LeetCode problems!
             Transitioning to Tap (Talent Acceleration Platform), I immersed myself in their backend program, where I learned a ton from some excellent teachers covering both soft and hard skills.
             I've worked on many different projects, but one of my favorites was building a big online store with a team of five using the Scrum methodology.
             We figured out how to build the database schema, write the API documentation, and program an excellent website, delivering it to the client.
             Additionally, we collaborated with a frontend team.
             I'm pretty handy with HTML, CSS, Vue.js, Git, GitHub, Node.js, Sequelize, and databases like MySQL. 
             I'm always trying to learn new things and make cool stuff, so I'm excited to see what kind of projects I can help with next. Let's make something awesome together!
          </p>
          <button @click="openContactForm" class="btn">Contact Me</button>
      </div>
    </div>
  </section>
  <transition name="fade">
    <ContactView v-if="showContactForm" :closeContactForm="closeContactForm" />
  </transition>
</template>

<script lang="ts">
import NavbarView from '../components/NavbarView.vue';
import ContactView from '../components/ContactView.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
  data() {
    return {
      showContactForm: false,
    };
  },
  components: {
    NavbarView,
    ContactView
  },
  methods: {
    openContactForm() {
      this.showContactForm = true;
    },
    closeContactForm() {
      this.showContactForm = false;
    },
  }
});
</script>

<style>

.about-section {
  height: 100vh; 
  width: 100vw;
  background-image: url('../assets/about-cover.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.about-me-container {
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  width: 75%;
  margin: 0 auto;
  margin-top: 100px;
}


.about-titles{
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding-top: 40px;
  line-height: 1em;
  letter-spacing: 0.2em;
  font-size: 30px;
  color: #fff;
  opacity: 0.9;
}

.about-me {
  width: 100%;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
}

.about-me-image {
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: all 400ms ease;
}

.about-me-image:hover {
  transform: rotate(0);
}

.about-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.about-card {
  background: #2c2c6c;
  border: 1ps solid transparent;
  border-bottom: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 400ms ease;
}

.about-card:hover {
  background: transparent;
  border-color: rgba(77, 181, 255, 0.4);
  cursor: default;
}

.about-card {
  color: #4db5ff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.about-card h5 {
  font-size: 0.95rem;
  color: #fff;
}

.about-card small {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
}

.about-content {
  margin-top: 70px
}
.about-content p {
  margin: 2rem 0 2.6rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

