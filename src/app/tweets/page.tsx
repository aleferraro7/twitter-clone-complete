import { Tweets } from '../components/tweets';

async function FetchTweets() {
  const res = await fetch('http://localhost:3000/api/tweets');
  const data = await res.json();
  // console.log(data.data)
  return data.data;
}

export default async function TweetsPage() {
  const tweets = await FetchTweets();

  return <Tweets tweets={tweets} />;
}
