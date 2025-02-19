import Div from "../elements/div";
import Link from "../elements/link";

export default function BuildLayout({
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
      {children}
    </Div>
  );
}
