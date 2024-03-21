<template>
<div id="navigation-mobile">
    <ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li> 
        <li><router-link to="/work" class="nav-link">Work</router-link></li> 
        <li><router-link to="/about" class="nav-link">About</router-link></li>
    </ul>
    <div class="header-socials">
        <a href='https://linkedin.com/in/abdallahbahrawi' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/AbdallahBahrawi1' target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>

#navigation-mobile {
    color: #fff; 
    padding: 0 0 0 40px;
}

#navigation-mobile ul {
    list-style: none;
    width: 200px;
    font-size: 2.5rem;
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
 color: #4db5ff; 
}

.header-socials {
    position: absolute;
    /* left: 40px; */
    /* margin-top: 15px; */
    color: #fff;
}

.header-socials i {
    margin: 0 20px 0 0;
    color: #4db5ff;
    font-size: 1rem;
    transition: all 400ms ease;
    cursor: pointer;
}

.header-socials i:hover {
    color: #fff;
}

a {
    color: #4db5ff;;
    transition: all 400ms ease;
}

a:hover {
    color: #fff;
}

</style>