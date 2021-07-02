import preprocess from 'svelte-preprocess'

import staticAdapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess.sass({
      postcss: true
    }),
    preprocess.typescript({
      postcss: true
    })
  ],

  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: staticAdapter(),
    appDir: '_app',

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
}

export default config
