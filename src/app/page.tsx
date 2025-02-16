import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto">
        <p className="py-4">define once, scale indefinitely</p>

        <Link className="build-button" href="/build">
          <div className="glass-effect"></div>
          <span className="button-text text-xl opacity-80">Build Yours</span>
        </Link>
      </div>
      <div className="flex-1" />
      <p className="w-full max-w-6xl mx-auto text-left opacity-60">
        2 users, but 14 examples:
      </p>
      <div className="w-full pb-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-7 gap-4">
          {[
            "intxrnet",
            "apple",
            "google",
            "vercel",
            "microsoft",
            "youtube",
            "amazon",
            "isthisanai",
            "meta",
            "github",
            "cloudflare",
            "pinterest",
            "linkedin",
            "shadcn",
          ].map((name) => (
            <Link
              key={name}
              href={`/${name}`}
              className="w-full text-center p-2"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
