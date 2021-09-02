<main>
	<div class="container">
		<h1>Cloudflare Home Assistant Middleware</h1>
		<p>This is the Cloudflare Pages page for the HomeAssistant middleware.</p>
		<p>
			Hopefully this will describe how the middleware works at some point in the future. Right now it's just a demo so I can figure out how/why I'd want to use the Svelte framework on Pages.
		</p>
		<div class="section">
			<h3>Home Assistant Configuration</h3>
			<p>
				Configure a rest sensor. This will just hit the Cloudflare page and pass along a client token.
			</p>
			<p>
				Configure an automation on a schedule of whenever you'd like the IP address to change. This will also affect API requests time-in-queue when your IP address changes.
			</p>			
			<pre style="margin: 0rem 2rem; padding: 10px; background-color: lightgray; width: 70vw; overflow: scroll;">
alias: 'Schedule: Update IP Address Once Per Minute'
description: 'Sends an API request every hour to Cloudflare'
trigger:
- platform: time_pattern 
	minutes: '1'
condition: []
action:
- service: shell_command.shell_rotate_log
	data: &lbrace &rbrace
mode: single
			</pre>

			<p>
				\\ TODO: Insert like an accordion or something here so there can be screenshots of this config process
			</p>
		</div>
		<div class="section">
			<h3>Cloudflare Configuration</h3>
			<p>
				Clone the workers folder from this repo to your own private repo or download the release zip <a href="#">here</a>. You can use wrangler to get everything into the cloud, or you can copy->paste the contents of the main file into the worker file.
			</p>
			<p>
				You need to set a <strong>IPUPDATETOKEN</strong> environmental variable that Home Assistant will send alongside it's requests to confirm its identity before resetting the IP address.
			</p>
			<p>
			You'll also need to set the <strong>CLIENTTOKEN</strong> env variable, which will allow you to authenticate against the cloudflare API.
			</p>
			<p>
				\\ TODO: Insert like an accordion or something here so there can be screenshots of this config process
			</p>
		</div>
	</div>

</main>
<footer>
	<br><br>
</footer>

<style>
	main {
		text-align: center;
	}

	.container {
		padding: 0vw 5vw;
	}

	.section {
		text-align: left;
		margin-top: 3rem;;
		border: 1 px solid gray;
		border-radius: 30px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>