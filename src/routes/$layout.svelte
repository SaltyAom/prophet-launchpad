<script>
  import '../app.postcss'
</script>

<svelte:head>
  <meta name="title" content="ศาสดา launchpad" />
  <meta name="description" content="สวัสดีครับท่านสมาชิก but it's launchpad" />

  <meta name="og:title" content="ศาสดา launchpad" />
  <meta name="og:description" content="สวัสดีครับท่านสมาชิก but it's launchpad" />
  <meta property="og:site_name" content="ศาสดา launchpad" />
  <meta property="og:image" content="https://prophet-launchpad.netlify.app/img/prophet-launchpad.jpg" />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1080" />
  <meta property="og:locale" content="th_TH" />
  <meta property="og:type" content="website" />

  <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
  <script>
    if ('mediaSession' in navigator)
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Prophet Launchpad',
        artist: 'Prophet',
        album: 'Prophet',
        artwork: [{ src: 'podcast.jpg' }]
      })
  </script>

  <link href="https://fonts.googleapis.com/css2?family=Kanit&amp;display=swap" rel="stylesheet" />
</svelte:head>

<slot />
