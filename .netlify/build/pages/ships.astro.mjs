/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead } from '../chunks/astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import { $ as $$ShipsItem } from '../chunks/ships-item_BG7OzXRf.mjs';
import { g as groupShipsByYearMonthSorted, $ as $$BaseHead, a as $$Headers, b as $$RootLayout } from '../chunks/root-layout_PKVMpXky.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/index_Bs02yu_N.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const groupedShips = await groupShipsByYearMonthSorted();
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "image": "/images/ogimage.png" })}${renderHead()}</head> ${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` <div id="navbar+title" class="flex flex-col w-full gap-6 max-w-xl"> ${renderComponent($$result2, "Headers", $$Headers, {})} <h1 class="w-full text-7xl font-medium tracking-tight mb-6">ships</h1> <div id="grouped-ships" class="grid grid-cols-10 gap-3"> ${Object.entries(groupedShips).map(([yearMonth, ships]) => {
    const [year, month] = yearMonth.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    const monthName = date.toLocaleString("default", { month: "long" });
    const shipCount = ships.length;
    return renderTemplate`<div class="col-span-10 mb-6"> <div class="flex flex-row items-center justify-between font-medium"> <h2 class="text-lg tracking-tight mb-6"> ${monthName} ${year} </h2> <span class="text-gray-500">${shipCount} ships</span> </div> <div class="grid grid-cols-10 gap-3"> ${ships.map((ship) => renderTemplate`${renderComponent($$result2, "ShipsItem", $$ShipsItem, { "title": ship.data.title, "date": ship.data.pubDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }), "slug": ship.slug, "ship_count": ship.data.ship_count })}`)} </div> </div>`;
  })} </div> </div> ` })} </html>`;
}, "C:/Users/Omar/Documents/sazarsource/src/pages/ships/index.astro", void 0);

const $$file = "C:/Users/Omar/Documents/sazarsource/src/pages/ships/index.astro";
const $$url = "/ships";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
