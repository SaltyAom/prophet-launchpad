<script lang="ts">
  import type { Sound } from '$lib/data/sound'
  import { onMount } from 'svelte'
  import { lazyLoadSound } from './button/lazyload'

  export let sound: Sound

  let isPlaying = false
  let isLoading = true
  let buttonRef: HTMLButtonElement

  let [title, _, duration] = sound

  let playAudio = () => {}

  let previousTimeout: NodeJS.Timeout

  onMount(async () => {
    let audio = await lazyLoadSound(sound, buttonRef)

    // @ts-ignore
    let audioContext = window.AudioContext || window.webkitAudioContext
    let context: AudioContext = new audioContext()

    isLoading = false

    playAudio = () => {
      if (previousTimeout) clearTimeout(previousTimeout)

      isPlaying = false

      let source = context.createBufferSource()

      source.buffer = audio
      source.connect(context.destination)

      requestAnimationFrame(() => {
        isPlaying = true
        source.start(0)

        previousTimeout = setTimeout(() => {
          isPlaying = false

          previousTimeout = null
        }, duration * 1000 + 750)
      })
    }
  })
</script>

<button bind:this={buttonRef} class="button" style="--duration: {duration}s" on:click={playAudio}>
  <h6 class="title">{title}</h6>
  <div class="overlay {isPlaying ? '--playing' : ''} {isLoading ? '--loading' : ''}" />
</button>

<style lang="sass">
    .title
        @apply text-white text-xl

    .button
        @apply relative border-0 px-4 rounded
        height: 180px
        background-color: #007aff
        outline: none

    .overlay
        @apply top-0 left-0 absolute w-0 h-full
        background-color: rgba(255,255,255,.25)
        transition: width .425s ease-out

    .--loading
        cursor: not-allowed
        width: 100%

    .--playing
        animation: play var(--duration) 0s 1 ease-out, fade-out .75s var(--duration) 1 ease-out

    @keyframes play
        from
            width: 0

        to
            width: 100%

    @keyframes fade-out
        from
            width: 100%
            opacity: 1

        to
            width: 100%
            opacity: 0
</style>
