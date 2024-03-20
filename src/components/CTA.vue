<template>
    <div class='cta'>
        <router-link to="work" class="btn">View Projects</router-link>
        <a :href="CV" download class='btn'>Download CV</a>
        <router-link to="about" class="btn">Let's Talk</router-link>
    </div>
</template>

<script>
import CV from '../assets/AbdallahBahrawiResume.pdf'

export default {
    data() {
        return {
            CV
        }
    }
}
</script>

<style>
.cta {
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
}
.btn {
    width: max-content;
    display: inline-block;
    color:  white;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid  #4db5ff;
    transition: var(--transition);
}

.btn:hover {
    background: white;
    color: var(--color-bg);
    border-color: transparent;
}

</style>