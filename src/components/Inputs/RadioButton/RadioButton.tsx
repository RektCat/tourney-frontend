import { HTMLProps, useRef } from "react";
import nextId from "../../../functions/generateElementId";
import ButtonInsetHover from "../../StyleHelpers/ButtonInsetHover";

interface RadioButtonProps extends HTMLProps<HTMLInputElement> {
  label: string;
  fullWidth?: boolean;
}

function RadioButton(props: RadioButtonProps) {
  const { id, className, ...others } = props;
  const idRef = useRef(id ?? nextId());

  return (
    <div className={"text-sm md:text-base" + (props.fullWidth ? " w-full flex-1" : "")}>
      <label htmlFor={idRef.current} className="sr-only">
        {props.label}
      </label>
      <div
        className={
          "group relative isolate inline-block overflow-hidden rounded-sm py-2 px-2 text-center " +
          (props.fullWidth ? " w-full" : "")
        }
      >
        <input
          id={idRef.current}
          type="radio"
          className="peer pointer-events-auto absolute inset-0 cursor-pointer appearance-none rounded-sm border border-solid border-accent shadow-accent outline outline-1 outline-offset-2 outline-transparent focus-visible:outline-outline"
          {...others}
          tabIndex={0}
        />
        <span className="pointer-events-none relative z-10">{props.label}</span>
        {/* <span className="absolute inset-0 -z-10 bg-black/80 "></span> */}
        <ButtonInsetHover bgClasses="transition-colors duration-100 peer-checked:bg-primary" />
        {/* <span className="absolute inset-0 -z-10 bg-transparent transition-colors group-hover:bg-outline peer-checked:scale-95"></span> */}
      </div>
    </div>
  );
}
export default RadioButton;
