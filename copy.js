import copy from 'copy-dir'
import { copyFileSync, readFileSync, writeFileSync } from 'fs'

copy.sync('assets', 'build/assets')
copyFileSync('assets/sw.js', 'build/sw.js')

const index = readFileSync('build/index.html', {
  encoding: 'utf8'
})

writeFileSync(
  'build/index.html',
  index.replace(
    `<link id="custom-head" />`,
    `<link rel="favicon" href="/assets/pwa/icons/prophet@192.jpg" />
<link rel="icon" href="/assets/pwa/icons/prophet@192.jpg" />
<link rel="manifest" href="/assets/pwa/manifest.json" />
<script>
  if ('mediaSession' in navigator)
    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'Prophet Launchpad',
      artist: 'Prophet',
      album: 'Prophet Launchpad',
      artwork: [
        { src: '/assets/pwa/icons/prophet@192.jpg', sizes: '192x192', type: 'image/jpg' },
        { src: '/assets/pwa/icons/prophet@512.jpg', sizes: '512x512', type: 'image/jpg' },
      ]
    })

  if ('serviceWorker' in navigator)
    window.onload = function () {
      navigator.serviceWorker.register('/sw.js')
    }
</script>
<link rel="apple-touch-icon" href="/assets/pwa/icons/prophet@512.jpg" />`
  )
)
