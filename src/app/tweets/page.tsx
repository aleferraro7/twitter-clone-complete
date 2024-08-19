import { TweetsList } from '../components';

async function getTweets() {
  const res = await fetch('http://localhost:3000/api/tweets', {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.data;
}

export default async function TweetsPage() {
  const tweets = await getTweets();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='max-w-[800px] mx-auto border-l border-r border-white/20 min-h-screen'>
        <TweetsList tweets={tweets} />
      </section>
    </main>
  );
}
