interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  silent?: boolean;
  legend?: string;
  legendPlacement?: "left" | "center" | "right";
}

const baseStyle =
  "border-2 border-gray-800 rounded-md px-2 py-1 bg-transparent outline-none";

export default function Input({
  className = "",
  legend,
  legendPlacement = "left",
  silent = false,
  ...props
}: InputProps) {
  const combinedStyles = `${baseStyle} ${className}`.trim();

  if (silent) {
    return <input className={className} {...props} />;
  }

  if (legend) {
    return (
      <fieldset className={combinedStyles}>
        <legend
          style={{ textAlign: legendPlacement }}
          className={`${
            legendPlacement === "left"
              ? "ml-2"
              : legendPlacement === "right"
              ? "mr-2"
              : ""
          } text-sm opacity-60`}
        >
          {legend}
        </legend>
        <input className="bg-transparent outline-none w-full" {...props} />
      </fieldset>
    );
  }

  return <input className={combinedStyles} {...props} />;
}
