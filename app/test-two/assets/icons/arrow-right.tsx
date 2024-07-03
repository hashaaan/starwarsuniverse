import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const ArrowRight = ({
  className,
  ...delegated
}: ComponentProps<"svg">) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <path
        d="M6.62144 9.02367C6.52306 8.9253 6.47584 8.80643 6.47978 8.66706C6.48371 8.5277 6.53503 8.40883 6.63373 8.31045L8.02328 6.92091H2.53887C2.39951 6.92091 2.28261 6.87369 2.18817 6.77925C2.09373 6.68481 2.04667 6.56807 2.047 6.42903C2.047 6.28967 2.09422 6.17276 2.18866 6.07832C2.2831 5.98388 2.39984 5.93683 2.53887 5.93716H8.02328L6.62144 4.53531C6.52306 4.43694 6.47387 4.32004 6.47387 4.18461C6.47387 4.04918 6.52306 3.93244 6.62144 3.83439C6.71981 3.73602 6.83671 3.68683 6.97214 3.68683C7.10757 3.68683 7.22431 3.73602 7.32236 3.83439L9.57269 6.08472C9.62187 6.13391 9.6568 6.18719 9.67746 6.24458C9.69812 6.30196 9.70828 6.36345 9.70795 6.42903C9.70795 6.49461 9.69762 6.5561 9.67696 6.61348C9.65631 6.67087 9.62155 6.72416 9.57269 6.77334L7.31006 9.03597C7.21988 9.12615 7.10724 9.17124 6.97214 9.17124C6.83704 9.17124 6.72014 9.12205 6.62144 9.02367Z"
        fill="white"
      />
    </svg>
  );
};