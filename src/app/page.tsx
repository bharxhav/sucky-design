import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex w-full justify-between items-center px-6 py-4">
        <h1 className="m-0 p-0">
          <Link href="/">Sucky Design?</Link>
        </h1>
        <div>
          <Link href="https://its-ours.org?by=sucky-design" target="_blank">
            its-ours.org
          </Link>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto">
        <p className="py-4">define once, scale indefinitely</p>

        <Link className="build-button" href="/build">
          <div className="glass-effect"></div>
          <span className="button-text text-xl opacity-80">Build Yours</span>
        </Link>
      </div>
      <div className="flex-1 py-6">
        <div className="h-full w-full max-w-7xl mx-auto flex flex-col">
          <div className="flex flex-row border border-gray-200 h-1/3">
            <div className="flex flex-row w-1/3">
              <div className="w-1/2 flex items-center justify-center">1</div>
              <div className="w-1/2 flex items-center justify-center">2</div>
              <div className="flex-1 flex items-center justify-center">3</div>
            </div>
          </div>
          <p className="text-center opacity-60">
            can you believe it&apos;s free, and{" "}
            <Link
              href="https://github.com/bharxhav/sucky-design"
              target="_blank"
            >
              open source?
            </Link>{" "}
            #omg
          </p>
          <div className="flex flex-row border border-gray-200 h-1/3">
            <div className="flex items-center justify-center">1</div>
            <div className="flex-grow flex items-center justify-center">2</div>
            <div className="flex items-center justify-center">3</div>
          </div>
          <p className="text-center opacity-60">
            {`now you and your llms can now be stylish, without even trying! ᕙ(⇀‸↼‶)ᕗ`}
          </p>
          <div className="flex flex-row border border-gray-200 h-1/3">
            <div className="flex-1 flex items-center justify-center">1</div>
            <div className="flex flex-row w-1/3">
              <div className="w-1/2 flex items-center justify-center">2</div>
              <div className="w-1/2 flex items-center justify-center">3</div>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full max-w-6xl mx-auto text-left opacity-60 py-4">
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
