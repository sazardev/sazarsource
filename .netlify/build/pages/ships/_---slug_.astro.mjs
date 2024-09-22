/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as createAstro, e as addAttribute, f as renderSlot } from '../../chunks/astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Headers, c as $$FormattedDate, d as clsx, b as $$RootLayout, e as $$ScrollProgress } from '../../chunks/root-layout_PKVMpXky.mjs';
import { g as getCollection } from '../../chunks/_astro_content__SXJgacc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ShipsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShipsLayout;
  const { title, description, pubDate } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": "/images/ogimage.png" })}${renderHead()}</head> ${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` <div id="navbar+title" class="flex flex-col w-full gap-6 max-w-xl"> ${renderComponent($$result2, "Header", $$Headers, {})} <article id="blog-content" class="w-full flex flex-col gap-6 items-center justify-center"> <h1 class="w-full text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight"> ${title} </h1> <p class="w-full text-start text-gray-500 font-medium"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate.toString() })} </p> <p class="w-full text-start font-medium text-gray-700 dark:text-gray-300 text-lg"> <span class="font-semibold">tl;dr: </span> ${description} </p> <div${addAttribute(clsx(
    "w-full prose prose-lg my-3 prose-p:font-medium dark:prose-invert prose-a:underline  items-center justify-center",
    "dark:prose-a:bg-lime-950 dark:prose-a:decoration-lime-400 dark:prose-a:underline prose-a:bg-lime-50 prose-a:decoration-lime-500",
    "prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium prose-h4:font-medium prose-h5:font-medium prose-h6:font-medium",
    "prose-h1:tracking-tight prose-h2:tracking-tight prose-h3:tracking-tight prose-h4:tracking-tight prose-h5:tracking-tight prose-h6:tracking-tight",
    "prose-ul:font-medium prose-ol:font-medium prose-li:font-medium",
    "prose-ul:space-y-3 prose-ol:space-y-3 prose-li:space-y-3"
  ), "class")}> ${renderSlot($$result2, $$slots["default"])} </div> </article> </div> ` })} </html>`;
}, "C:/Users/Omar/Documents/sazarsource/src/layouts/ships-layout.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("ship");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "ShipsLayout", $$ShipsLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ${renderComponent($$result2, "ScrollProgress", $$ScrollProgress, {})} ` })}`;
}, "C:/Users/Omar/Documents/sazarsource/src/pages/ships/[...slug].astro", void 0);

const $$file = "C:/Users/Omar/Documents/sazarsource/src/pages/ships/[...slug].astro";
const $$url = "/ships/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
