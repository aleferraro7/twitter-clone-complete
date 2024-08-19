'use client';

import Link from 'next/link';

export function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li className='bg-emerald-500 mb-2 p-4 rounded-md text-black flex justify-between'>
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
          </li>
        </Link>
      ))}
    </ul>
  );
}
