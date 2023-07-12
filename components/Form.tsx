import { Post } from '@types';
import Link from 'next/link';
import { ChangeEvent } from 'react';

type FormProps = {
  type: string;
  post: Post;
  setPost?: (value: any) => void;
  submitting: boolean;
  handleSubmit: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Form = ({ type, post, setPost, submitting, handleSubmit }: FormProps) => {
  return (
    <section className="w-full max-w-full flex-start flex-col ">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{type} SPELL</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with any
        AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-[#18212a] bg-[#18212a] p-5"
      >
        <label>
          <span className="font-joystix font-semibold text-base text-white">Your AI Spell</span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-white  bg-[#13181e] outline-0 font-pixelate"
          />
        </label>

        <label>
          <span className="font-joystix font-semibold text-base text-white">
            Field of Prompt{' '}
            <span className="font-normal">(#product, #webdevelopment, #idea, etc.)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-white outline-0 bg-[#13181e] font-pixelate"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm font-pixelate">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white font-pixelate"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
