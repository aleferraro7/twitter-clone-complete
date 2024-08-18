async function getTweet(id: number) {
  const res = await fetch(`http://localhost:3000/api/tweets/${id}`);
  const data = await res.json();
  // console.log(data);
  return data;
}

// export interface User {
//   id: number;
//   username: string;
//   email: string;
//   followers: number;
//   following: number;
// }

export default async function TweetPage({ params }) {
  const tweet = await getTweet(params.id);

  return (
    <div>
      <div className='bg-emerald-500 p-4 rounded-md mt-10'>
        <div>
          <h5 className='font-bold'>{tweet.tweetText}</h5>
          <div className='flex '>
            <p className='text-black mr-10'>{tweet.numLikes}</p>
            <p className='text-black mr-10'>{tweet.numRetweets}</p>
            <p className='text-black mr-10'>{tweet.numComments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
