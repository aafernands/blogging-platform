export default function PostDetail({ params }) {
    return (
      <div>
        <h1>Blog Post {params.id}</h1>
        <p>Content of the blog post will go here</p>
      </div>
    );
  }
  