<script lang="ts">
	import { Map, TileLayer, Marker, Popup } from 'sveaflet';
	import { pusStore } from '$lib/stores';
</script>

<div style="width:100%;height:500px;">
	<div class="my-4 text-center">
		<h2 class="text-xl font-bold">Explore our network and pickup points</h2>
	</div>
	{#key $pusStore.name}
		<Map
			options={{
				center: [Number($pusStore.latitude), Number($pusStore.longitude)],
				zoom: 13
			}}
		>
			<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
			<Marker latLng={[Number($pusStore.latitude), Number($pusStore.longitude)]}>
				<Popup
					options={{
						content: $pusStore.name
					}}
				></Popup>
			</Marker>
		</Map>
	{/key}
</div>
