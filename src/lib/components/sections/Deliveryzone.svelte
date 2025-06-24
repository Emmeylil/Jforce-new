<script lang="ts">
	import type { Zone } from '$lib/interfaces';

	interface Props {
		zones?: Zone[];
	}
	let initial = [
		{
			zone: 'Loading...',
			cities: 'Loading...'
		},
		{
			zone: 'Loading...',
			cities: 'Loading...'
		}
	];
	let { zones: deliveryZones = initial }: Props = $props();
</script>

<div class="container mx-auto p-6">
	<div class="zone-info mb-6">
		<p>
			<strong class="font-bold text-black">Departure from* / Arrival at* </strong>: These rates also
			apply for trips in the reverse direction. <br />
			<q>
				For example: A shipment from Zone 2 to Zone 3 will have the same price and delivery time as
				a shipment from Zone 3 to Zone 2. <br />
				Note: A delivery in D+1 means that the package will be delivered one business day after receipt.
			</q>
		</p>
	</div>

	<div class="zone-titles mb-4">
		<h3 class="text-xl font-semibold">Delivery Zones (Cities & Localities)</h3>
	</div>

	<div class="zone-tariffs">
		<table class="min-w-full table-auto border-collapse">
			<thead>
				<tr>
					<th class="border px-4 py-2">Zones</th>
					<th class="border px-4 py-2">Cities & Localities</th>
				</tr>
			</thead>
			<tbody>
				{#each deliveryZones as { zone, cities }}
					<tr>
						<td class="whitespace-nowrap border px-4 py-2">{zone}</td>
						<td class="border px-4 py-2">{cities}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
