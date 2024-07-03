import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { mulish, space_grotesk, sofia } from "../fonts";

const Q2RootLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <div
      className={cn(
        "",
        mulish.className,
        space_grotesk.variable,
        sofia.variable
      )}
    >
      {children}
    </div>
  );
};

export default Q2RootLayout;
