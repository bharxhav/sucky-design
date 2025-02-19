import Div from "../elements/div";
import Link from "../elements/link";

export default function SpecimenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

      <Div silent className="w-full pb-6 mx-auto text-gray-500">
        <Div silent className="grid grid-cols-3 gap-8 items-center">
          <Div silent className="grid grid-cols-5 gap-4">
            {[
              "intxrnet",
              "apple",
              "google",
              "vercel",
              "microsoft",
              "youtube",
              "amazon",
              "twitch",
              "j&j",
              "canonical",
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

          <div className="flex justify-center">
            <img src="/logo.svg" alt="Logo" className="w-24" />
          </div>

          <Div silent className="grid grid-cols-5 gap-4">
            {[
              "isthisanai",
              "meta",
              "github",
              "cloudflare",
              "pinterest",
              "linkedin",
              "shadcn",
              "nokia",
              "cvs",
              "spacex",
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
      {children}
    </Div>
  );
}
