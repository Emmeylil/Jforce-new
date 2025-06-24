<script>
	const shippingDetails = {
		title: 'How to Ship a Package',
		steps: [
			{
				text: '1- Go to the nearest JUMIA pickup point (Over 283 Pick Up Points in more than 107 cities).',
				imgSrc:
					'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/e382dab4d4fc77d2fd33672527101c0f.jpg'
			},
			{
				text: '2- Register your package and pay the shipping fees to the Jumia agent.',
				imgSrc:
					'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/11464c8227f1228467e56b1deda0167f.jpg'
			},
			{
				text: '3- The shipping information is automatically sent via SMS and/or email to both the sender and the recipient.',
				imgSrc:
					'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/50ad4300d47693c56f002eb7ef595905.jpg'
			},
			{
				text: '4- Track the real-time location of your package with our tracking app.',
				imgSrc:
					'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/918b6c920607329c5624510782a4459b.jpg'
			}
		]
	};
</script>

<main class="mx-auto max-w-7xl bg-gray-50 px-4 py-12">
	<h1 class="mb-8 text-center text-3xl font-extrabold text-orange-600 sm:text-4xl">
		{shippingDetails.title}
	</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each shippingDetails.steps as step}
			<div class="flex flex-col items-center space-x-0 sm:flex-row sm:items-start sm:space-x-4">
				<img
					src={step.imgSrc}
					alt={step.text}
					class="h-24 w-24 rounded-xl object-cover shadow-lg sm:h-32 sm:w-32"
				/>
				<div class="text-center text-base font-medium text-gray-800 sm:text-left sm:text-lg">
					{step.text}
				</div>
			</div>
		{/each}
	</div>

	<div class="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-700 sm:text-left sm:text-lg">
		<p class="mb-4">
			A text message will be sent at each step, whether it's for delivery or the return of the
			package.
		</p>
		<p>
			Note:The delivery fee is not refundable. In case of damage or lost, compensation may apply,
			depending on the insurance type subscribed. For more info, check Jumia Delivery website or
			call customer service.
		</p>
	</div>
</main>
