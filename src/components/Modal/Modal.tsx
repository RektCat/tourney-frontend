import { ReactNode, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  handleClose?: () => void;
  children: ReactNode;
}

function Modal({ open, handleClose, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return <></>;
  return createPortal(
    <div
      ref={ref}
      className={`fixed top-0 left-0 grid h-screen w-full place-items-center bg-black/50 backdrop-blur-[1px]`}
    >
      {children}
    </div>,
    document.getElementById("portal-root")!
  );
}

export default Modal;
