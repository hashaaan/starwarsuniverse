import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Twitter = ({ className, ...delegated }: ComponentProps<"svg">) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <path
        d="M4.10748 8.31719C4.65543 8.32048 5.19861 8.22011 5.70552 8.02192C6.21242 7.82373 6.67296 7.53165 7.06043 7.16264C7.4479 6.79362 7.75457 6.35501 7.96268 5.87224C8.17078 5.38948 8.27616 4.87216 8.27272 4.35031V4.16803C8.55675 3.96983 8.8026 3.72629 8.99936 3.44818C8.7319 3.55959 8.4489 3.63347 8.15918 3.66753C8.46635 3.49322 8.69683 3.21884 8.80797 2.89516C8.5217 3.05873 8.20778 3.17372 7.8802 3.23501C7.65959 3.01113 7.36765 2.86274 7.04957 2.81279C6.73149 2.76285 6.40499 2.81413 6.12059 2.9587C5.8362 3.10327 5.60975 3.33308 5.4763 3.61256C5.34285 3.89205 5.30983 4.20563 5.38236 4.50478C4.8004 4.47758 4.23099 4.33394 3.71119 4.08322C3.19139 3.83251 2.73287 3.48034 2.36548 3.04964C2.18023 3.35586 2.12408 3.71768 2.2084 4.06185C2.29272 4.40602 2.51121 4.70681 2.81964 4.90332C2.59211 4.89497 2.36985 4.8357 2.17085 4.73031V4.74576C2.16882 5.06578 2.28202 5.37679 2.49158 5.62696C2.70113 5.87713 2.99438 6.05135 3.32245 6.12058C3.11083 6.17478 2.88915 6.18323 2.67366 6.14529C2.76864 6.41821 2.94994 6.65647 3.19271 6.82738C3.43547 6.9983 3.72781 7.0935 4.02963 7.09994C3.51359 7.49556 2.87222 7.71332 2.20977 7.71784C2.09363 7.71463 1.97775 7.70535 1.86267 7.69003C2.53318 8.09688 3.31246 8.31138 4.10748 8.30793"
        fill="#4691F2"
      />
    </svg>
  );
};