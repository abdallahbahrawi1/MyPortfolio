<template>
    <header>
      <div class="home-content">
        <div class="home--content">
            <h5>Hello I'm</h5>
            <h1>Abdallah Bahrawi</h1>
            <h5 class="text-light">Fullstack Developer</h5>
            <CTA /> 
          </div>
        </div>
    </header>
</template>

<script>
import CTA from "./CTA.vue"

export default {
  components: {
    CTA
  }
}
</script>

<style scoped>

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home--content {
  text-align: center;
  color: white;
  padding: 20px;
}

.text-light {
  color: rgba(255, 255, 255, 0.6);
}
</style>