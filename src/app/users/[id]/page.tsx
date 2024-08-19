async function getUser(id: number) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <div className='bg-emerald-500 p-4 rounded-md mt-10'>
        <img src={user.avatarUrl} className='rounded-full w-200' />
        <h3 className='text-3xl font-bold flex mr-4'>
          <p className='mr-10'>{user.id}</p>
          <p className='mr-10'>{user.username}</p>
          <p className='mr-10'>{user.email}</p>
        </h3>
        <h3 className='text-xl font-bold flex mr-4'>
          <p>followers: {user.followers}</p>
          <p>following: {user.following}</p>
        </h3>
      </div>
    </div>
  );
}
