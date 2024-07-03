"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProvidersProps = {
  readonly children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          staleTime: 60000, // 1 min
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
