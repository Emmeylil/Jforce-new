<script lang="ts">
	import type { PriceList } from '$lib/interfaces';

	interface Props {
		priceList?: PriceList[];
	}

	const initial = [
		{
			departure: 'Loading...',
			arrival: 'Loading...',
			small: '0',
			medium: '0',
			large: '0',
			deliveryTime: 'Loading...'
		},
		{
			departure: 'Loading...',
			arrival: 'Loading...',
			small: '0',
			medium: '0',
			large: '0',
			deliveryTime: 'Loading...'
		},
		{
			departure: 'Loading...',
			arrival: 'Loading...',
			small: '0',
			medium: '0',
			large: '0',
			deliveryTime: 'Loading...'
		}
	];

	let { priceList = initial }: Props = $props();
	let shippingRates = $state(priceList);
</script>

<div class="overflow-x-auto">
	<!-- Pickup in Agency Header -->
	<table class="blueTable mb-4 w-full border-collapse border border-gray-300">
		<tbody>
			<tr>
				<td class="-whitespace">&nbsp;</td>
				<td class="-whitespace">&nbsp;</td>
				<td colspan="4" class="-sub-head text-center">
					<div
						style="background:#ffba00; border:white 0px solid; padding: 10px; font-weight: bold;"
					>
						Pickup in Agency
					</div>
				</td>
			</tr>
		</tbody>
	</table>

	<!-- Shipping Rates Table -->
	<table class="w-full border-collapse border border-gray-300">
		<thead>
			<tr class="bg-gray-200">
				<th class="border border-gray-300 px-4 py-2 text-left">Departure</th>
				<th class="border border-gray-300 px-4 py-2 text-left">Arrival</th>
				<th class="bg-red-500 px-4 py-2 text-left text-white">Small Package<br />40 x 20 x 13cm</th>
				<th class="bg-red-500 px-4 py-2 text-left text-white">Medium Package<br />70 x 30 x 20cm</th
				>
				<th class="bg-red-500 px-4 py-2 text-left text-white"
					>Large Appliances<br />100 x 100 x 62cm</th
				>
				<th class="border border-gray-300 px-4 py-2 text-left">
					Maximum Delivery Time (in business days)
				</th>
			</tr>
		</thead>
		<tbody>
			{#each shippingRates as rate}
				<tr class="even:bg-gray-100">
					<td class="border border-gray-300 px-4 py-2">{rate.departure}</td>
					<td class="border border-gray-300 px-4 py-2">{rate.arrival}</td>
					<td class="border border-gray-300 px-4 py-2">{rate.small}</td>
					<td class="border border-gray-300 px-4 py-2">{rate.medium}</td>
					<td class="border border-gray-300 px-4 py-2">{rate.large}</td>
					<td class="border border-gray-300 px-4 py-2">{rate.deliveryTime}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
