import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_DNwvyA0O.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_1m1W4OeF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Oops! I Forgot My Website Sitemap (But Now It's Fixed!)",
  "description": "So, guess what? I totally spaced on adding a sitemap to my website. A sitemap helps search engines find all my awesome content, which is kind of important!  This post will show you how I easily set it up with Astro, so you don't make the same mistake I did.",
  "category": "personal",
  "ship_count": 1,
  "pubDate": "June 1 2024",
  "updatedDate": "June 1 2024"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Hello!"
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/ship/seo-win-fixing-my-astro-sitemap.mdx";
const file = "C:/Users/Omar/Documents/sazarsource/src/content/ship/seo-win-fixing-my-astro-sitemap.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Omar/Documents/sazarsource/src/content/ship/seo-win-fixing-my-astro-sitemap.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
