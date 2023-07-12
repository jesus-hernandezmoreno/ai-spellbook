import { Feed } from '@components';

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center font-joystix"> AI Spells</span>
    </h1>
    <p className="desc">
      Within the pages of the AI Spellbook, you'll discover a trove of arcane prompts, each one a
      magical formula infused with the essence of artificial intelligence. Unleash your imagination
      and wield the extraordinary abilities granted by these AI spells.
    </p>

    <Feed />
  </section>
);

export default Home;
