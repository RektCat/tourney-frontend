import anime from "animejs";
import { forwardRef } from "react";
import { useEffect, useRef } from "react";
import nextId from "../../functions/generateElementId";

export const BasicInput = forwardRef((htmlprops, ref) => {
  const { className, ...props } = htmlprops;

  return (
    <input
      ref={ref}
      className={
        "w-full rounded-r-2xl bg-transparent px-2 py-1 text-base text-black focus:outline-none md:text-lg" +
        (className ? className : "")
      }
      {...props}
    />
  );
});

export const BasicInputWithLabel = (htmlprops) => {
  const { labeltext, ...props } = htmlprops;
  const id = useRef(nextId());
  const ref = useRef();
  const spanref = useRef();

  const handleFocusAnimation = () => {
    anime({
      targets: spanref.current,
      translateX: ["-100%", 0],
      duration: 300,
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

    return () => {
      ref.current?.removeEventListener("focus", handleFocusAnimation);
      ref.current?.removeEventListener("blur", handleBlurAnimation);
    };
  }, []);

  return (
    <div className="w-full">
      <label htmlFor={id.current} className="ml-4 mb-1 block">
        {labeltext}
      </label>
      <div className="group relative isolate w-full overflow-hidden rounded-r-2xl bg-white pl-2">
        <span
          className="absolute inset-0 -z-50 inline-block bg-transparent group-hover:bg-outline/20"
          aria-hidden="true"
        ></span>
        <span
          ref={spanref}
          className="absolute left-0 top-0 -z-40 inline-block h-full w-3 -translate-x-full bg-outline"
          aria-hidden="true"
        ></span>
        <BasicInput ref={ref} id={id.current} {...props} />
      </div>
    </div>
  );
};

export default BasicInputWithLabel;
