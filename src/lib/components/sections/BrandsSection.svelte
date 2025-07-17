<script>
	const brands = [
		// Original Brands
		{ name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg' },
		{ name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
		{ name: 'Century', logo: 'https://static.cdnlogo.com/logos/c/36/century.svg' },
		{ name: 'Nivea', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Nivea_logo.svg' },
		{ name: 'Skyrun', logo: 'https://skyrunnigeria.com/image/catalog/NEWLOGO.png' },

		// Jumia Partner Brands with updated URLs
		{
			name: 'Samsung',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
		},
		{
			name: 'Unilever',
			logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/250px-Unilever.svg.png'
		}, // Wikimedia Commons :contentReference[oaicite:1]{index=1}
		{
			name: 'Reckitt Benckiser',
			logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Reckitt_logo.svg/419px-Reckitt_logo.svg.png?20231213060844'
		}, // Wikimedia Commons :contentReference[oaicite:1]{index=1}
		// Wikimedia Commons :contentReference[oaicite:1]{index=1}

		{
			name: 'Tecno',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tecno_Mobile_logo.svg/500px-Tecno_Mobile_logo.svg.png'
		}, // Wikimedia Commons :contentReference[oaicite:2]{index=2}
		{
			name: 'Infinix',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Infinix_logo.svg/500px-Infinix_logo.svg.png'
		},
		{
			name: 'Ecoflow',
			logo: 'https://ecoflowstore.pk/cdn/shop/files/03_3x_300x300_2x_5e4410f4-1d58-4d03-b243-6df69325025d_300x300@2x.png?v=1747649857'
		} // Wikimedia Commons :contentReference[oaicite:3]{index=3}
	];
	const allBrands = [...brands, ...brands];
</script>

<section class="overflow-hidden bg-white py-12">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-6 text-center text-sm font-semibold text-gray-600">
			Trusted by Jumia Nigeria & global brands
		</h2>
		<div class="relative overflow-hidden">
			<div class="slider-track animate-slide flex whitespace-nowrap">
				{#each allBrands as brand, i}
					<img
						src={brand.logo}
						alt={brand.name}
						class="mx-8 h-12 w-auto grayscale transition duration-300 ease-in-out hover:grayscale-0"
						key={i}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-slide {
		animation: slide 30s linear infinite;
	}
</style>
