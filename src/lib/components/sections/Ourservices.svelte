<script>
	// Data for services
	const services = [
		{
			title: 'Express Delivery',
			description: 'Fast and reliable delivery within Lagos and other major cities.',
			image:
				'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/473e7e8ecb5df59dcae18b74b8103e63.jpg'
		},
		{
			title: 'Nationwide Shipping',
			description: 'We offer nationwide shipping, delivering parcels across all states.',
			image:
				'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/573c3c452f6534341a6990e9d3d12827.jpg'
		},
		{
			title: 'Reliable Fleet',
			description:
				'One of the largest delivery fleets in Nigeria to ensure quick and safe delivery.',
			image:
				'https://ng.jumia.is/cms/external/cms/sp-jumia-delivery_en_NG/0667cbdbc0c063b866aa2f2d34e06437.jpg'
		}
	];
</script>

<div class="mb-6 text-center">
	<h2 class="text-3xl font-bold text-orange-600">Our Services</h2>
</div>

<div class="flex items-center justify-center space-x-4 overflow-x-auto p-5">
	{#each services as service}
		<div class="w-64 flex-none rounded-lg bg-gray-100 p-4 text-center shadow-md">
			<img src={service.image} alt={service.title} class="h-40 w-full rounded-lg object-cover" />
			<h3 class="mt-3 text-xl font-bold text-orange-600">{service.title}</h3>
			<p class="mt-2 text-gray-700">{service.description}</p>
		</div>
	{/each}
</div>
