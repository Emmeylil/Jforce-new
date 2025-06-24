<script>
    import { fade } from "svelte/transition";
</script>

<section class="bg-[#F5F7FA] py-20 px-6">
    <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >
        <div class="w-full md:w-1/2" in:fade={{ duration: 600 }}>
            <div class="text-center md:text-left">
                <h1
                    class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
                >
                    Become a Jumia Force affiliate and start earning today
                </h1>
                <p class="text-lg md:text-xl text-gray-600 mb-8">
                    Join the Jforce affiliate program and earn up to $200 per
                    sale promoting a world-leading SaaS platform.
                </p>
                <button
                    class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                    Join Now
                </button>
            </div>
        </div>

        <div
            class="w-full md:w-1/2 flex justify-center"
            in:fade={{ duration: 600 }}
        >
            <img
                src="https://www.semrush.com/lp/affiliate-program/img/main-shape.png?1"
                alt="Affiliate Illustration"
                class="max-w-sm md:max-w-md"
                style="width: auto;"
            />
        </div>
    </div>
</section>
