<script>
	const audience = [
		'Student',
		'Marketing Professionals',
		'Sales Enthusiasts',
		'Entrepreneurs & Business Owners',
		'Social Media Influencers',
		'Anyone passionate about making extra money'
	];
</script>

<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<h2 class="mb-8 text-3xl font-bold text-gray-800">Who can become a Jforce agent?</h2>

		<ul class="mx-auto max-w-md space-y-4 text-left text-lg text-gray-700">
			{#each audience as person}
				<li class="flex items-center">
					<svg
						class="mr-3 h-6 w-6 flex-shrink-0 text-green-500"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					{person}
				</li>
			{/each}
		</ul>
	</div>
</section>
