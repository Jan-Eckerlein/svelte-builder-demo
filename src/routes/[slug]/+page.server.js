import { fetchOneEntry } from '@builder.io/sdk-svelte';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: "1e155f3690ce4722bb2d46ebbc068a15",
    userAttributes: {
      urlPath: '/test'
    },
  });

	return  {
		content
	}
}