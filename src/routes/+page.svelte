<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home sweet home" />
</svelte:head>

<div class="flex-container">
	<div class="text-column">
		<h1>Ryan Hill</h1>
		<p>Senior Software Engineer</p>
	</div>
	<div class="text-column">
		<img src="https://img.freepik.com/premium-photo/cool-funny-hipster-cat-with-fashionable-hat-vintage-round-sunglasses-listens-music-white-wireless-headphones-gray-background-creative-idea-concept-animal-style_338491-12636.jpg" alt="Ryan Hill" />
	</div>
</div>

<style>
	.flex-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex: 1;
	}
	.text-column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img {
		border-radius: 50%;
	}
</style>
