export { renderers } from '../renderers.mjs';

const GET = async () => {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${new URL("/sitemap-main.xml", void 0).href}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${new URL("/sitemap-writings.xml", void 0).href}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${new URL("/sitemap-thoughts.xml", void 0).href}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${new URL("/sitemap-ships.xml", void 0).href}</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
  </sitemapindex>`;
  return new Response(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
