import { HTMLProps, useRef } from "react";
import nextId from "../../../functions/generateElementId";
import ButtonInsetHover from "../../StyleHelpers/ButtonInsetHover";

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

function Checkbox(props: CheckboxProps) {
  const { id, className, ...others } = props;
  const idRef = useRef(id ?? nextId());

  return (
    <div
      className={
        "group inline-flex cursor-pointer items-stretch border border-solid border-accent text-sm md:text-base " +
        (className ?? "")
      }
    >
      <span className="relative inline-grid w-[1.5em] cursor-pointer place-items-center overflow-hidden">
        <input
          type="checkbox"
          id={idRef.current}
          className="tab-focus-outline aspect-square w-[1em] cursor-pointer appearance-none rounded-full transition-colors checked:bg-accent"
          {...others}
        />
        <ButtonInsetHover inset="2px" />
      </span>
      <label
        htmlFor={idRef.current}
        className="border-l-solid inline-block flex-1 cursor-pointer border border-l border-transparent border-l-accent bg-black/80 px-2 py-1 text-[1em] leading-normal"
      >
        {props.label}
      </label>
    </div>
  );
}

export default Checkbox;
