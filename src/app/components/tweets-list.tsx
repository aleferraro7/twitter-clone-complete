'use client';

import { Tweet } from '../types/database';
import TweetCard from './tweet-card';

export function TweetsList({ tweets }: { tweets: Tweet[] }) {
  return (
    <>
      {tweets?.map((tweet) => {
        const {
          id,
          tweetText,
          userId,
          numLikes,
          numRetweets,
          numComments,
        } = tweet;

        return (
          <TweetCard
            userId={userId}
            tweetText={tweetText}
            key={id}
            numLikes={numLikes}
            numRetweets={numRetweets}
            numComments={numComments}
          />
        );
      })}
    </>
  );
}
