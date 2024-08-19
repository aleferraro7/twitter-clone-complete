'use client';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from '@nextui-org/react';
import { useState } from 'react';
import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react';

export default function TweetCard({
  userId,
  tweetText,
  numLikes,
  numRetweets,
  numComments,
}: {
  userId: number;
  tweetText: string;
  numLikes: number;
  numComments: number;
  numRetweets: number;
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className='shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20'>
      <CardHeader className='justify-between'>
        <div className='flex gap-x-2'>
          <Avatar
            isBordered
            radius='full'
            size='md'
            src='https://nextui.org/avatars/avatar-1.png'
          />
          <div className='flex flex-col gap-1 items-start justify-center'>
            <h4 className='text-small font-semibold leading-none text-white'>
              {userId}
            </h4>
            <h5 className='text-small tracking-tight text-white'>{userId}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className='px-3 py-0 text-xs text-white'>
        <p>{tweetText}</p>
      </CardBody>
      <CardFooter className='gap-3 flex'>
        <div className='flex gap-1'>
          <button>
            <IconHeart className='text-white w-4 h-4 ' />
          </button>
          <p className='text-small text-white w-4 h-4'>{numLikes}</p>
        </div>
        <div className='flex gap-1'>
          <button>
            <IconMessageCircle className='text-white w-4 h-4' />
          </button>
          <p className='text-small text-white w-4 h-4'>{numComments}</p>
        </div>
        <div className='flex gap-1'>
          <button>
            <IconRepeat className='text-white w-4 h-4' />
          </button>
          <p className='text-small text-white w-4 h-4'>{numRetweets}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
