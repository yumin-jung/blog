import { A } from './(post)/components/a';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="p-6 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <Image
        src="https://avatar.vercel.sh/yumin-jung?rounded=60"
        alt="yumin-jung"
        width={16}
        height={16}
      />
      <div className="grow text-left ml-2">
        Yumin Jung (
        <A target="_blank" href="http://www.strava.com/athletes/yumin-jung">
          Strava
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/yumin-jung/blog">
          Source
        </A>
      </div>
    </footer>
  );
}
