<script>
	import { page } from '$app/stores';
	import rhLogoDark from '$lib/images/rhLogo2.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={rhLogoDark} alt="Ryan Hill Logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li class="{$page.url.pathname === '/' ? 'active' : ''}" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li class="{$page.url.pathname === '/about' ? 'active' : ''}" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li class="{$page.url.pathname === '/experience' ? 'active' : ''}" aria-current={$page.url.pathname === '/experience' ? 'page' : undefined}>
				<a href="/experience">Experience</a>
			</li>
			<li class="{$page.url.pathname === '/projects' ? 'active' : ''}" aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/ryhill86/">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: white;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	/* path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		/* align-items: center; */
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		&.active {
			text-decoration: underline;
		}
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
