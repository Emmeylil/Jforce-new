<script lang="ts">
	import { slugify, removeRingClasses } from '@toolsntuts/utils';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { SearchIcon } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import { Constants } from '$lib/constants';
	let links: string[] = ['Services', 'How does it work?', 'Pickup Point', 'Prices', 'Seller Area'];

	const onsubmit = (evt: SubmitEvent) => {
		evt.preventDefault();
		const form = evt.target as HTMLFormElement;
		const formData = new FormData(form);
		// Create an object from FormData
		const data: Record<string, string> = {};
		formData.forEach((value, key) => {
			data[key] = value as string;
		});

		// Access trackingId from the data object
		const { trackingId } = data;

		window.location.href = `${Constants.TRACKING}${trackingId}`;
	};
</script>

<header class="flex flex-col items-center gap-2 md:flex-row">
	<div class="grid grid-cols-2 gap-2 md:grid-flow-col md:justify-center">
		{#each links as link, i}
			<Button href={`#${slugify(link)}`} class="line-clamp-1">{link}</Button>
		{/each}
	</div>

	<div
		class="ml-auto flex w-full flex-col items-center gap-2 place-self-end self-end md:w-fit md:flex-row"
	>
		<form {onsubmit} class="flex items-center space-x-2">
			<Input
				name="trackingId"
				class={cn('w-full md:w-fit', removeRingClasses())}
				placeholder="Enter your tracking number (e.g., JPD-HJ1-6327299025)"
			/>
			<Button type="submit" size="icon">
				<SearchIcon class="size-4" />
			</Button>
		</form>
	</div>
</header>
