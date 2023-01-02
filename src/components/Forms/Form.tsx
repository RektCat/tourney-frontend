import { HTMLProps, PropsWithChildren, useEffect, useRef } from "react";
import CustomEventType from "../../static/constants/CustomEvents";
import { selfValidationEvent } from "../Inputs/BasicInput";

interface FormProps extends HTMLProps<HTMLFormElement> {
  receiver: string | HTMLElement;
  validation: "original" | "report/synthetic" | "synthetic" | undefined;
}

const handleDispatchEvent = (receiver: string | HTMLElement, data: { valid: boolean; formData?: FormData }) => {
  if (!receiver) {
    console.error("No receiver given!");
    return;
  }
  if (typeof receiver === "string") {
    if (document.getElementById(receiver) === null) console.error("Receiver is null!");
    document.getElementById(receiver)?.dispatchEvent(new CustomEvent(CustomEventType.validated, { detail: data }));
  } else {
    (receiver as HTMLElement).dispatchEvent(new CustomEvent(CustomEventType.validated, { detail: data }));
  }
};

function Form(props: PropsWithChildren<FormProps>) {
  const ref = useRef<HTMLFormElement>(null);

  const validateEvent = () => {
    const validationType = props.validation ?? "synthetic";
    if (validationType === "original" || validationType === "report/synthetic") ref.current?.reportValidity();
    if (validationType === "original") {
      if (ref.current?.checkValidity()) {
        const arr = Array.from(ref.current.elements);
        for (const el of arr) {
          const element = el as HTMLElement;
          element.focus();
          element.blur();
          if (element.getAttribute("data-invalid") !== null) {
            handleDispatchEvent(props.receiver, { valid: false });
            return;
          }
        }
        handleDispatchEvent(props.receiver, { valid: true, formData: new FormData(ref.current) });
      }
    } else {
      if (ref.current === null) return;
      const arr = Array.from(ref.current.elements);
      let formIsValid = true;
      for (const el of arr) {
        const element = el as HTMLElement;
        element.dispatchEvent(selfValidationEvent);
        if (element.getAttribute("data-invalid") !== null) {
          formIsValid = false;
          return;
        }
      }
      if (formIsValid) {
        handleDispatchEvent(props.receiver, { valid: true, formData: new FormData(ref.current) });
      } else {
        handleDispatchEvent(props.receiver, { valid: false });
      }
    }
  };

  useEffect(() => {
    ref.current?.addEventListener(CustomEventType.validate, validateEvent);

    return () => {
      ref.current?.removeEventListener(CustomEventType.validate, validateEvent);
    };
  }, []);

  return (
    <form ref={ref} {...props}>
      {props.children}
    </form>
  );
}

export default Form;
