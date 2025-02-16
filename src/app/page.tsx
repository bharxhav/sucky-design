import Link from "next/link";
import Div from "./elements/div";

export default function Home() {
  return (
    <Div helper className="flex flex-col h-full">
      <header className="flex w-full justify-between items-center px-6 py-4">
        <h1 className="m-0 p-0">
          <Link href="/">sucky design?</Link>
        </h1>
        <Div helper>
          <Link
            className="opacity-60"
            href="https://its-ours.org?by=sucky-design"
            target="_blank"
          >
            its-ours.org
          </Link>
        </Div>
      </header>
      <Div
        helper
        className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto"
      >
        <p className="py-4 opacity-80">define once, scale indefinitely</p>

        <Link className="build-button" href="/build">
          <Div helper className="glass-effect"></Div>
          <span className="button-text text-xl opacity-80">Build Yours</span>
        </Link>
      </Div>
      <Div helper className="flex-1 py-6">
        <Div helper className="h-full w-full max-w-5xl mx-auto flex flex-col">
          <Div helper className="flex flex-row h-1/3">
            <Div helper className="flex flex-row w-1/3">
              <Div
                helper
                className="w-1/2 flex items-center justify-center flex-col"
              >
                <p className="text-center opacity-80">#omg</p>
                <p className="text-justify opacity-80 p-4">
                  can you believe it&apos;s free, and{" "}
                  <Link
                    href="https://github.com/bharxhav/sucky-design"
                    target="_blank"
                  >
                    open source?
                  </Link>{" "}
                </p>
              </Div>
              <Div helper className="w-1/2 flex items-center justify-center">
                2
              </Div>
            </Div>
            <Div
              legend="lines"
              legendPlacement="right"
              className="flex flex-1 items-center justify-center"
            >
              3
            </Div>
          </Div>
          <Div helper className="flex flex-row h-1/3">
            <Div helper className="flex w-1/6 items-center justify-center">
              1
            </Div>
            <Div
              legend="text"
              legendPlacement="center"
              className="flex w-2/3 items-center justify-center"
            >
              2
            </Div>
            <Div helper className="flex w-1/6 items-center justify-center">
              3
            </Div>
          </Div>
          <Div helper className="flex flex-row h-1/3">
            <Div
              legend="colors"
              className="flex-1 flex items-center justify-center"
            >
              1
            </Div>
            <Div helper className="flex flex-row w-1/3">
              <Div helper className="w-1/2 flex items-center justify-center">
                2
              </Div>
              <Div
                helper
                className="w-1/2 flex items-center justify-center flex-col"
              >
                <p className="text-justify opacity-80 p-4">
                  you and your llms can now be stylish, without even trying!
                </p>
                <p className="text-center opacity-80">ᕙ(⇀‸↼‶)ᕗ</p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <p className="w-full max-w-4xl mx-auto text-left opacity-60 py-4">
        2 users, but 14 examples:
      </p>
      <Div helper className="w-full pb-6 max-w-4xl mx-auto">
        <Div helper className="grid grid-cols-7 gap-4">
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
        </Div>
      </Div>
    </Div>
  );
}
