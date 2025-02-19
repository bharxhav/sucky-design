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
        <Div
          silent
          className="flex justify-between items-center max-w-5xl mx-auto gap-8"
        >
          <Div silent className="flex-1 flex flex-wrap gap-4 justify-end">
            {[
              "intxrnet",
              "canonical",
              "apple",
              "google",
              "vercel",
              "microsoft",
              "youtube",
              "amazon",
              "twitch",
              "ibm",
              "j&j",
            ].map((name) => (
              <Link
                silent
                key={name}
                href={`/${name}`}
                className="text-center px-3 py-1 hover:text-gray-700 whitespace-nowrap"
              >
                {name}
              </Link>
            ))}
          </Div>

          <div className="flex-shrink-0">
            <p>sucky</p>
          </div>

          <Div silent className="flex-1 flex flex-wrap gap-4 justify-start">
            {[
              "cloudflare",
              "pinterest",
              "isthisanai",
              "linkedin",
              "meta",
              "github",
              "shadcn",
              "nokia",
              "cvs",
              "spacex",
            ].map((name) => (
              <Link
                silent
                key={name}
                href={`/${name}`}
                className="text-center px-3 py-1 hover:text-gray-700 whitespace-nowrap"
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
