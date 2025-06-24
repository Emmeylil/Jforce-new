<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	import { Input } from '$lib/components/ui/input';
	import { removeRingClasses } from '@toolsntuts/utils';
	import { cn } from '$lib/utils';

	interface Props {
		inputValue: string;
		class?: string;
		showBtn?: boolean;
		onkeyup: (evt: Event) => void;
	}

	let { inputValue = $bindable(), onkeyup }: Props = $props();
</script>

<Input
	class={cn('peer rounded-full pe-9 ps-9', removeRingClasses())}
	placeholder="Search..."
	type="text"
	{onkeyup}
	bind:value={inputValue}
/>
