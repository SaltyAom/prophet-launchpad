<script lang="ts">
  import type { Sound } from '$lib/data/sound'
  import { onMount } from 'svelte'
  import { lazyLoadSound } from './button/lazyload'
  import { updateMediaSession } from './button/mediaSessoin'

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
      console.log('Play')
      console.log(audio)

      if (previousTimeout) clearTimeout(previousTimeout)

      isPlaying = false

      let source = context.createBufferSource()

      source.buffer = audio
      source.connect(context.destination)

      source.start(0)

      updateMediaSession(source)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isPlaying = true
        })
      })

      previousTimeout = setTimeout(() => {
        isPlaying = false

        previousTimeout = null
      }, duration * 1000 + 750 + 32)
    }
  })
</script>

<div class="wrapper">
  <button bind:this={buttonRef} class="button" style="--duration: {duration}s" on:click={playAudio}>
    <h6 class="title">{title}</h6>
    <div class="overlay {isPlaying ? '--playing' : ''} {isLoading ? '--loading' : ''}" />
  </button>
</div>

<style lang="sass">
    .title
        @apply text-white text-2xl font-normal break-words

    .wrapper
        @apply relative aspect-w-1 aspect-h-1

    .button
        @apply absolute border-0 px-4 rounded
        height: 100%
        background-color: #007aff
        outline: none
        -webkit-tap-highlight-color: transparent        

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
