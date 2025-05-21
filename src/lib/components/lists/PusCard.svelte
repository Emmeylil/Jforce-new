<script lang="ts">
	import type { PickupStation } from '$lib/interfaces';
	import { Button } from '$lib/components/ui/button';
	import MapPin from 'lucide-svelte/icons/map-pin';
	import { pusStore } from '$lib/stores';

	interface Props {
		pus: PickupStation;
	}

	let { pus }: Props = $props();

	const { name } = pus;

	const onclick = () => {
		$pusStore = pus;
	};
</script>

<Button class="items-center justify-between" {onclick}>
	<span>{name}</span>
	<MapPin class="size-4" />
</Button>
