<script lang="ts">
	import Search from '$lib/components/widgets/Search.svelte';
	import type { PickupStation } from '$lib/interfaces';
	import pkg from 'lodash';
	import { writable, type Writable } from 'svelte/store';
	import { Separator } from '$lib/components/ui/separator';
	import ProductInfiniteList from './PusInfiniteList.svelte';
	import { ScrollArea } from '../ui/scroll-area';
	const { debounce } = pkg;

	interface Props {
		items: PickupStation[];
	}

	let { items }: Props = $props();

	const filterKeys: (keyof PickupStation)[] = [
		'Payment',
		'address',
		'initiative',
		'landmark',
		'latitude',
		'longitude',
		'name',
		'map',
		'number',
		'state',
		'week',
		'weekend'
	];

	let itemsStore: Writable<PickupStation[]> = writable(items);

	let searchTerm = $state('');

	const filterItems = debounce((term: string) => {
		const lowercasedTerm = term.toLowerCase();
		$itemsStore = items.filter((item) =>
			filterKeys.some((key) => {
				const childValue = item[key];
				return childValue?.toString().toLowerCase().includes(lowercasedTerm);
			})
		);
	}, 300);

	const onkeyup = (evt: Event) => {
		const term = (evt.target as HTMLInputElement).value;
		searchTerm = term;
		filterItems(term);
	};
</script>

<div class="space-y-4">
	<Search inputValue={searchTerm} {onkeyup} />
	<Separator />
	<ScrollArea orientation="vertical" class="h-[500px]">
		{#key $itemsStore.length}
			<ProductInfiniteList list={$itemsStore} class="grid gap-4" />
		{/key}
	</ScrollArea>
</div>
