import { SVGProps } from "react";

function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"></path>
    </svg>
  );
}

export default UploadIcon;
