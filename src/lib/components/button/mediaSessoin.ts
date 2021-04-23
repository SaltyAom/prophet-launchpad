/* eslint-disable @typescript-eslint/ban-ts-comment */
export const updateMediaSession = (context: AudioBufferSourceNode): void => {
    if ('mediaSession' in navigator) {
        // @ts-ignore
        navigator.mediaSession.setActionHandler('play', () =>
            context.start()
        )

        // @ts-ignore
        navigator.mediaSession.setActionHandler('pause', () =>
            context.stop()
        )

        // @ts-ignore
        navigator.mediaSession.setActionHandler(
            'seekbackward',
            () => null
        )

        // @ts-ignore
        navigator.mediaSession.setActionHandler(
            'seekforward',
            () => null
        )

        // @ts-ignore
        navigator.mediaSession.setActionHandler(
            'previoustrack',
            () => null
        )

        // @ts-ignore
        navigator.mediaSession.setActionHandler('nexttrack', () => null)
    }
}