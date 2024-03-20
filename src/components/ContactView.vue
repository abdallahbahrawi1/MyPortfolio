<template>
  <section class="contact-section">
    <button @click="closeContactForm" class="close-button">×</button>
    <form>
      <h3>GET IN TOUCH</h3>
      <input type="text" id="name" placeholder="Your name" required>
      <input type="email" id="email" placeholder="Email id" required>
      <input type="text" id="phone" placeholder="Phone no." required>
      <textarea id="message" rows="4" placeholder="How can i help you?"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    closeContactForm: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.contact-section {
  position: relative; 
  display: inline-block; 
  width: 30%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,  -50%);
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  border: none;
  color: #333;
}

.close-button:hover {
    color: #555; /* Change color on hover if desired */
}

form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 2vw 4vw;
  width: 100%;
  max-width:  600px;
  border-radius: 10px;
  border-color:black;
}

form h3 {
  color: #555;
  font-weight: 800;
  margin-bottom: 20px;
}

form input, form textarea {
  border: 0;
  margin: 10px 0;
  padding: 20px;
  outline: none;
  background: #f5f5f5;
  font-size: 16x;
}

form button {
  padding: 15px;
  background: #ff5361;
  color: #fff;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 150px;
  margin: 20x auto 0;
  border-radius: 30px;
}

</style>