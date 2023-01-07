// @ts-nocheck - for props spreading
import { HTMLProps, PropsWithChildren } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  innerClass?: string;
  variant?: "outline" | "accent" | "primary" | "white";
}

function Button(htmlprops: PropsWithChildren<ButtonProps>) {
  const { className, children, innerClass, variant = "outline", ...props } = htmlprops;

  return (
    <button
      className={"group relative isolate transition-transform active:scale-95 " + (className ? className : "")}
      {...props}
    >
      <span className={"relative inline-block rounded-xl bg-transparent p-2 " + (innerClass ? innerClass : "")}>
        {children}
        <span
          className={`absolute inset-0 rounded-xl border-2 border-solid border-${variant} bg-transparent shadow-inner shadow-${variant} transition-opacity delay-[0ms] duration-[0ms] canhover:opacity-50 canhover:group-hover:opacity-100 canhover:group-hover:delay-150 canhover:group-hover:duration-300`}
        ></span>
      </span>
      <span
        className={`absolute bottom-0 left-[12px] -z-50 inline-block h-4 w-[calc(100%_-_24px)] scale-x-50 border-b-2 border-solid border-${variant} bg-transparent transition-transform canhover:group-hover:scale-100`}
      ></span>
    </button>
  );
}

export default Button;
