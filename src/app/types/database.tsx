export interface Tweet {
  id: number;
  userId: number;
  tweetText: string;
  numLikes: number;
  numRetweets: number;
  numComments: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  followers: number;
  following: number;
}
