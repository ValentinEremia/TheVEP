 
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
 
 

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
 
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: false,
    },
    image: {
      type: "string",
      description: "The banner of the post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

const rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',  
  
  // Set to true to keep the background color
  keepBackground: false,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any, id: any) {
    node.properties.className = ["word"];
  },
};


export default makeSource({
  contentDirPath: "data/blog",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
  // disableImportAliasWarning: true,
  
});