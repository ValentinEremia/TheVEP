// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: false
    },
    image: {
      type: "string",
      description: "The banner of the post",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`
    }
  }
}));
var rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
  // Set to true to keep the background color
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ["word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "data/blog",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]]
  }
  // disableImportAliasWarning: true,
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UFJLHH33.mjs.map
