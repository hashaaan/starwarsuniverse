import type { Metadata } from "next";
import PlanetsTable from "./planets-table";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Star Wars Universe | Planets",
  description:
    "The Star Wars franchise takes place in a frictional universe of multiple planets and moons.",
};

const Home = async () => {
  return (
    <main className="container min-h-screen mt-8">
      <Suspense fallback={<Skeleton className="h-56" />}>
        <PlanetsTable />
      </Suspense>
    </main>
  );
};

export default Home;
