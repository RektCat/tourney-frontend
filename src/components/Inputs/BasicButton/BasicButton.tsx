// @ts-nocheck - for props spreading
import { HTMLProps, PropsWithChildren } from "react";

function BasicButton(htmlprops: PropsWithChildren<HTMLProps<HTMLButtonElement>>) {
  const { className, children, ...props } = htmlprops;

  return (
    <button
      className={
        "tab-focus-outline group relative isolate border border-accent p-2 transition-transform duration-75 active:scale-95 " +
        (className ? className : "")
      }
      {...props}
    >
      {children}
      <span className="absolute inset-0 -z-10 bg-transparent transition-colors group-hover:bg-outline"></span>
      <span className="absolute inset-0 -z-10 bg-black/80"></span>
    </button>
  );
}

export default BasicButton;
