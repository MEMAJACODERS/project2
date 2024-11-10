<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100vh;
		background-color: #1a202c;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		transition: transform 0.3s ease;
	}
	
	.sidebar a {
		color: #ffffff;
		text-decoration: none;
		font-weight: 600;
		margin: 1rem 0;
		transition: color 0.3s ease;
	}
	
	.sidebar a:hover {
		color: #003CFF;
	}
	
	.main-content {
		margin-left: 250px;
		padding: 2rem;
		background-color: #f5f5f5;
		min-height: 100vh;
	}
	
	@media (max-width: 768px) {
		.sidebar {
			width: 100%;
			height: auto;
			position: static;
			flex-direction: row;
			justify-content: space-around;
			padding: 1rem 0;
		}
		.main-content {
			margin-left: 0;
			padding: 1rem;
		}
	}
	
	@media (max-width: 480px) {
		.sidebar {
			flex-direction: column;
		}
		.main-content {
			padding: 0.5rem;
		}
	}

</style>
	

<div class="sidebar">
	<a href="./">Home</a>
	<a href="./shop/">Shop</a>
	<a href="./contact/">Contact</a>
</div>

<div class="main-content">
	{@render children()}
</div>
