import anime, { AnimeInstance } from "animejs";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import nextId from "../../functions/generateElementId";
import toggleDisplay from "../../functions/toggleElementDisplay";

interface ModalProps {
  open: boolean;
  handleClose?: () => void;
  children: ReactNode;
}

function Modal({ open, handleClose, children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (open) {
      const offset = window.innerWidth - document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${offset}px`;
      const til = anime.timeline({
        easing: "cubicBezier(.4, 0, .2, 1)",
        begin: function () {
          // ! => in typescript it means it is not going to be null
          toggleDisplay(true, overlay.current!);
        },
        complete: function () {
          toggleDisplay(false, overlay.current!);
          ref.current?.focus();
        },
      });

      til.add({
        targets: ref.current,
        scale: [0, 1],
        duration: 400,
      });
      til.add({
        targets: overlay.current,
        translateY: [0, "100%"],
        duration: 600,
      });
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [open]);

  if (!open) return <></>;
  return createPortal(
    <div className={`fixed top-0 left-0 grid h-screen w-full place-items-center bg-black/50 px-1 backdrop-blur-[1px]`}>
      <div
        ref={ref}
        tabIndex={0}
        className="relative w-full max-w-[650px] overflow-hidden rounded-md border-2 border-solid border-primary/50 bg-secondary shadow-lg shadow-primary focus:outline-none"
      >
        <div>{children}</div>
        <div ref={overlay} className="absolute inset-0 rounded-md bg-primary/80 backdrop-blur-[1px]"></div>
      </div>
    </div>,
    document.getElementById("portal-root")!
  );
}

export default Modal;
