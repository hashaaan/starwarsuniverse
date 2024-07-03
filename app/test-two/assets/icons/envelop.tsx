import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Envelop = ({ className, ...delegated }: ComponentProps<"svg">) => {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <path
        d="M0.0388184 2.74805V7.1693C0.0388184 7.5793 0.201689 7.9725 0.4916 8.26241C0.781511 8.55232 1.17471 8.71519 1.58471 8.71519H9.31417C9.72417 8.71519 10.1174 8.55232 10.4073 8.26241C10.6972 7.9725 10.8601 7.5793 10.8601 7.1693V2.74805L6.25949 5.57858C6.01588 5.72845 5.73547 5.8078 5.44944 5.8078C5.16342 5.8078 4.88301 5.72845 4.6394 5.57858L0.0388184 2.74805Z"
        fill="white"
      />
      <path
        d="M10.8601 1.84008V1.75866C10.8601 1.34867 10.6972 0.955461 10.4073 0.66555C10.1174 0.375639 9.72417 0.212769 9.31417 0.212769H1.58471C1.17471 0.212769 0.781511 0.375639 0.4916 0.66555C0.201689 0.955461 0.0388184 1.34867 0.0388184 1.75866V1.84008L5.04442 4.92053C5.16622 4.99547 5.30643 5.03514 5.44944 5.03514C5.59245 5.03514 5.73266 4.99547 5.85447 4.92053L10.8601 1.84008Z"
        fill="white"
      />
    </svg>
  );
};