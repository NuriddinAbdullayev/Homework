interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>User Profile Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}