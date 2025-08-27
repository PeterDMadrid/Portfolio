import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    external?: boolean;
    style?: CSSProperties;       // optional inline style
    className?: string;          // optional extra Tailwind classes
}

export default function Button({
    href,
    children,
    variant = "primary",
    external = false,
    style = {},
    className = "",
}: ButtonProps) {
    const baseClasses = `
    px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 cursor-pointer
    transition-all duration-300 relative overflow-hidden
    hover:-translate-y-[3px]
  `;

    const variants = {
        primary: `
      bg-gradient-to-br from-indigo-500 to-violet-500 text-white
      shadow-[0_4px_15px_rgba(99,102,241,0.4)]
      hover:shadow-[0_8px_25px_rgba(99,102,241,0.6)]
    `,
        secondary: `
      bg-white/10 text-gray-200 border border-white/20 backdrop-blur-md
      hover:bg-white/15
    `,
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

    if (external) {
        return (
            <a
                href={href}
                className={combinedClasses}
                target="_blank"
                rel="noopener noreferrer"
                style={style}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedClasses} style={style}>
            {children}
        </Link>
    );
}
