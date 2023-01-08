// @ts-nocheck - for props spreading
import { HTMLProps, PropsWithChildren } from "react";
import ButtonInsetHover from "../../StyleHelpers/ButtonInsetHover";

function BasicButton(htmlprops: PropsWithChildren<HTMLProps<HTMLButtonElement>>) {
  const { className, children, ...props } = htmlprops;

  return (
    <button
      className={
        "tab-focus-outline group relative isolate overflow-hidden border border-accent p-2 transition-transform duration-75 active:scale-95 " +
        (className ? className : "")
      }
      {...props}
    >
      {children}
      <ButtonInsetHover />
    </button>
  );
}

export default BasicButton;
