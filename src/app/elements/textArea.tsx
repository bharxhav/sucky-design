interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  silent?: boolean;
  legend?: string;
  resize?: "none" | "x" | "y" | "both";
  legendPlacement?: "left" | "center" | "right";
}

const baseStyle =
  "border-2 border-gray-800 rounded-md px-2 py-1 bg-transparent outline-none";

export default function Textarea({
  className = "",
  legend,
  legendPlacement = "left",
  silent = false,
  resize = "both",
  ...props
}: TextareaProps) {
  const combinedStyles = `${baseStyle} ${className}`.trim();

  if (silent) {
    return <textarea className={className} {...props} />;
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
        <textarea
          className={`bg-transparent outline-none w-full ${
            resize === "none"
              ? "resize-none"
              : resize === "x"
              ? "resize-x"
              : resize === "y"
              ? "resize-y"
              : "resize"
          }`}
          {...props}
        />
      </fieldset>
    );
  }

  return <textarea className={combinedStyles} {...props} />;
}
