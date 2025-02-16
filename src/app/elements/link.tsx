import NextLink from "next/link";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  silent?: boolean;
}

const baseStyle = `
  relative
  underline
  hover:after:content-['']
  hover:after:absolute
  hover:after:inset-0
  hover:after:bg-[radial-gradient(circle_at_top_center,rgba(255,225,135,0.5)_0%,transparent_50%),radial-gradient(circle_at_top_left,rgba(102,245,240,0.5)_0%,transparent_50%),radial-gradient(circle_at_top_right,rgba(255,134,103,0.5)_0%,transparent_50%),radial-gradient(circle_at_bottom_center,rgba(147,112,219,0.5)_0%,transparent_80%)]
  hover:after:blur-[0.3em]
  hover:after:opacity-80
  hover:after:-z-10
`
  .replace(/\s+/g, " ")
  .trim();

export default function Link({
  href,
  children,
  silent = false,
  className = "",
  ...props
}: LinkProps) {
  if (silent) {
    return (
      <NextLink href={href} className={className} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <NextLink href={href} className={`${baseStyle} ${className}`} {...props}>
      {children}
    </NextLink>
  );
}
