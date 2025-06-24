<script>
	const tiers = [
		{
			name: 'Basic',
			salesRange: '0-4 sales per quarter',
			headerColor: 'bg-[#32DEA3] text-white',
			valueColor: 'bg-[#BFFCE0]',
			values: ['₦200', '₦50', '₦100', '₦200', '₦200', '7-day trial', 'After 1st sale']
		},
		{
			name: 'Silver',
			salesRange: '5-19 sales per quarter',
			headerColor: 'bg-[#00A5FF] text-white',
			valueColor: 'bg-[#D6F0FF]',
			values: ['₦250', '₦60', '₦110', '₦250', '₦500', '14-day trial', 'Yes']
		},
		{
			name: 'Gold',
			salesRange: '20-49 sales per quarter',
			headerColor: 'bg-[#FFD000] text-white',
			valueColor: 'bg-[#FFF2B2]',
			values: ['₦300', '₦70', '₦130', '₦300', '₦1000', '-', 'Yes']
		},
		{
			name: 'Platinum',
			salesRange: '50+ sales per quarter',
			headerColor: 'bg-[#6E34D7] text-white',
			valueColor: 'bg-[#EAD8FF]',
			values: ['₦350', '₦80', '₦150', '₦350', '₦1500', '-', 'Yes']
		}
	];

	const rows = [
		'SEO Toolkit',
		'Local Toolkit, Social Toolkit',
		'Content Toolkit, AdClarity',
		'Traffic & Market Toolkit',
		'Quarterly content bonus',
		'Special Offer',
		'Account Manager Assigned'
	];
</script>

<!-- Mobile-Responsive Table -->
<div class="p-4 font-sans sm:p-6">
	<div class="overflow-x-auto rounded-2xl border border-gray-200">
		<table
			class="w-full min-w-[650px] border-separate border-spacing-3 text-left text-xs sm:text-sm"
		>
			<thead>
				<tr>
					<th class="bg-white px-2 py-3 text-center"></th>
					{#each tiers as tier}
						<th class={`px-2 py-3 text-center ${tier.headerColor} rounded-xl`}>
							<div class="font-bold">{tier.name}</div>
						</th>
					{/each}
				</tr>
				<tr>
					<th class="bg-white px-2 py-2"></th>
					{#each tiers as tier}
						<th class={`px-2 py-2 text-center font-medium ${tier.valueColor} rounded-xl`}>
							{tier.salesRange}
						</th>
					{/each}
				</tr>
				<tr>
					<th colspan="5" class="py-3">
						<div
							class="mx-auto w-fit rounded-xl border border-[#E1E1E1] bg-[#F4F4F4] px-4 py-2 text-center text-xs font-medium shadow-sm sm:text-sm"
						>
							Partner Commission*
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each rows as row, i}
					<tr>
						<td
							class="max-w-[180px] rounded-xl bg-[#F1F2F4] px-2 py-3 align-top font-medium leading-snug"
						>
							{row}
						</td>
						{#each tiers as tier}
							<td class={`px-2 py-3 text-center ${tier.valueColor} rounded-xl font-medium`}>
								{tier.values[i]}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div
		class="mt-4 rounded-xl border border-gray-200 bg-[#F8F8F8] p-4 text-xs leading-relaxed sm:p-6 sm:text-sm"
	>
		<strong>Incentives:</strong> Extra $200 for each QoQ incremental sales of SEO Toolkit Bonus for your
		first product-related content piece. Special incentives for new affiliates.
	</div>
</div>

<style>
	th,
	td {
		white-space: nowrap;
	}
</style>
