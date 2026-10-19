import type { SVGProps } from "react";

export const VectorDatabase = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="9" cy="5" rx="6" ry="3" />
    <path d="M3 5v12c0 1.66 2.69 3 6 3M15 5v5M3 11c0 1.66 2.69 3 6 3M3 17c0 1.66 2.69 3 6 3" />
    <path d="m13 17 6-4m-6 4 6 4m0-8v8" stroke="#8b5cf6" />
    <g fill="#8b5cf6" stroke="none">
      <circle cx="13" cy="17" r="2" />
      <circle cx="19" cy="13" r="2" />
      <circle cx="19" cy="21" r="2" />
    </g>
  </svg>
);
