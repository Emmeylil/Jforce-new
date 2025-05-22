<script>
	import { fade } from 'svelte/transition';
	function goToJoin() {
		window.open('https://jforce.jumia.com.ng/join', '_blank');
	}
</script>

<section class="bg-[#F5F7FA] px-6 py-20">
	<div class="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row">
		<!-- Left: Text Content -->
		<div class="flex-1 text-center md:text-left" in:fade={{ duration: 600 }}>
			<h1 class="mb-6 text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
				Make Money Online by joining Jforce<br class="hidden md:block" />
				as a Sales Consultant
			</h1>
			<p class="mb-8 text-lg text-gray-600 md:text-xl">
				Set your own working hours, earn commissions online and <br class="hidden md:block" />
				join a growing community of successful sales professionals.
			</p>
			<button
				class="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
				on:click={goToJoin}
			>
				Join JForce Today
			</button>
		</div>

		<!-- Right: Infused Decorative Image -->
		<div class="relative h-auto w-full flex-1" in:fade={{ duration: 600 }}>
			<img
				src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/hero.jpg"
				alt="Decorative Illustration"
				class="mx-auto w-full max-w-lg rounded-lg object-contain"
			/>
		</div>
	</div>
</section>
