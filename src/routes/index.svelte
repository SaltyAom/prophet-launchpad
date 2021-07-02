<script lang="ts">
  import Button from '$lib/components/button.svelte'

  import { sounds } from '$lib/data/sound'
</script>

<svelte:head>
  <title>Prophet Launchpad</title>
</svelte:head>

<main id="launchpad" class="py-1 gap-1">
  {#each sounds as sound}
    <Button {sound} />
  {/each}
</main>

<style lang="sass">
	#launchpad
		display: grid
		grid-template-columns: repeat(auto-fill,minmax(150px, 1fr))
		justify-content: center

		@media (min-width: 568px)
			grid-template-columns: repeat(auto-fill,minmax(180px, 1fr))

		@media (min-width: 1024px)
			grid-template-columns: repeat(auto-fill,minmax(210px, 1fr))

</style>
