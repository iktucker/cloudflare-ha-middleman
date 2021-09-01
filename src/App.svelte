<main>
	<h1>Cloudflare Home Assistant Middleware</h1>
	<p>This is the Cloudflare Pages page for the HomeAssistant middleware.</p>
	<p>
		Hopefully this will describe how the middleware works at some point in the future. Right now it's just a demo so I can figure out how/why I'd want to use the Svelte framework on Pages.
	</p>
	<h3>Home Assistant Configuration</h3>
	<p>
		Configure a rest sensor set to hit your cloudflare address as often as you'd like. I'd probably do every minute, but if you're trying to limit requests and traffic then you can make this longer.
	</p>
	<div style="padding: 3rem;">
		<p>
			Blerg
		</p>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>