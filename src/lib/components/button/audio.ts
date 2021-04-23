import type { Sound } from '$lib/data/sound'

type LoadAudio = (sound: Sound) => Promise<AudioBuffer>

export const loadAudio: LoadAudio = (sound) =>
  new Promise((resolve) => {
    const [, src] = sound

    const audioSrc = `/assets/sound/${src}`

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const audioContext = window.AudioContext || window.webkitAudioContext
    const context = new audioContext()

    fetch(audioSrc)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) =>
        context.decodeAudioData(
          arrayBuffer,
          (buffer: AudioBuffer) => {
            resolve(buffer)
          },
          null
        )
      )
  })
