import { _ as __astro_tag_component__, F as Fragment, l as createVNode } from './astro/server_DNwvyA0O.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_1m1W4OeF.mjs';
import 'clsx';

const frontmatter = {
  "title": "Unpopular bond in open source",
  "description": " Saw this open source project on GitHub last night. Looked neat, so I cloned it, added a feature, submitted a pull request. Woke up today, some strangers had improved my code! We don't know each other but building together. That's the beauty of open source.",
  "category": "opensource",
  "pubDate": "Jul 08 2022"
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
    children: "Saw this open source project on GitHub last night. Looked neat, so I cloned it, added a feature, submitted a pull request. Woke up today, some strangers had improved my code! We don\u2019t know each other but building together. That\u2019s the beauty of open source."
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
const url = "src/content/thought/unpopular-bond-in-opensource.mdx";
const file = "C:/Users/Omar/Documents/sazarsource/src/content/thought/unpopular-bond-in-opensource.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Omar/Documents/sazarsource/src/content/thought/unpopular-bond-in-opensource.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
