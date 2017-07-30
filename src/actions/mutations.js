export const CREATE_ARTICLE_MUTATION = ({
  author,
  title,
  content,
  tags,
  published,
}) => (`mutation {
  createArticle(newArticle: {
    author: "${author}",
    title: "${title}",
    content: "${content}",
    tags: ["${tags.join('", "')}"],
    published: ${published},
  }) {
    author
    id
    content
    excerpt
    published
    tags
    title
  }
}`);
