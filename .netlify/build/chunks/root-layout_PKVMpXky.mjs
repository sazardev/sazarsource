import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as createAstro, s as spreadAttributes, f as renderSlot, a as renderComponent, u as unescapeHTML } from './astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import 'clsx';
import { m as menuItems } from './index_Bs02yu_N.mjs';
import { g as getCollection } from './_astro_content__SXJgacc.mjs';
/* empty css                         */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date: dateString } = Astro2.props;
  const date = new Date(dateString);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/misc/formatted-date.astro", void 0);

function clsx(...args) {
  return args.filter(Boolean).join(" ");
}
function getCategoryColor(category) {
  switch (category) {
    case "ai":
      return "bg-yellow-300";
    case "design":
      return "bg-lime-300";
    case "product":
      return "bg-green-300";
    case "engineering":
      return "bg-purple-300";
    case "productivity":
      return "bg-pink-300";
    case "learning":
      return "bg-blue-300";
    case "opensource":
      return "bg-orange-400";
    default:
      return "bg-gray-300";
  }
}
function formatYearMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}-${month.toString().padStart(2, "0")}`;
}
async function groupShipsByYearMonthSorted() {
  const ships = await getCollection("ship");
  const groupedShips = ships.reduce(
    (accumulator, ship) => {
      const yearMonthKey = formatYearMonth(ship.data.pubDate);
      accumulator[yearMonthKey] = accumulator[yearMonthKey] || [];
      accumulator[yearMonthKey].push(ship);
      return accumulator;
    },
    {}
  );
  const sortedYearMonthKeys = Object.keys(groupedShips).sort(
    (a, b) => b.localeCompare(a)
  );
  const sortedGroupedShips = sortedYearMonthKeys.reduce(
    (sortedAccumulator, key) => {
      sortedAccumulator[key] = groupedShips[key];
      return sortedAccumulator;
    },
    {}
  );
  return sortedGroupedShips;
}

const $$Astro$2 = createAstro();
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === `/${subpath?.[0]}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(clsx(
    "hover:text-black dark:hover:text-white",
    "hover:font-medium hover:cursor-pointer transition-all duration-100 ease-in-out",
    isActive ? "text-black dark:text-white font-medium" : "text-gray-400 dark:text-gray-500 font-medium"
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/misc/header-link.astro", void 0);

const $$Headers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-3 font-medium text-black items-start w-full"> ${menuItems.map((item) => renderTemplate`${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": item.url }, { "default": ($$result2) => renderTemplate`${item.label}` })}`)} </div>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/misc/headers.astro", void 0);

const $$Astro$1 = createAstro();
const $$Dots = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Dots;
  const { ship_count } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(clsx(
    "size-9 mb-4",
    ship_count === 0 && "bg-gray-100",
    ship_count <= 2 && "bg-[#D2FF50]",
    ship_count > 2 && ship_count <= 4 && "bg-[#A0B91E]",
    ship_count > 4 && "bg-[#647D00]"
  ), "class")}></div>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/misc/dots.astro", void 0);

const $$ScrollProgress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="progress-container" data-astro-cid-rg2ieard> <svg id="progress-circle" viewBox="0 0 36 36" data-astro-cid-rg2ieard> <path class="circle-bg" d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" data-astro-cid-rg2ieard></path> <path id="progress" class="circle" stroke-dasharray="0, 100" d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" data-astro-cid-rg2ieard></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up" data-astro-cid-rg2ieard> <path d="m18 15-6-6-6 6" data-astro-cid-rg2ieard></path> </svg> </div>  `;
}, "C:/Users/Omar/Documents/sazarsource/src/components/misc/scroll-progress.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/images/ogimage.png" } = Astro2.props;
  return renderTemplate`<!-- umami analytics -->${renderTemplate(_a || (_a = __template(["<script async defer", "", "></script>"])), addAttribute(undefined                                , "data-website-id"), addAttribute(undefined                                  , "src"))}<!-- clarity analytics -->${renderTemplate(_b || (_b = __template(['<script type="text/javascript">', "</script>"])), unescapeHTML(`
			(function(c,l,a,r,i,t,y){
				c[a] = c[a] || function() { (c[a].q=c[a].q||[]).push(arguments) };
				t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/" + i;
				y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
			})(window, document, "clarity", "script", "${undefined                                   }");
		`))}<link rel="sitemap" href="/sitemap-index.xml"><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!-- Favicons --><link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/Omar/Documents/sazarsource/src/components/seo/base-head.astro", void 0);

const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="root-container" class="w-full flex flex-col h-screen items-center justify-start my-6 p-4 antialiased max-w-xl mx-auto"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Omar/Documents/sazarsource/src/layouts/root-layout.astro", void 0);

export { $$BaseHead as $, $$Headers as a, $$RootLayout as b, $$FormattedDate as c, clsx as d, $$ScrollProgress as e, getCategoryColor as f, groupShipsByYearMonthSorted as g, $$Dots as h };
