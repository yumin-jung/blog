import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">
        Yumin Jung (
        <A target="_blank" href="https://instagram.com/self_overcoming">
          @self_overcoming
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/yumin-jung/next-blog">
          Source
        </A>
      </div>
    </footer>
  );
}
