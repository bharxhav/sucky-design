import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto">
        <p className="py-4">define once, scale indefinitely</p>

        <button className="build-button">
          <div className="glass-effect"></div>
          <span className="button-text text-xl opacity-80">Build Yours</span>
        </button>
      </div>
      <div className="flex flex-1 w-full max-w-6xl mx-auto"></div>
      <div className="w-full max-w-6xl mx-auto">
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
