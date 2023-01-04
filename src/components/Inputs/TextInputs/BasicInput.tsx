import { forwardRef, HTMLProps } from "react";

export const BasicInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>((htmlprops, ref) => {
  const { className, ...props } = htmlprops;

  return (
    <input
      ref={ref}
      className={
        "w-full rounded-sm border-2 border-l-0 border-solid border-transparent bg-transparent px-2 py-1 text-sm text-black transition-colors duration-300 focus:border-outline focus:outline-none md:text-base" +
        (className ? className : "")
      }
      {...props}
    />
  );
});

export default BasicInput;
