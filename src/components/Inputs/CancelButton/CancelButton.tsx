import { HTMLProps } from "react";

function CancelButton(htmlprops: HTMLProps<HTMLButtonElement>) {
  const { className, ...props } = htmlprops;

  return (
    // @ts-ignore
    <button
      className={"group relative isolate rounded-full text-2xl text-outline " + (className ? className : "")}
      {...props}
    >
      <svg
        className="h-[1em] w-[1em] rotate-90 stroke-[10]"
        viewBox="0 0 135 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M35 35L100 100" stroke="currentColor" />
        <path d="M35 100L100 35" stroke="currentColor" />
        <circle
          cx="68"
          cy="68"
          r="62"
          className="transition-[stroke-dashoffset] duration-1000 ease-linear [stroke-dashoffset:900] [stroke-dasharray:900] group-hover:[stroke-dashoffset:0]"
          stroke="currentColor"
        />
      </svg>
      {/* <span className="absolute inset-[0.125em] -z-50 origin-bottom scale-0 rounded-full bg-white/40 transition-transform duration-1000 canhover:group-hover:scale-100"></span> */}
    </button>
  );
}

export default CancelButton;
