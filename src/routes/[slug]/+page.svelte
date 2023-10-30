<!-- src/routes/+page.svelte -->
<script>
  import { Content } from '@builder.io/sdk-svelte';
  
  // Add your Public API Key
  const BUILDER_PUBLIC_API_KEY = "1e155f3690ce4722bb2d46ebbc068a15"; 


	/** @type {import('./$types').PageData} */
	export let data;
	export let content = data.content;
	console.log({data: JSON.stringify(data, null, 4)});
</script>

<main>
  <h1>
    Welcome to your Builder-integrated Svelte app
  </h1>
  <div>Below is your Builder Content:</div>

  {#if data.content}
    <!-- Render builder content with all required props -->
    <Content
      model="page"
      {content}
      apiKey={BUILDER_PUBLIC_API_KEY}
    />
  {:else}
    <p>Loading...</p>
  {/if}
</main>