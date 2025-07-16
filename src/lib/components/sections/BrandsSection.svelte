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
		},
		{
			name: 'Skyrun',
			logo: 'https://skyrunnigeria.com/image/catalog/NEWLOGO.png'
		}
	];

	// Duplicate for seamless sliding effect
	const allBrands = [...brands, ...brands];
</script>

<section class="overflow-hidden bg-white py-12">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-6 text-center text-sm font-semibold text-gray-600">Trusted by leading brands</h2>
		<div class="relative overflow-hidden">
			<div class="slider-track animate-slide flex whitespace-nowrap">
				{#each allBrands as brand (brand.name + Math.random())}
					<img
						src={brand.logo}
						alt={brand.name}
						class="mx-8 h-12 w-auto grayscale transition duration-300 ease-in-out hover:grayscale-0"
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes slide {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-slide {
		animation: slide 20s linear infinite;
	}
</style>
