import Link from "./elements/link";
import Div from "./elements/div";
import Select from "./elements/select";
import Image from "next/image";

export default function Home() {
  return (
    <Div silent className="flex flex-col h-full">
      <header className="flex w-full justify-between items-center px-6 py-4">
        <h1 className="m-0 p-0">
          <Link silent href="/">
            sucky design?
          </Link>
        </h1>
        <Div silent>
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
        silent
        className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto"
      >
        <p className="py-4 opacity-80">define once, scale indefinitely</p>

        <Link silent className="build-button" href="/build">
          <Div silent className="glass-effect"></Div>
          <span className="button-text text-xl opacity-80">Build Yours</span>
        </Link>
      </Div>
      <Div silent className="flex-1 py-6">
        <Div silent className="h-full w-full max-w-5xl mx-auto flex flex-col">
          <Div silent className="flex flex-row h-1/3">
            <Div silent className="flex flex-row w-1/3">
              <Div
                silent
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
              <Div silent className="w-1/2 flex items-center justify-center">
                rule n <sup>o</sup> 1:
              </Div>
            </Div>
            <Div
              legend="colors"
              legendPlacement="right"
              className="flex flex-1 items-center justify-center"
            >
              <Div silent className="w-1/3 flex-col text-center items-center">
                <p className="text-center opacity-80 p-2">my data science</p>
                <p className="text-center opacity-80">==</p>
                <p className="text-center opacity-80 p-2">your color theory</p>
              </Div>
              <Div silent className="w-full h-full"></Div>
            </Div>
          </Div>
          <Div silent className="flex flex-row h-1/3">
            <Div silent className="flex w-1/6 items-center justify-center">
              1
            </Div>
            <Div
              silent
              className="flex w-2/3 items-center justify-around flex-row"
            >
              <Div silent className="flex flex-row items-center justify-center">
                <hr className="w-full border-white" />
              </Div>
              <p className="text-center opacity-80">inherit design</p>
              <Select
                options={[
                  { value: "🙈", label: "🙈" },
                  { value: "🙉", label: "🙉" },
                  { value: "🙊", label: "🙊" },
                ]}
                legend="shrewd monkeys"
              />
            </Div>
            <Div silent className="flex w-1/6 items-center justify-center">
              3
            </Div>
          </Div>
          <Div silent className="flex flex-row h-1/3">
            <Div
              legend="words"
              className="flex-1 flex items-center justify-center flex-row"
            >
              <Div className="h-full w-full"></Div>
              <Image
                className="w-1/3 h-full"
                src="/logo.svg"
                alt="word"
                width={200}
                height={200}
                draggable={false}
              ></Image>
            </Div>
            <Div silent className="flex flex-row w-1/3">
              <Div silent className="w-1/2 flex items-center justify-center">
                :rule n <sup>o</sup> 3
              </Div>
              <Div
                silent
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
      <Div silent className="w-full pb-6 max-w-4xl mx-auto">
        <Div silent className="grid grid-cols-7 gap-4">
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
              silent
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
