<script lang="ts">
	let activeIndex: number | null = null;

	function goToJoin() {
		window.open('https://jforce.jumia.com.ng/join', '_blank');
	}

	const faqs = [
		{
			question: 'What is JForce?',
			answer:
				'Jforce is a nationwide network of sales consultants placing orders on Jumia on behalf of other people (Family, friends, neighbors). On each order, they place them to earn a commission. This could also be a full-time/part-time job for you as our commissions are very rewarding, the more you work, the more you earn!'
		},
		{
			question: 'What do I Sell?',
			answer:
				'Consultants can sell anything that is available on the website www.jumia.com.ng. We presently have well over 10,000,000 products on the website to buy from.'
		},
		{
			question: 'How much can I make?',
			answer:
				'You can make it as low or as high as you want it to be. The sales commission you get monthly is solely based on the sales of products you find on Jumia’s website (Jumia Mall) and Jumia Pay. You can also earn extra money on the sales of other people you have referred to join the JForce program (Indirect Commission).'
		},
		{
			question: 'How do I sell? Do I get the products?',
			answer:
				"Place an order, on behalf of one of your customers, on the Jumia website, using the same account as the one you used to sign up for the JForce program. The products then get delivered to your customer via Jumia's Logistics network."
		},
		{
			question: 'What is Activation?',
			answer:
				'Activation happens with the first order and the opportunity to start earning commission. The moment you register to become a Jforce agent, you are automatically on the Probation Level which means your account is inactive but registered and you would need to shop for your first order to get it activated. Please note that the probation level lasts for a month when you place your first order in that month. For other levels, activation happens as soon as you make your first order in a new month (you need to place at least one order every month to keep your account active for that month).'
		}
	];

	function toggle(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section class="bg-gray-50 px-6 py-16">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-10 text-center text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>

		<div class="space-y-6">
			{#each faqs as faq, index}
				<button
					type="button"
					class="w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-4 text-left transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
					on:click={() => toggle(index)}
				>
					<div class="flex items-center justify-between">
						<h3 class="text-lg font-semibold text-gray-800">{faq.question}</h3>
						<span class="text-xl text-orange-500">{activeIndex === index ? '−' : '+'}</span>
					</div>
					{#if activeIndex === index}
						<p class="mt-3 text-gray-700">{faq.answer}</p>
					{/if}
				</button>
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
