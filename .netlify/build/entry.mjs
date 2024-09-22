import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Hm_DyF2b.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/robots.txt.astro.mjs');
const _page2 = () => import('./pages/rss.xml.astro.mjs');
const _page3 = () => import('./pages/ships.astro.mjs');
const _page4 = () => import('./pages/ships/_---slug_.astro.mjs');
const _page5 = () => import('./pages/sitemap-index.xml.astro.mjs');
const _page6 = () => import('./pages/sitemap-main.xml.astro.mjs');
const _page7 = () => import('./pages/sitemap-ships.xml.astro.mjs');
const _page8 = () => import('./pages/sitemap-thoughts.xml.astro.mjs');
const _page9 = () => import('./pages/sitemap-writings.xml.astro.mjs');
const _page10 = () => import('./pages/thoughts.astro.mjs');
const _page11 = () => import('./pages/thoughts/_---slug_.astro.mjs');
const _page12 = () => import('./pages/writings.astro.mjs');
const _page13 = () => import('./pages/writings/_---slug_.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/robots.txt.ts", _page1],
    ["src/pages/rss.xml.js", _page2],
    ["src/pages/ships/index.astro", _page3],
    ["src/pages/ships/[...slug].astro", _page4],
    ["src/pages/sitemap-index.xml.ts", _page5],
    ["src/pages/sitemap-main.xml.ts", _page6],
    ["src/pages/sitemap-ships.xml.ts", _page7],
    ["src/pages/sitemap-thoughts.xml.ts", _page8],
    ["src/pages/sitemap-writings.xml.ts", _page9],
    ["src/pages/thoughts/index.astro", _page10],
    ["src/pages/thoughts/[...slug].astro", _page11],
    ["src/pages/writings/index.astro", _page12],
    ["src/pages/writings/[...slug].astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0fc25cee-ad9a-4397-aa17-58de2bf5c248"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
