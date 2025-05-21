<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();

	function sendHeight() {
		const height = document.body.scrollHeight;
		window.parent.postMessage({ iframeHeight: height }, '*');
	}

	// Send height on mount and whenever the content resizes
	onMount(() => {
		sendHeight();
		console.log('sending height from child');
		const observer = new ResizeObserver(() => sendHeight());
		observer.observe(document.body);
	});
</script>

{@render children()}
