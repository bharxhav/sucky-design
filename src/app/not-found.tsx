import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex w-full justify-between items-center px-6 py-4">
        <h1 className="m-0 p-0">
          <Link href="/">sucky design?</Link>
        </h1>
        <div>
          <Link
            className="opacity-60"
            href="https://its-ours.org?by=sucky-design"
            target="_blank"
          >
            its-ours.org
          </Link>
        </div>
      </header>
      <div className="flex flex-col h-full justify-center">
        <div className="grid grid-cols-1 gap-6 justify-center items-center w-full max-w-sm mx-auto">
          <h1 className="text-2xl font-bold py-4 text-center">
            404 sucks, doesn&apos;t it?
          </h1>
          <Link className="build-button" href="/build">
            <div className="glass-effect"></div>
            <span className="button-text text-xl opacity-80 text-center">
              the not sucky button
            </span>
          </Link>
          <p className="text-center opacity-60">
            dont be caught lacking, build your own sucky design
          </p>
        </div>
      </div>
    </div>
  );
}
