import rss from '@astrojs/rss';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/index_Bs02yu_N.mjs';
import { g as getCollection } from '../chunks/_astro_content__SXJgacc.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
	const [posts, thoughts, ships] = await Promise.all([
		getCollection("writing"),
		getCollection("thought"),
		getCollection("ship"),
	]);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...posts.map((post) => ({
				...post.data,
				link: `/writings/${post.slug}/`,
			})),
			...thoughts.map((thought) => ({
				...thought.data,
				link: `/thoughts/${thought.slug}/`,
			})),
			...ships.map((ship) => ({
				...ship.data,
				link: `/ships/${ship.slug}/`,
			})),
		],
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
