<script>
	function goToJoin() {
		window.open('https://jforce.jumia.com.ng/join', '_blank');
	}
	const features = [
		{
			title: 'Unlimited Earning Potential: ',
			description: 'High commission rates and flexible earning opportunities.',
			icon: '💰'
		},
		{
			title: 'Work From Anywhere:',
			description: 'Set your own hours and work from the comfort of your home or on the go',
			icon: '🔁'
		},
		{
			title: 'Comprehensive Training & Support:',
			description: 'Access to resources and support to help you succeed.',
			icon: '🌍'
		},
		{
			title: 'Sell Trusted Products:',
			description:
				'Represent Africa’s No.1 leading e-commerce brand with a wide range of products.',
			icon: '📈'
		}
	];
</script>

<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="mb-12 text-center text-3xl font-bold text-gray-800">
			Why Join the Affiliate Program?
		</h2>

		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<div class="rounded-lg bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
					<div class="mb-4 text-4xl">{feature.icon}</div>
					<h3 class="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
					<p class="text-sm text-gray-600">{feature.description}</p>
				</div>
			{/each}
		</div>

		<!-- Centered Button with top padding -->
		<div class="pt-12 text-center">
			<button
				class="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
				on:click={goToJoin}
			>
				Join JForce Today
			</button>
		</div>
	</div>
</section>
