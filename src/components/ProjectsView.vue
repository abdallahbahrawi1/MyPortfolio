<template>
	<section class="projects">
		<h5>My Recent Work</h5>
		<div className="container projects-container">
			<article v-for="item in data" :key="item.id" class="portfolio-item">
				<div class="portfolio-item-image">
					<img :src="item.image" :alt="item.title" />
					<h3>{{ item.title }}</h3>
					<p>{{ item.details }}</p>
					<a :href="item.github" class='btn'>Github</a>
				</div>
			</article>
		</div>
	</section>
</template>

<script>
import portfolioData from '../../data/portfolioData'

export default {
	data() {
    return {
      data: portfolioData
    };
  }
}
</script>

<style scoped>
.projects h5 {
	margin-bottom: 2rem;
}

.container {
	width: 75%;
	margin: 0 auto;
}
.projects-container{
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2.5rem;
}

.portfolio-item {
	background: #4169E1;
	padding: 1.3rem;
	border-radius: 2rem;
	border: 1px solid transparent;
	transition: all 400ms ease;
}

.portfolio-item:hover {
	border-color: #2c2c6c;
	background: transparent;
}

.portfolio-item-image {
	border-radius: 1.5rem;
	overflow: hidden;
	height: 600px;
}

.portfolio-item h3 {
	margin: 1.2rem 0 1rem;
}

.portfolio-item p{
	font-size: 15px;
	margin-bottom: 1rem;
	font-weight: bold;
}

img {
	display: block;
	width: 100%;
	max-height: 60%;
	object-fit: cover;
}
</style>