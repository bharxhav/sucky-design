interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  silent?: boolean;
  options: { value: string; label: string }[];
  legend?: string;
  legendPlacement?: "left" | "center" | "right";
}

const baseStyle =
  "border-2 border-dashed border-gray-800 rounded-md px-2 py-1 bg-transparent";

export default function Select({
  className = "",
  legend,
  legendPlacement = "center",
  silent = false,
  options,
  ...props
}: SelectProps) {
  const combinedStyles = `${baseStyle} ${className}`.trim();

  if (silent) {
    return (
      <select className={className} {...props}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }

  if (legend) {
    return (
      <fieldset className={combinedStyles}>
        <legend
          style={{ textAlign: legendPlacement }}
          className={`${
            legendPlacement === "left"
              ? "ml-4"
              : legendPlacement === "right"
              ? "mr-4"
              : ""
          } text-xs opacity-60`}
        >
          {legend}
        </legend>
        <select className="bg-transparent outline-none w-full" {...props}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }

  return (
    <select className={combinedStyles} {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
