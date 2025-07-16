<script>
	const contacts = [
		{
			name: 'Dorcas Adetona',
			title: 'Operations Manager',
			email: 'dorcas.adetona@jumia.com',
			image:
				'https://lh3.googleusercontent.com/a-/ALV-UjXI70Y79HHYyoEsmAlBu7yrYsdbey-Cb1dyOl1I14ox8GLGbs0=s77-p-k-rw-no'
		},
		{
			name: 'Ezekiel Solomon',
			title: 'Regional Manager Lagos & S/West',
			email: 'ezekiel.solomon@jumia.com',
			image:
				'https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/managers/Ezekiel-solomon-updated.jpg'
		},
		{
			name: 'Stephen Ogwuche',
			title: 'Regional Manager North Central',
			email: 'steven.ogwuche@jumia.com',
			image: 'https://ng.jumia.is/cms/0-1-initiatives/jforce/stephen-ogwuche.png'
		},
		{
			name: 'Daniel Akuma',
			title: 'Regional Manager (S/East & S/South)',
			email: 'akuma.daniel@jumia.com',
			image: 'https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/managers/akuma-daiel.png'
		},
		{
			name: 'Kasimu Mudi',
			title: 'Regional Manager North East & West',
			email: 'kasimu.mudi@jumia.com',
			image: 'https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/jforee.jpg'
		}
		// {
		// 	name: 'Olanrewaju Ganiyu',
		// 	title: 'Head Of Jforce',
		// 	email: 'olanrewaju.ganiyu@jumia.com',
		// 	image: 'https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/1667904380391.jpeg'
		// }
	];
</script>

<div class="contact-container">
	{#each contacts as contact}
		<div class="card">
			<img src={contact.image} alt={contact.name} class="avatar" />
			<h4>{contact.name}</h4>
			<p>{contact.title}</p>
			<p>{contact.email}</p>
			<!-- <div class="icons">
				<span class="icon">📍</span>
				<span class="icon">💬</span>
				<span class="icon">📞</span>
			</div> -->
		</div>
	{/each}
</div>

<div class="footer">
	<p>For more information visit <span class="button">JFORCE</span></p>
	<p>Join us on our <span class="button">FACEBOOK</span> social media handles</p>
</div>

<style>
	.card {
		background: white;
		padding: 1rem;
		border-radius: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		max-width: 220px;
		display: flex;
		flex-direction: column;
		align-items: center; /* centers children horizontally */
		text-align: center; /* fallback for text */
	}

	.contact-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 0.5rem;
		display: block;
	}
	.icons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.icon {
		background-color: #f47c20;
		color: white;
		padding: 0.6rem;
		border-radius: 50%;
		font-size: 1rem;
		cursor: pointer;
	}

	.footer {
		text-align: center;
		margin-top: 2rem;
	}

	.button {
		background-color: #f47c20;
		color: white;
		padding: 0.3rem 0.8rem;
		border-radius: 0.3rem;
		margin: 0 0.5rem;
		cursor: pointer;
		font-weight: bold;
	}
</style>
