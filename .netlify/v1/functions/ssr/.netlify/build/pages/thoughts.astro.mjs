/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import { a as $$ThoughtsItem } from '../chunks/ships-item_BG7OzXRf.mjs';
import { $ as $$BaseHead, a as $$Headers, b as $$RootLayout } from '../chunks/root-layout_PKVMpXky.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/index_Bs02yu_N.mjs';
import { g as getCollection } from '../chunks/_astro_content__SXJgacc.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const thoughts = (await getCollection("thought")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "/images/ogimage.png" })}${renderHead()}</head> ${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` <div id="navbar+title" class="flex flex-col w-full gap-6 max-w-xl"> ${renderComponent($$result2, "Header", $$Headers, {})} <h1 class="w-full text-7xl font-medium tracking-tight mb-6">thoughts</h1> ${thoughts.map((thought, i) => renderTemplate`${renderComponent($$result2, "ThoughtsItem", $$ThoughtsItem, { "category": thought.data.category, "content": thought.data.description, "pubDate": thought.data.pubDate, "slug": thought.slug, "index": i })}`)} </div> ` })} </html>`;
}, "C:/Users/Omar/Documents/sazarsource/src/pages/thoughts/index.astro", void 0);

const $$file = "C:/Users/Omar/Documents/sazarsource/src/pages/thoughts/index.astro";
const $$url = "/thoughts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
