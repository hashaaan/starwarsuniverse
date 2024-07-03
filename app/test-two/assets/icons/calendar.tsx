import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Calendar = ({
  className,
  ...delegated
}: ComponentProps<"svg">) => {
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
        d="M0.631958 8.57397C0.631958 9.41016 1.2714 10.0496 2.10758 10.0496H8.99383C9.83002 10.0496 10.4695 9.41016 10.4695 8.57397V4.63897H0.631958V8.57397ZM8.99383 1.19585H8.01008V0.703972C8.01008 0.408847 7.81333 0.212097 7.51821 0.212097C7.22308 0.212097 7.02633 0.408847 7.02633 0.703972V1.19585H4.07508V0.703972C4.07508 0.408847 3.87833 0.212097 3.58321 0.212097C3.28808 0.212097 3.09133 0.408847 3.09133 0.703972V1.19585H2.10758C1.2714 1.19585 0.631958 1.83528 0.631958 2.67147V3.65522H10.4695V2.67147C10.4695 1.83528 9.83002 1.19585 8.99383 1.19585Z"
        fill="white"
      />
    </svg>
  );
};