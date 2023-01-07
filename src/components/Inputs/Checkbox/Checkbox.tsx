import { HTMLProps, useRef } from "react";
import nextId from "../../../functions/generateElementId";

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

function Checkbox(props: CheckboxProps) {
  const { id, className, ...others } = props;
  const idRef = useRef(id ?? nextId());

  return (
    <div
      className={
        "inline-flex cursor-pointer items-stretch border border-solid border-accent text-sm hover:bg-outline md:text-base " +
        (className ?? "")
      }
    >
      <span className="inline-grid w-[1.5em] cursor-pointer place-items-center bg-black/80">
        <input
          type="checkbox"
          id={idRef.current}
          className="tab-focus-outline aspect-square w-[1em] appearance-none rounded-full transition-colors checked:bg-accent"
          {...others}
        />
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
