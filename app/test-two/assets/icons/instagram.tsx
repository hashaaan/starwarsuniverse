import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Instagram = ({
  className,
  ...delegated
}: ComponentProps<"svg">) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <g clip-path="url(#clip0_504_586)">
        <path
          d="M4.10634 3.37563C3.45688 3.37563 2.92687 3.90564 2.92687 4.5551C2.92687 5.20457 3.45688 5.73458 4.10634 5.73458C4.75581 5.73458 5.28582 5.20457 5.28582 4.5551C5.28582 3.90564 4.75581 3.37563 4.10634 3.37563ZM7.64388 4.5551C7.64388 4.06668 7.64831 3.58268 7.62088 3.09514C7.59345 2.52885 7.46426 2.02627 7.05016 1.61217C6.63518 1.19719 6.13348 1.06889 5.56719 1.04146C5.07877 1.01403 4.59477 1.01845 4.10723 1.01845C3.6188 1.01845 3.1348 1.01403 2.64726 1.04146C2.08098 1.06889 1.57839 1.19807 1.16429 1.61217C0.749311 2.02715 0.621011 2.52885 0.593581 3.09514C0.566152 3.58356 0.570576 4.06756 0.570576 4.5551C0.570576 5.04264 0.566152 5.52753 0.593581 6.01507C0.621011 6.58136 0.750196 7.08394 1.16429 7.49804C1.57928 7.91302 2.08098 8.04132 2.64726 8.06875C3.13569 8.09618 3.61969 8.09176 4.10723 8.09176C4.59565 8.09176 5.07965 8.09618 5.56719 8.06875C6.13348 8.04132 6.63606 7.91214 7.05016 7.49804C7.46515 7.08305 7.59345 6.58136 7.62088 6.01507C7.64919 5.52753 7.64388 5.04353 7.64388 4.5551ZM4.10634 6.36988C3.10207 6.36988 2.29156 5.55938 2.29156 4.5551C2.29156 3.55083 3.10207 2.74032 4.10634 2.74032C5.11062 2.74032 5.92112 3.55083 5.92112 4.5551C5.92112 5.55938 5.11062 6.36988 4.10634 6.36988ZM5.99545 3.08983C5.76097 3.08983 5.57162 2.90048 5.57162 2.666C5.57162 2.43152 5.76097 2.24217 5.99545 2.24217C6.22993 2.24217 6.41928 2.43152 6.41928 2.666C6.41935 2.72168 6.40844 2.77682 6.38716 2.82827C6.36589 2.87973 6.33467 2.92648 6.2953 2.96585C6.25593 3.00522 6.20918 3.03644 6.15773 3.05771C6.10627 3.07899 6.05113 3.0899 5.99545 3.08983Z"
          fill="#4691F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_504_586">
          <rect
            width="8.03073"
            height="8.03073"
            fill="white"
            transform="translate(0.0913086 0.539795)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
