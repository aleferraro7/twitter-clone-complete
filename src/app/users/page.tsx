import { Users } from '../components/users';

async function FetchUsers() {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();
  // console.log(data.data)
  return data.data;
}

export default async function HomePage() {
  const users = await FetchUsers();

  return <Users users={users} />;
}
