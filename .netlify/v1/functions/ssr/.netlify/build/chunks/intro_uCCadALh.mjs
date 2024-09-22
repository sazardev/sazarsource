import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DNwvyA0O.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I was feeling frustrated of how to do a great notes about anything, or how to redact my life, I use Notion but it gets me disappointing very quick because its difficult to share what i think with others.</p>\n<p>Here is where you can read (or see) everything about me, my life, my knowledge, my products, and some other random stuff.</p>";

				const frontmatter = {"title":"a source of my life","description":"as.","pubDate":"Sept 1 2024"};
				const file = "C:/Users/Omar/Documents/sazarsource/src/content/whoami/intro.md";
				const url = undefined;
				function rawContent() {
					return "\r\nI was feeling frustrated of how to do a great notes about anything, or how to redact my life, I use Notion but it gets me disappointing very quick because its difficult to share what i think with others.\r\n\r\nHere is where you can read (or see) everything about me, my life, my knowledge, my products, and some other random stuff.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
