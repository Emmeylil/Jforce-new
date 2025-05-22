<script>
	const brands = [
		{
			name: 'Xiaomi',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg'
		},
		{
			name: 'Adidas',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg'
		},
		{
			name: 'Century',
			logo: 'https://static.cdnlogo.com/logos/c/36/century.svg'
		},
		{
			name: 'Nivea',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Nivea_logo.svg'
		}
	];
</script>

<section class="bg-white py-12">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-6 text-center text-sm font-semibold text-gray-600">Trusted by leading brands</h2>
		<div
			class="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5"
		>
			{#each brands as brand}
				<img
					src={brand.logo}
					alt={brand.name}
					class="h-12 w-auto grayscale transition duration-300 ease-in-out hover:grayscale-0"
				/>
			{/each}
		</div>
	</div>
</section>
