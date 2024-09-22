import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent, d as createAstro } from './astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import { d as clsx, f as getCategoryColor, c as $$FormattedDate, h as $$Dots } from './root-layout_PKVMpXky.mjs';

const $$Astro$2 = createAstro();
const $$ThoughtsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThoughtsItem;
  const { category, content, pubDate, index, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/thoughts/${slug}`, "href")}> <article${addAttribute(category, "id")}${addAttribute(clsx(
    "flex flex-col w-full items-center justify-between gap-3 p-6 relative transition-all duration-75 ease-in-out",
    getCategoryColor(category),
    // set the background color based on category
    index % 2 === 0 ? "rotate-1 hover:rotate-0" : "-rotate-1 hover:-rotate-0"
    // rotate the card
  ), "class")}> <span class="absolute top-3 right-3 text-5xl text-gray-700">"</span> <h5 class="text-gray-900 dark:text-gray-900 w-full font-medium text-md">
Sazar on
<span class="underline decoration-wavy">${category}</span> </h5> <h1 class="text-black dark:text-black font-medium w-full sm:text-xl md:text-2xl indent-9"> ${content} </h1> <p class="text-black w-full text-end font-medium text-sm"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} </p> </article> </a>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/cards/thoughts-item.astro", void 0);

const $$Astro$1 = createAstro();
const $$WritingItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WritingItem;
  const { title, date, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/writings/${slug}`, "href")}> <article class="flex flex-row items-center justify-between w-full"> <h3 class="text-base font-medium">${title}</h3> <p class="text-gray-500 font-medium"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date })} </p> </article> </a>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/cards/writing-item.astro", void 0);

const $$Astro = createAstro();
const $$ShipsItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShipsItem;
  const { title, description, slug, ship_count } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/ships/${slug}`, "href")}> <!-- sronly h3 --> <h3 class="sr-only">${title}</h3> <p class="sr-only">${description} ships</p> ${renderComponent($$result, "Dots", $$Dots, { "ship_count": ship_count })} </a>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/cards/ships-item.astro", void 0);

export { $$ShipsItem as $, $$ThoughtsItem as a, $$WritingItem as b };
