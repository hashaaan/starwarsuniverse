import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Facebook = ({
  className,
  ...delegated
}: ComponentProps<"svg">) => {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <path
        d="M6.73056 9.44673V5.90174H7.99294L8.18058 4.51376H6.73056V3.62968C6.73056 3.22916 6.84835 2.95494 7.45511 2.95494H8.22395V1.71748C7.84987 1.6795 7.47385 1.66116 7.09763 1.66255C5.98181 1.66255 5.21571 2.30788 5.21571 3.49257V4.51117H3.96155V5.89915H5.21845V9.44673H6.73056Z"
        fill="#4691F2"
      />
    </svg>
  );
};
