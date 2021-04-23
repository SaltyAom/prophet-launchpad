<script lang="ts">
  import Button from '$lib/components/button.svelte';

  import { sounds } from '$lib/data/sound';
</script>

<svelte:head>
    <title>Prophet Launchpad</title>
</svelte:head>

<main id="launchpad" class="py-2 gap-1">
  {#each sounds as sound}
    <Button {sound} />
  {/each}
</main>

<style lang="sass">
	#launchpad
		display: grid
		grid-template-columns: repeat(auto-fill, 180px)
		justify-content: center
</style>
