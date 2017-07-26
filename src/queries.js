export const ARTICLES_QUERY = () => (`{
  articles {
    author
    excerpt
    id
  }
}`);

export const ARTICLE_QUERY = ({ id }) => (`{
  article(id: "${id}") {
    author
    content
    published
    tags
    title
  }
}`);
