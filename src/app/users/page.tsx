'use server';
import { Suspense } from 'react';
import { Users } from '../components/users';

async function FetchUsers() {
  const res = await fetch('http://localhost:3000/api/users', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.data;
}

export default async function UsersPage() {
  const users = await FetchUsers();

  return (
    <section>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users users={users} />
      </Suspense>
    </section>
  );
}
