interface DivProps {
  silent?: boolean;
  className?: string;
  legend?: string;
  legendPlacement?: "left" | "center" | "right";
  children?: React.ReactNode;
}

const baseStyle = "border-2 border-dashed border-gray-800 rounded-md";

export default function Div({
  className = "",
  legend,
  legendPlacement = "left",
  silent = false,
  children,
}: DivProps) {
  const combinedStyles = `${baseStyle} ${className}`.trim();

  if (silent) {
    return <div className={className}>{children}</div>;
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
          }
          text-sm
          opacity-60
          `}
        >
          {legend}
        </legend>
        {children}
      </fieldset>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
}
