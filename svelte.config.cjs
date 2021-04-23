const sveltePreprocess = require('svelte-preprocess')
const netlify = require('@sveltejs/adapter-netlify')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess.sass({
      postcss: true
    }),
    sveltePreprocess.typescript({
      postcss: true
    })
  ],

  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: {
      adapt: netlify
    },

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
}
