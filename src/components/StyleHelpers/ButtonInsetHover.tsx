interface ButtonInsetHoverProps {
  bgClasses?: string | undefined;
  inset?: string | undefined;
}

function ButtonInsetHover(props: ButtonInsetHoverProps) {
  const inset = props.inset ?? "3px";
  return (
    <>
      <span className={"absolute inset-0 -z-10 rounded-sm bg-black/80 " + (props.bgClasses ?? "")}></span>
      <span
        className={`absolute inset-[${inset}] -z-10 -translate-x-[calc(100%_+_3px)] rounded-sm border-y-2 border-outline bg-transparent transition-transform duration-300 group-hover:translate-x-0`}
      ></span>
      <span
        className={`absolute inset-[${inset}] -z-10 -translate-y-[calc(100%_+_3px)] rounded-sm border-x-2 border-outline bg-transparent transition-transform delay-[0] duration-300 group-hover:translate-y-0 group-hover:delay-300`}
      ></span>
    </>
  );
}

export default ButtonInsetHover;
