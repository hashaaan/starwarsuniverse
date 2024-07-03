import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Magnify = ({ className, ...delegated }: ComponentProps<"svg">) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...delegated}
      className={cn("", className)}
    >
      <g clip-path="url(#clip0_504_784)">
        <path
          d="M9.23693 8.29325L11.3436 10.3995L10.6476 11.0955L8.54142 8.98876C7.75774 9.617 6.78297 9.95869 5.77856 9.95727C3.33492 9.95727 1.35168 7.97403 1.35168 5.53039C1.35168 3.08676 3.33492 1.10352 5.77856 1.10352C8.22219 1.10352 10.2054 3.08676 10.2054 5.53039C10.2069 6.5348 9.86517 7.50957 9.23693 8.29325ZM8.25023 7.92828C8.87448 7.28633 9.22309 6.42581 9.22168 5.53039C9.22168 3.62782 7.68064 2.08727 5.77856 2.08727C3.87599 2.08727 2.33543 3.62782 2.33543 5.53039C2.33543 7.43247 3.87599 8.97352 5.77856 8.97352C6.67398 8.97493 7.5345 8.62631 8.17645 8.00206L8.25023 7.92828Z"
          fill="#4691F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_504_784">
          <rect
            width="11.805"
            height="11.805"
            fill="white"
            transform="translate(0.367554 0.119751)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
