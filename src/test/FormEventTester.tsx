import { useRef, useEffect } from "react";
import CustomEventType from "../static/constants/CustomEvents";

export const ValidateButton = ({ targetid, id }: { targetid: string; id: string }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    document.getElementById(targetid)?.dispatchEvent(new CustomEvent(CustomEventType.validate));
  };

  const handleEventReceiver = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    ref.current?.addEventListener(CustomEventType.validated, handleEventReceiver);

    return () => {
      ref.current?.removeEventListener(CustomEventType.validated, handleEventReceiver);
    };
  }, []);

  return (
    <button id={id} ref={ref} type="button" onClick={handleClick}>
      Validate Button
    </button>
  );
};
