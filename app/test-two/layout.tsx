import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { mulish, space_grotesk, sofia } from "../fonts";

const Q2RootLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <main
      className={cn(
        "min-h-screen bg-white",
        mulish.className,
        space_grotesk.variable,
        sofia.variable
      )}
    >
      {children}
    </main>
  );
};

export default Q2RootLayout;
