import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "public/static-db/blog/posts");

export function getAllPostLists() {
  const files = fs.readdirSync(postsDirectory); // type: array
  const posts = files
    .filter((filename) => filename.includes(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);

      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data: markdownMetadata } = matter(fileContent);

      markdownMetadata.slug = filename.replace(/\.md$/, "");

      return markdownMetadata;
    });

  return posts;
}

export function getPostBySlug(slug) {
  const filename = `${slug}.md`;
  const filePath = path.join(postsDirectory, filename);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: markdownMetadata, content } = matter(fileContent);

  return {
    metadata: markdownMetadata,
    content: content,
  };
}
