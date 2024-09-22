/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, e as addAttribute } from '../chunks/astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content__SXJgacc.mjs';
import { $ as $$BaseHead, a as $$Headers, d as clsx, b as $$RootLayout } from '../chunks/root-layout_PKVMpXky.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/index_Bs02yu_N.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const whoami = await getCollection("whoami");
  const whoamiData = whoami[0].data;
  const { title, description } = whoamiData;
  const { Content } = await whoami[0].render();
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "/images/ogimage.png" })}${renderHead()}</head> ${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` <div id="navbar+title" class="flex flex-col w-full gap-6 max-w-xl"> ${renderComponent($$result2, "Header", $$Headers, {})} <h1 class="w-full text-start text-[min(12vw,72px)] font-medium leading-[0.9] tracking-[-2px] sm:tracking-[-4px]"> ${title} </h1> <span class="sr-only"> ${description} </span> <div${addAttribute(clsx(
    "w-full prose prose-lg my-3 prose-p:font-medium dark:prose-invert prose-a:underline prose-a:bg-amber-50 prose-a:decoration-amber-500 items-center justify-center",
    "dark:prose-a:bg-amber-950 dark:prose-a:decoration-amber-400 dark:prose-a:underline",
    "prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium prose-h4:font-medium prose-h5:font-medium prose-h6:font-medium",
    "prose-h1:tracking-tight prose-h2:tracking-tight prose-h3:tracking-tight prose-h4:tracking-tight prose-h5:tracking-tight prose-h6:tracking-tight",
    "prose-ul:font-medium prose-ol:font-medium prose-li:font-medium",
    "prose-ul:space-y-2 prose-ol:space-y-3 prose-li:space-y-3"
  ), "class")}> ${renderComponent($$result2, "Content", Content, {})} </div> </div> ` })} </html>`;
}, "C:/Users/Omar/Documents/sazarsource/src/pages/index.astro", void 0);

const $$file = "C:/Users/Omar/Documents/sazarsource/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
