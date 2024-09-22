import { g as getCollection } from '../chunks/_astro_content__SXJgacc.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const posts = await getCollection("writing");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${new URL("/writings", void 0).href}</loc>
        <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>

      ${posts.map(
    (post) => `
        <url>
          <loc>${new URL("/writings/" + post.slug, void 0).href}</loc>
          <lastmod>${post.data.pubDate.toISOString()}</lastmod>
        <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      `
  ).join("")}
    </urlset>
  `;
  return new Response(sitemap, {
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
