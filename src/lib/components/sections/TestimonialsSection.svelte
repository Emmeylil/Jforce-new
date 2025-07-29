<script>
	export let videoId = 'aIbDDBcI2WQ'; // Change to any YouTube video ID
</script>

<section class="video-section">
	<h2 class="section-header">Testimonial of J‑Force Agent</h2>

	<div class="video-wrapper">
		<iframe
			width="800"
			height="450"
			src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			title="Testimonial of J‑Force Agent"
		></iframe>
	</div>
</section>

<style>
	.video-section {
		padding: 2rem 1rem; /* Adds vertical and horizontal padding */
		background: #f9f9f9; /* Light background color for contrast */
		border-radius: 20px; /* Rounded container edges */
		max-width: 85%;
		margin: 2rem auto; /* Center and space from top */
		box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
	}

	.section-header {
		font-size: 1.75rem;
		font-weight: 600;
		color: #333;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.video-wrapper {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
	}

	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
</style>
