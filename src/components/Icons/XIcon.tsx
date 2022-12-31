import { SVGProps } from "react";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23 22L113 112" stroke="currentColor" />
      <path d="M23 113L113 23" stroke="currentColor" />
    </svg>
  );
}

export default XIcon;
