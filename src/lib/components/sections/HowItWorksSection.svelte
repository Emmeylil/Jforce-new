<script>
	function goToJoin() {
		window.open('https://jforce.jumia.com.ng/join', '_blank');
	}
	const steps = [
		{
			text: 'Download the Jumia app on Google play store or the Apple store'
		},
		{
			text: 'Go to your just downloaded app or the Jumia homepage'
		},
		{
			text: 'Log into your Jumia account with your JForce details. Purchases must be made through this account...'
		},
		{
			text: 'Search here for the product you want or check from categories.'
		},
		{
			text: 'Select the item and add to cart. You can increase or decrease the number of items.'
		},
		{
			text: 'Click the cart icon to reveal all items added to cart.'
		},
		{
			text: 'Click proceed to checkout or complete your order on the app'
		},
		{
			text: 'Fill your delivery address or that of your customer.'
		},
		{
			text: 'Choose your delivery method (Door or pickup station)'
		},
		{
			text: 'Choose your desired payment method (COD, JumiaPay, etc.)'
		},
		{
			text: 'Input any JForce voucher code if available'
		},
		{
			text: 'Proceed to summary and complete your order.'
		}
	];
</script>

<section class="bg-white px-6 py-16">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-center text-3xl font-bold text-gray-800">How to place your first order</h2>

		<div class="space-y-6">
			{#each steps as step, index}
				<div class="rounded-md border border-gray-300 bg-gray-50 p-4 shadow-sm">
					<p class="text-base text-gray-700 md:text-lg">
						<strong>Step {index + 1}:</strong>
						{step.text}
					</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 flex justify-center">
			<button
				class="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
				on:click={goToJoin}
			>
				Join JForce Today
			</button>
		</div>
	</div>
</section>
