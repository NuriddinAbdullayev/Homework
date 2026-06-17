import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, createPost } from "../src/services/postsService";

function App() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const mutation = useMutation({
    mutationFn: createPost,

    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (oldPosts = []) => [
        newPost,
        ...oldPosts,
      ]);
    },
  });

  const handleAddPost = () => {
    mutation.mutate({
      title: "New Post",
      body: "Created with React Query",
      userId: 1,
    });
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error!</h1>;

  return (
    <div>
      <button onClick={handleAddPost}>
        Add Post
      </button>

      {mutation.isPending && <p>Adding...</p>}

      {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;