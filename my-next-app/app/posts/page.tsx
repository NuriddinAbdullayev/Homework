interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Ma'lumotlarni yuklab bo'lmadi");
  }

  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Postlar ro'yxati (Server Fetching + TS)</h1>
      <ul style={{ paddingLeft: '20px' }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <h3 style={{ textTransform: 'capitalize', margin: '0 0 5px 0' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}