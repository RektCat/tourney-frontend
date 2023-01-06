import { HTMLProps, useRef } from "react";
import nextId from "../../../functions/generateElementId";

interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

function RadioButton(props: RadioButtonProps) {
  const id = useRef(props.id ?? nextId());

  return (
    <div>
      <label htmlFor={id.current} className="sr-only">
        {props.label}
      </label>
      <input
        id={id.current}
        type="radio"
        className="h-[1em] w-[1em] appearance-none border-2 border-solid border-outline bg-white checked:bg-accent"
        {...props}
      />
    </div>
  );
}
export default RadioButton;
