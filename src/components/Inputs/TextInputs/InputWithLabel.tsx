import anime from "animejs";
import { HTMLProps, useEffect, useRef, useState } from "react";
import nextId from "../../../functions/generateElementId";
import CustomEventExtended from "../../../models/CustomEvent";
import CustomEventType from "../../../static/constants/CustomEvents";
import BasicInput from "./BasicInput";

export const selfValidationEvent = new CustomEvent(CustomEventType.selfValidation);

interface LabelInputProps extends HTMLProps<HTMLInputElement> {
  labeltext: string;
  // Zod schema
  schema?: any;
}

export const InputWithLabel = (htmlprops: LabelInputProps) => {
  const { labeltext, schema, ...props } = htmlprops;
  const [errorMessages, setErrorMessages] = useState<Array<string>>([]);
  const id = useRef<string>(nextId());
  const ref = useRef<HTMLInputElement>(null);
  const spanref = useRef<HTMLSpanElement>(null);

  function zValidate(e: CustomEventExtended) {
    if (!schema) return;
    if (e.target.nodeName !== "INPUT") return;
    const input = e.target as HTMLInputElement;
    if (input.disabled) return;
    const result = schema.safeParse(input.value);
    if (!result.success) {
      ref.current?.toggleAttribute("data-invalid", true);
      setErrorMessages(result.error.format()._errors);
    } else {
      ref.current?.toggleAttribute("data-invalid", false);
      setErrorMessages([]);
    }
  }

  const handleFocusAnimation = () => {
    anime({
      targets: spanref.current,
      translateX: ["-100%", 0],
      duration: 500,
      easing: "easeOutElastic(2, .6)",
    });
  };

  const handleBlurAnimation = () => {
    anime({
      targets: spanref.current,
      translateX: [0, "-100%"],
      duration: 200,
    });
  };

  useEffect(() => {
    ref.current?.addEventListener("focus", handleFocusAnimation);
    ref.current?.addEventListener("blur", handleBlurAnimation);
    // @ts-ignore: this is a custom event
    ref.current?.addEventListener(CustomEventType.selfValidation, zValidate);

    return () => {
      ref.current?.removeEventListener("focus", handleFocusAnimation);
      ref.current?.removeEventListener("blur", handleBlurAnimation);
      // @ts-ignore: this is a custom event
      ref.current?.removeEventListener(CustomEventType.selfValidation, zValidate);
    };
  }, []);

  return (
    <div className="isolate w-full">
      <label htmlFor={id.current} className="ml-4 mb-1 block text-sm md:text-base">
        {labeltext}
      </label>
      <div className="group relative isolate z-10 w-full overflow-hidden rounded-sm bg-white pl-2">
        <span
          className="absolute inset-0 -z-50 inline-block bg-transparent group-hover:bg-outline/20"
          aria-hidden="true"
        ></span>
        <span
          ref={spanref}
          className="absolute left-0 top-0 -z-40 inline-block h-full w-3 -translate-x-full bg-outline"
          aria-hidden="true"
        ></span>
        {/* TODO: have no idea why this is not correct
        @ts-ignore */}
        <BasicInput ref={ref} id={id.current} {...props} />
      </div>
      {errorMessages.length !== 0 && (
        <ul className="-z-10 -translate-y-1 rounded-b-md border border-t-0 border-warning pb-1 pt-2 pl-1 text-xs text-warning md:text-sm">
          {errorMessages.map((text, i) => (
            <li className="list-inside list-disc" key={i}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputWithLabel;
