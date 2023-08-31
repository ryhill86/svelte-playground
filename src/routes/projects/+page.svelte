<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Ryan's project portfolio" />
</svelte:head>

<script>
    
</script>

<div class="text-column">
	<h1>Projects</h1>

	<p>
		Here's my work history
	</p>

	<div class="container">
		<div class="project">project</div>
		<div class="project">project</div>
		<div class="project">project</div>
		<div class="project">project</div>
		<div class="project">project</div>
		<div class="project">project</div>
		<div class="project">project</div>
		<div class="project">project</div>
	</div>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
    }
    .project {
        text-align: center;
        color: white;
        background: blue;
        min-height: 300px;
        
    }
</style>