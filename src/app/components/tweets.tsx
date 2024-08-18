'use client';

import Link from 'next/link';

export function Tweets({ tweets }) {
  return (
    <ul>
      {tweets.map((tweet) => (
        <Link key={tweet.id} href={`/tweets/${tweet.id}`}>
          <li className='bg-emerald-500 mb-2 p-4 rounded-md text-black flex justify-between'>
            <div>
            <h5 className='font-bold'>{tweet.userId}</h5>
            <h5 className='font-bold'>{tweet.tweetText}</h5>
              <div className='flex '>
                <p className='text-black mr-10'>{tweet.numLikes}</p>
                <p className='text-black mr-10'>{tweet.numRetweets}</p>
                <p className='text-black mr-10'>{tweet.numComments}</p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
