import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"th\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\" />\n\n    <meta name=\"title\" content=\"ศาสดา launchpad\" />\n    <meta name=\"description\" content=\"สวัสดีครับท่านสมาชิก but it's launchpad\" />\n\n    <meta name=\"og:title\" content=\"ศาสดา launchpad\" />\n    <meta name=\"og:description\" content=\"สวัสดีครับท่านสมาชิก but it's launchpad\" />\n    <meta property=\"og:site_name\" content=\"ศาสดา launchpad\" />\n    <meta\n      property=\"og:image\"\n      content=\"https://prophet-launchpad.netlify.app/assets/image/prophet-launchpad.jpg\"\n    />\n    <meta property=\"og:image:width\" content=\"1920\" />\n    <meta property=\"og:image:height\" content=\"1080\" />\n    <meta property=\"og:locale\" content=\"th_TH\" />\n    <meta property=\"og:type\" content=\"website\" />\n\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"ศาสดา launchpad\" />\n    <meta name=\"twitter:description\" content=\"สวัสดีครับท่านสมาชิก but it's launchpad\" />\n    <meta name=\"twitter:site\" content=\"@saltyAom\" />\n    <meta\n      name=\"twitter:image\"\n      content=\"https://prophet-launchpad.netlify.app/assets/image/prophet-launchpad.jpg\"\n    />\n    <meta name=\"twitter:creator\" content=\"@saltyAom\" />\n\n    <!-- Web App -->\n    <meta name=\"mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"theme-color\" content=\"#212121\" />\n\n    <!-- MS Web App -->\n    <meta name=\"application-name\" content=\"Prophet Launchpad\" />\n    <meta name=\"mssmarttagspreventparsing\" content=\"true\" />\n    <meta name=\"msapplication-window\" content=\"width=800;height=600\" />\n    <meta name=\"msapplication-navbutton-color\" content=\"#212121\" />\n    <meta name=\"msapplication-tooltip\" content=\"Prophet Launchpad\" />\n\n    <!-- Apple Web App -->\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"Prophet Launchpad\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\" />\n    <meta name=\"format-detection\" content=\"telephone=no\" />\n    <meta name=\"apple-touch-fullscreen\" content=\"yes\" />\n\n    <script>\n      document.addEventListener('touchstart', () => null, {\n        passive: true\n      })\n    </script>\n\n    <link id=\"custom-head\" />\n\n    " + head + "\n  </head>\n  <body>\n    <div id=\"svelte\">" + body + "</div>\n  </body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-66e306e5.js",
			css: ["/./_app/assets/start-176cd8c6.css"],
			js: ["/./_app/start-66e306e5.js","/./_app/chunks/vendor-0696c2c9.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-ba0cf510.js","css":["/./_app/assets/pages/__layout.svelte-a034683c.css"],"js":["/./_app/pages/__layout.svelte-ba0cf510.js","/./_app/chunks/vendor-0696c2c9.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-15798eac.js","css":[],"js":["/./_app/error.svelte-15798eac.js","/./_app/chunks/vendor-0696c2c9.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-957053bc.js","css":["/./_app/assets/pages/index.svelte-18d6185d.css"],"js":["/./_app/pages/index.svelte-957053bc.js","/./_app/chunks/vendor-0696c2c9.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}