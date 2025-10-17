import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ className = "", children, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
    "bg-slate-500 text-white dark:bg-white dark:text-slate-900 hover:opacity-90";

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}