<script lang="ts">
	function goToJoin() {
		window.open('https://jforce.jumia.com.ng/join', '_blank');
	}

	const segmentOptions = [
		'Lagos, Abuja, Ibadan (B2C)',
		'Other Cities (B2C)',
		'All Cities (B2B)'
	] as const; // makes a tuple of string literals

	type Segment = (typeof segmentOptions)[number];

	let activeSegment: Segment = segmentOptions[0];

	const levelColors = {
		Probation: 'bg-[#FFE4DC]',
		Bronze: 'bg-[#F5DEB3]',
		Silver: 'bg-[#F0F0F0]',
		Gold: 'bg-[#FFF8DC]',
		Captain: 'bg-[#E0FFE0]'
	} as const;

	type Tier = keyof typeof levelColors;

	type TierRow = {
		name: Tier;
		salesRange: string;
		values: string[];
	};

	const commissionData: Record<Segment, TierRow[]> = {
		'Lagos, Abuja, Ibadan (B2C)': [
			{ name: 'Probation', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{ name: 'Bronze', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{ name: 'Silver', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{ name: 'Gold', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{
				name: 'Captain',
				salesRange: 'All Buckets + ₦12k bonus',
				values: ['1.33%', '2.00%', '4.00%']
			}
		],
		'Other Cities (B2C)': [
			{ name: 'Probation', salesRange: 'All Buckets', values: ['2.00%', '3.00%', '6.00%'] },
			{ name: 'Bronze', salesRange: 'All Buckets', values: ['2.00%', '3.00%', '6.00%'] },
			{ name: 'Silver', salesRange: 'All Buckets', values: ['2.00%', '3.00%', '6.00%'] },
			{ name: 'Gold', salesRange: 'All Buckets', values: ['2.00%', '3.00%', '6.00%'] },
			{
				name: 'Captain',
				salesRange: 'All Buckets + ₦12k bonus',
				values: ['2.00%', '3.00%', '6.00%']
			}
		],
		'All Cities (B2B)': [
			{ name: 'Probation', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{ name: 'Bronze', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{ name: 'Silver', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{ name: 'Gold', salesRange: 'All Buckets', values: ['1.33%', '2.00%', '4.00%'] },
			{
				name: 'Captain',
				salesRange: 'All Buckets + ₦12k bonus',
				values: ['1.33%', '2.00%', '4.00%']
			}
		]
	};

	const rows = ['Low Bucket', 'Medium Bucket', 'High Bucket'] as const;
</script>

<div class="p-4 font-sans sm:p-6">
	<h2
		class="mb-6 rounded-xl bg-gray-100 py-4 text-center text-2xl font-semibold tracking-wide sm:text-3xl"
	>
		Commission Structure
	</h2>

	<div class="mb-4">
		<label for="segmentSelect" class="mb-2 block text-sm font-medium">Select Segment</label>
		<select
			id="segmentSelect"
			bind:value={activeSegment}
			class="rounded-xl border border-gray-300 px-3 py-2 text-sm"
		>
			{#each segmentOptions as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</div>

	<div class="overflow-x-auto rounded-2xl border border-gray-200">
		<table
			class="w-full min-w-[650px] border-separate border-spacing-3 text-left text-xs sm:text-sm"
		>
			<thead>
				<tr>
					<th class="bg-white px-2 py-3 text-center"></th>
					{#each commissionData[activeSegment] as tier}
						<th class={`rounded-xl px-2 py-3 text-center font-bold ${levelColors[tier.name]}`}>
							{tier.name}
						</th>
					{/each}
				</tr>
				<tr>
					<th class="bg-white px-2 py-2"></th>
					{#each commissionData[activeSegment] as tier}
						<th class={`rounded-xl px-2 py-2 text-center font-medium ${levelColors[tier.name]}`}>
							{tier.salesRange}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as row, i}
					<tr>
						<td class="max-w-[180px] rounded-xl bg-[#F1F2F4] px-2 py-3 font-medium">
							{row}
						</td>
						{#each commissionData[activeSegment] as tier}
							<td class={`rounded-xl px-2 py-3 text-center font-medium ${levelColors[tier.name]}`}>
								{tier.values[i]}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<!-- (rest of layout unchanged) -->
	<div class="mt-12 flex justify-center">
		<button
			class="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
			on:click={goToJoin}
		>
			Join JForce Today
		</button>
	</div>
</div>

<style>
	th,
	td {
		white-space: nowrap;
	}
</style>
