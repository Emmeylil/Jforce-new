<script>
	const steps = [
		{
			number: 1,
			title: 'Sign Up',
			description: 'Complete the simple online application.'
		},
		{
			number: 2,
			title: 'Get Trained',
			description: 'Access our comprehensive training materials.'
		},
		{
			number: 3,
			title: 'Start Selling',
			description: 'Promote Jumia products online and offline.'
		},
		{
			number: 4,
			title: 'Earn Commissions',
			description: 'Receive commission payments up to twice a month.'
		}
	];
</script>

<section class="bg-white px-6 py-16">
	<div class="mx-auto max-w-5xl text-center">
		<h2 class="mb-12 text-3xl font-bold text-gray-800">How Jumia JForce Works</h2>

		<div class="grid gap-8 md:grid-cols-4">
			{#each steps as step}
				<div
					class="flex flex-col items-center rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
				>
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white"
					>
						{step.number}
					</div>
					<h3 class="mb-2 text-xl font-semibold text-gray-800">{step.title}</h3>
					<p class="text-center text-sm text-gray-600">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
