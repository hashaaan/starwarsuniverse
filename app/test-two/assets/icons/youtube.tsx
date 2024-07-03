import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Youtube = ({
  className,
  color = "#4691F2",
  ...delegated
}: ComponentProps<"svg">) => {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <path
        d="M4.77101 7.08257H4.7638C4.74146 7.08257 2.50565 7.07825 1.94157 6.92506C1.78915 6.884 1.6502 6.80362 1.53861 6.69198C1.42703 6.58033 1.34673 6.44133 1.30575 6.28889C1.20432 5.71664 1.15534 5.13633 1.15941 4.55518C1.1568 3.97307 1.2071 3.39194 1.30972 2.81894C1.35185 2.66625 1.43252 2.52695 1.54399 2.41441C1.65545 2.30187 1.79397 2.21987 1.94625 2.17628C2.49484 2.0321 4.66901 2.0321 4.76128 2.0321H4.76885C4.79156 2.0321 7.03313 2.03643 7.59145 2.18962C7.90106 2.2736 8.14292 2.51545 8.22654 2.82507C8.33107 3.39961 8.38045 3.98244 8.37324 4.56635C8.37576 5.14775 8.32533 5.72817 8.22257 6.30042C8.18107 6.45269 8.10044 6.59146 7.98872 6.70293C7.87699 6.81441 7.73804 6.89471 7.58568 6.93588C7.03781 7.08113 4.86328 7.08257 4.77101 7.08257ZM4.05013 3.47566L4.04833 5.6383L5.92694 4.55698L4.05013 3.47566Z"
        fill={color}
      />
    </svg>
  );
};
