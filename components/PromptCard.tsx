// @ts-nocheck
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { Post } from '@types';

type PromptCardProps = {
  post: Post;
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
  handleTagClick?: (tagName: string) => void;
};

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }: PromptCardProps) => {
  const { data: session } = useSession() as any;
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState('');

  const handleProfileClick = () => {
    if (post?.creator?._id === session?.user.id) return router.push('/profile');

    router.push(`/profile/${post?.creator?._id}?name=${post?.creator?.username}`);
  };

  const handleCopy = () => {
    setCopied(post?.prompt);
    navigator.clipboard.writeText(post?.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex-1 break-inside-avoid rounded-lg  bg-[#18212a] bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post?.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-joystix font-semibold text-white">{post?.creator.username}</h3>
            <p className="font-pixelate text-sm text-white">{post?.creator.email}</p>
          </div>
        </div>

        <div
          className="flex justify-center items-center absolute top-2 right-2 w-9 h-9 rounded-full bg-[#13181e] cursor-pointer"
          onClick={handleCopy}
        >
          <Image
            src={copied === post?.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt={copied === post?.prompt ? 'tick_icon' : 'copy_icon'}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-pixelate text-sm text-white">{post?.prompt}</p>
      <p
        className="font-pixelate text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post?.tag)}
      >
        {post?.tag}
      </p>

      {session?.user.id === post?.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-pixelate text-sm text-white cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p
            className="font-pixelate text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
