import Div from "../../elements/div";
import { ReactNode } from "react";

function Exhibit({
  legend,
  children,
  code,
}: {
  legend: string;
  children: ReactNode;
  code: string;
}) {
  return (
    <Div silent className="w-full max-w-7xl mx-auto p-4">
      <Div
        legend={legend}
        className="grid grid-cols-2 items-center mx-auto gap-8"
      >
        <Div silent className="p-8">
          {children}
        </Div>

        <Div silent className="p-8 font-mono text-sm items-center opacity-60">
          <pre className="whitespace-pre-wrap">{code}</pre>
        </Div>
      </Div>
    </Div>
  );
}

export default function SpecimenPage() {
  return (
    <Div silent className="flex flex-col h-full">
      <Exhibit
        legend="headings"
        code={`

`}
      >
        <div></div>
      </Exhibit>
    </Div>
  );
}
