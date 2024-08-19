import TweetCard from '@/app/components/tweet-card';
import { Tweet } from '@/app/types/database';

async function getTweet(id: number) {
  const res = await fetch(`http://localhost:3000/api/tweets/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function TweetPage({ params }) {
  const { id, userId, tweetText, numComments, numLikes, numRetweets } =
    await getTweet(params.id);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <TweetCard
        userId={userId}
        tweetText={tweetText}
        key={id}
        numLikes={numLikes}
        numRetweets={numRetweets}
        numComments={numComments}
      />
    </main>
  );
}
