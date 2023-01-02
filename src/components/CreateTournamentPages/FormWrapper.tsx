import { HTMLProps, PropsWithChildren, useEffect, useRef } from "react";
import { selfValidationEvent } from "../Inputs/BasicInput";

interface FormWrapperProps extends HTMLProps<HTMLFormElement> {
  isValid?: {
    current: boolean;
  };
  onValidated?: (e: HTMLFormElement) => void;
}

function FormWrapper({ id, children, isValid, onValidated = () => {} }: PropsWithChildren<FormWrapperProps>) {
  const ref = useRef<HTMLFormElement>(null);

  const validateEvent = () => {
    // ref.current?.reportValidity();
    if (!isValid) return;
    if (ref.current === null) return;
    // if (ref.current?.checkValidity()) {
    const arr = Array.from(ref.current.elements);

    let formIsValid = true;
    for (const el of arr) {
      const element = el as HTMLElement;
      element.dispatchEvent(selfValidationEvent);
      // element.focus();
      // element.blur();
      if (element.getAttribute("data-invalid") !== null) formIsValid = false;
    }
    if (formIsValid) {
      isValid.current = true;
      onValidated(ref.current);
    }
    // }
  };

  useEffect(() => {
    ref.current?.addEventListener("validate", validateEvent);

    return () => {
      ref.current?.removeEventListener("validate", validateEvent);
    };
  }, []);

  return (
    <form ref={ref} id={id}>
      <div className="border-2 border-accent p-1">
        <div className="rounded-t-2xl border border-accent bg-secondary pt-4 md:pt-6">{children}</div>
      </div>
    </form>
  );
}

export default FormWrapper;
