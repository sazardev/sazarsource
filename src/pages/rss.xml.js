import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@data/index";
import { getCollection } from "astro:content";

export async function GET(context) {
  const [posts, thoughts, ships, tales] = await Promise.all([
    getCollection("writing"),
    getCollection("thought"),
    getCollection("ship"),
    getCollection("tale"),
    getCollection("books"),
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
      ...tales.map((tale) => ({
        ...tale.data,
        link: `/tales/${tale.slug}/`,
      })),
      ...books.map((book) => ({
        ...book.data,
        link: `/books/${book.slug}/`,
      })),
    ],
  });
}
