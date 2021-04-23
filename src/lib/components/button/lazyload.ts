import type { Sound } from '$lib/data/sound'

import { loadAudio } from './audio'

type LazyLoadSound = (sound: Sound, buttonRef: HTMLButtonElement) => Promise<AudioBuffer>

export const lazyLoadSound: LazyLoadSound = async (sound, buttonRef) =>
  new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            observer.disconnect()

            const audioBuffer = await loadAudio(sound)

            resolve(audioBuffer)
          }
        })
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(buttonRef)
  })
